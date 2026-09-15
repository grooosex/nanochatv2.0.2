import { GROK_MODELS, shortModelLabel } from "./constants.ts";
import { chatPickerModels } from "./llm-models.ts";
import type { ChatSource, GrokModelId } from "./types.ts";

export const FOLLOW_IMAGE_AI = "__follow__";

export function llmIdentity(base: string, key: string) {
  return `${base.trim()}\n${key}`;
}

export function isGrokModelId(id: string) {
  return GROK_MODELS.some((m) => m.id === id);
}

export function imageAiLabel(id: string) {
  if (!id || id === FOLLOW_IMAGE_AI) return "与聊天一致";
  const g = GROK_MODELS.find((m) => m.id === id);
  if (g) return g.short;
  return shortModelLabel(id);
}

export function imagePickerModels(input: {
  chatSource: ChatSource;
  llmStarred: string[];
  llmModels: string[];
  llmModel: string;
  imageModelId?: string | null;
  imageModelPin?: string | null;
}): string[] {
  const ids = [FOLLOW_IMAGE_AI];
  const main =
    input.chatSource === "api"
      ? chatPickerModels(input.llmStarred, input.llmModels, input.llmModel)
      : GROK_MODELS.map((m) => m.id);
  for (const id of main) {
    if (id && !ids.includes(id)) ids.push(id);
  }
  for (const id of [input.imageModelId, input.imageModelPin]) {
    if (id && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

export function applyImageAiPick(
  current: { imageModelId?: string | null; imageModelPin?: string | null },
  pick: string,
): { imageModelId: string | null; imageModelPin: string | null } {
  const pin = current.imageModelPin || null;
  if (!pick || pick === FOLLOW_IMAGE_AI) return { imageModelId: null, imageModelPin: pin };
  return {
    imageModelId: pick,
    imageModelPin: isGrokModelId(pick) ? pin : pick,
  };
}

export type ImageWriteDest =
  | { split: false }
  | { split: true; via: "grok"; grokModelId: GrokModelId }
  | { split: true; via: "api"; model: string };

export function resolveImageWrite(imageModelId?: string | null): ImageWriteDest {
  if (!imageModelId) return { split: false };
  if (isGrokModelId(imageModelId)) {
    return { split: true, via: "grok", grokModelId: imageModelId as GrokModelId };
  }
  return { split: true, via: "api", model: imageModelId };
}
