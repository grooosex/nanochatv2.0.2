import { useApp } from "./store";
import type { GrokModelId } from "./types";

async function readJsonError(res: Response, fallback: string) {
  try {
    const j = (await res.json()) as { error?: string };
    return j.error || fallback;
  } catch {
    return fallback;
  }
}

export async function grokOnce(body: Record<string, unknown>) {
  const s = useApp.getState().settings;
  const presetOn = Boolean(s.stActiveId);
  if (s.chatSource === "api") {
    if (!s.llmConnected || !s.llmKey) throw new Error("还没连接对话 API");
    if (!s.llmModel) throw new Error("还没选择模型");
    const res = await fetch("/api/llm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "chat",
        baseUrl: s.llmBase,
        apiKey: s.llmKey,
        model: s.llmModel,
        params: s.llmParams,
        ...body,
        stream: false,
        max_tokens: (body.max_tokens as number | undefined) ?? s.llmParams.maxTokens,
      }),
    });
    const data = (await res.json()) as { ok: boolean; text?: string; error?: string };
    if (!res.ok || !data.ok) throw new Error(data.error || `请求失败 ${res.status}`);
    return data.text ?? "";
  }

  const res = await fetch("/api/grok", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      stream: false,
      params: presetOn ? s.llmParams : undefined,
    }),
  });
  const data = (await res.json()) as { ok: boolean; text?: string; error?: string };
  if (!res.ok || !data.ok) throw new Error(data.error || `Grok 请求失败 ${res.status}`);
  return data.text ?? "";
}

function consumeSse(chunk: string, onDelta: (t: string) => void, acc: { full: string }) {
  const line = chunk.split("\n").find((l) => l.startsWith("data: "));
  if (!line) return;
  const data = line.slice(6);
  if (data === "[DONE]") return;
  try {
    const j = JSON.parse(data) as { text?: string; error?: string };
    if (j.error) throw new Error(j.error);
    if (j.text) {
      acc.full += j.text;
      onDelta(acc.full);
    }
  } catch (e) {
    if (e instanceof Error && e.message && !e.message.includes("JSON") && e.message !== "Unexpected end of JSON input") {
      throw e;
    }
  }
}

export async function grokStream(
  body: Record<string, unknown>,
  onDelta: (t: string) => void,
  signal?: AbortSignal,
) {
  const s = useApp.getState().settings;
  const api = s.chatSource === "api";
  const presetOn = Boolean(s.stActiveId);
  if (api) {
    if (!s.llmConnected || !s.llmKey) throw new Error("还没连接对话 API");
    if (!s.llmModel) throw new Error("还没选择模型");
  }

  const url = api ? "/api/llm" : "/api/grok";
  const payload = api
    ? {
        action: "chat",
        baseUrl: s.llmBase,
        apiKey: s.llmKey,
        model: s.llmModel,
        params: s.llmParams,
        ...body,
        stream: true,
        max_tokens: (body.max_tokens as number | undefined) ?? s.llmParams.maxTokens,
      }
    : { ...body, stream: true, params: presetOn ? s.llmParams : undefined };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });
  if (!res.ok || !res.body) {
    throw new Error(await readJsonError(res, `请求失败 ${res.status}`));
  }
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "";
  const acc = { full: "" };
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += dec.decode(value, { stream: true });
    const parts = buf.split("\n\n");
    buf = parts.pop() ?? "";
    for (const p of parts) consumeSse(p, onDelta, acc);
  }
  buf += dec.decode();
  if (buf.trim()) {
    for (const p of buf.split("\n\n")) consumeSse(p, onDelta, acc);
  }
  return acc.full;
}

export function modelPayload(id: GrokModelId) {
  return { grokModelId: id };
}

export async function fetchLlmModels(baseUrl: string, apiKey: string) {
  const res = await fetch("/api/llm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "models", baseUrl, apiKey }),
  });
  const data = (await res.json()) as { ok: boolean; models?: string[]; error?: string };
  if (!res.ok || !data.ok) throw new Error(data.error || `连接失败 ${res.status}`);
  return data.models ?? [];
}
