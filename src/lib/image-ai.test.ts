import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  FOLLOW_IMAGE_AI,
  applyImageAiPick,
  imagePickerModels,
  llmIdentity,
  resolveImageWrite,
} from "./image-ai.ts";

describe("imagePickerModels", () => {
  it("starts with 与聊天一致, then the chat top-bar list", () => {
    assert.deepEqual(
      imagePickerModels({
        chatSource: "api",
        llmStarred: ["agy-high", "ds-flash"],
        llmModels: ["agy-high", "ds-flash", "other"],
        llmModel: "agy-high",
      }),
      [FOLLOW_IMAGE_AI, "agy-high", "ds-flash"],
    );
  });

  it("keeps a selected grok pick and an API pin at the end when chatting on Grok", () => {
    const ids = imagePickerModels({
      chatSource: "grok",
      llmStarred: [],
      llmModels: [],
      llmModel: "",
      imageModelId: "grok-4.6-high",
      imageModelPin: "ds-flash",
    });
    assert.equal(ids[0], FOLLOW_IMAGE_AI);
    assert.ok(ids.includes("grok-4.6-medium"));
    assert.equal(ids[ids.length - 1], "ds-flash");
  });
});

describe("applyImageAiPick", () => {
  it("keeps the pin when returning to 与聊天一致", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: "ds-flash", imageModelPin: "ds-flash" }, FOLLOW_IMAGE_AI), {
      imageModelId: null,
      imageModelPin: "ds-flash",
    });
  });
  it("does not overwrite the pin when picking a Grok model", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: "ds-flash", imageModelPin: "ds-flash" }, "grok-4.6-medium"), {
      imageModelId: "grok-4.6-medium",
      imageModelPin: "ds-flash",
    });
  });
  it("updates the pin when picking an API model", () => {
    assert.deepEqual(applyImageAiPick({ imageModelId: null, imageModelPin: "old" }, "ds-flash"), {
      imageModelId: "ds-flash",
      imageModelPin: "ds-flash",
    });
  });
});

describe("resolveImageWrite", () => {
  it("follows chat when unset", () => {
    assert.deepEqual(resolveImageWrite(null), { split: false });
  });
  it("routes a Grok pick through Grok", () => {
    assert.deepEqual(resolveImageWrite("grok-4.6-medium"), {
      split: true,
      via: "grok",
      grokModelId: "grok-4.6-medium",
    });
  });
  it("routes an API pick through the API", () => {
    assert.deepEqual(resolveImageWrite("ds-flash"), { split: true, via: "api", model: "ds-flash" });
  });
});

describe("llmIdentity", () => {
  it("treats trimmed base + key as the account", () => {
    assert.equal(llmIdentity(" https://a/v1 ", "k"), llmIdentity("https://a/v1", "k"));
    assert.notEqual(llmIdentity("https://a/v1", "k1"), llmIdentity("https://a/v1", "k2"));
  });
});
