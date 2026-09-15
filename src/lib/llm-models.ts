import type { ChatSource, LlmAccount } from "./types";

/** Chat top-bar: current pick, then starred models that are still listed. */
export function chatPickerModels(starred: string[], available: string[], current: string): string[] {
  const avail = new Set(available);
  const ids: string[] = [];
  if (current) ids.push(current);
  for (const id of starred) {
    if (avail.has(id) && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

/** Drop stars that left the catalog. Keep `current` if it is still the active pick. */
export function pruneStarred(starred: string[], available: string[], current?: string): string[] {
  const avail = new Set(available);
  const seen = new Set<string>();
  const out: string[] = [];
  for (const id of starred) {
    if (!id || seen.has(id)) continue;
    if (avail.has(id) || id === current) {
      seen.add(id);
      out.push(id);
    }
  }
  return out;
}

export function snapshotLlmAccount(
  accounts: LlmAccount[],
  base: string,
  key: string,
  starred: string[],
  model: string,
): LlmAccount[] {
  const b = base.trim();
  if (!b && !key) return accounts;
  return accounts.map((a) =>
    a.base.trim() === b && a.key === key ? { ...a, starred: [...starred], model } : a,
  );
}

export function applyLlmPick(
  s: {
    llmModels: string[];
    llmStarred: string[];
    llmAccounts?: LlmAccount[];
    llmBase: string;
    llmKey: string;
  },
  id: string,
): {
  llmModel: string;
  llmStarred: string[];
  chatSource: ChatSource;
  llmAccounts: LlmAccount[];
} {
  const keep = s.llmModels.includes(id) ? undefined : id;
  const llmStarred = pruneStarred(s.llmStarred, s.llmModels, keep);
  return {
    llmModel: id,
    llmStarred,
    chatSource: "api",
    llmAccounts: snapshotLlmAccount(s.llmAccounts ?? [], s.llmBase, s.llmKey, llmStarred, id),
  };
}
