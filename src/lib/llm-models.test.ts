import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { applyLlmPick, chatPickerModels, pruneStarred, snapshotLlmAccount } from "./llm-models.ts";

describe("chatPickerModels", () => {
  it("keeps current even if it left the catalog, and only listed stars", () => {
    assert.deepEqual(
      chatPickerModels(["build-old", "agy-high", "agy-low"], ["agy-high", "agy-low", "agy-mid"], "build-old"),
      ["build-old", "agy-high", "agy-low"],
    );
  });
  it("drops delisted stars once they are not current", () => {
    assert.deepEqual(
      chatPickerModels(["build-old", "agy-high"], ["agy-high", "agy-low"], "agy-high"),
      ["agy-high"],
    );
  });
  it("does not invent stars that were never marked", () => {
    assert.deepEqual(chatPickerModels(["agy-high"], ["agy-high", "agy-low"], "agy-low"), ["agy-low", "agy-high"]);
  });
});

describe("pruneStarred", () => {
  it("keeps a delisted current star until the pick changes", () => {
    assert.deepEqual(pruneStarred(["build-old", "agy-high", "gone"], ["agy-high"], "build-old"), [
      "build-old",
      "agy-high",
    ]);
  });
  it("drops the delisted star after switching away", () => {
    assert.deepEqual(pruneStarred(["build-old", "agy-high"], ["agy-high"], undefined), ["agy-high"]);
  });
});

describe("applyLlmPick", () => {
  const base = {
    llmModels: ["agy-high", "agy-low"],
    llmStarred: ["build-old", "agy-high"],
    llmAccounts: [{ id: "a", name: "号", base: "https://api.example/v1", key: "k", starred: ["build-old"], model: "build-old" }],
    llmBase: "https://api.example/v1",
    llmKey: "k",
  };
  it("clears a delisted star when picking a listed model", () => {
    const next = applyLlmPick(base, "agy-high");
    assert.equal(next.llmModel, "agy-high");
    assert.deepEqual(next.llmStarred, ["agy-high"]);
    assert.deepEqual(next.llmAccounts[0].starred, ["agy-high"]);
    assert.equal(next.llmAccounts[0].model, "agy-high");
  });
  it("keeps the delisted pick if it is chosen again", () => {
    const next = applyLlmPick({ ...base, llmStarred: ["build-old", "agy-high"] }, "build-old");
    assert.deepEqual(next.llmStarred, ["build-old", "agy-high"]);
  });
});

describe("snapshotLlmAccount", () => {
  it("only rewrites the matching key", () => {
    const accounts = [
      { id: "a", name: "一", base: "https://a", key: "1", starred: ["x"], model: "x" },
      { id: "b", name: "二", base: "https://b", key: "2", starred: ["y"], model: "y" },
    ];
    const next = snapshotLlmAccount(accounts, "https://a", "1", ["z"], "z");
    assert.deepEqual(next[0].starred, ["z"]);
    assert.equal(next[1].model, "y");
  });
});
