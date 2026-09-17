import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { GROK_MODELS } from "./constants.ts";
import {
  FOLLOW_IMAGE_AI,
  IMAGE_HDR_API,
  IMAGE_HDR_GROK,
  applyImageAiPick,
  imagePickerModels,
  llmIdentity,
  resolveImageWrite,
} from "./image-ai.ts";

const grokIds = GROK_MODELS.map((m) => m.id);

describe("imagePickerModels", () => {
  it("on API: chat list, then a Grok header, then all Grok models in top-bar order", () => {
    const rows = imagePickerModels({
      chatSource: "api",
      llmConnected: true,
      llmStarred: ["agy-high", "ds-flash"],
      llmModels: ["agy-high", "ds-flash", "other"],
      llmModel: "agy-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, "agy-high", "ds-flash", IMAGE_HDR_GROK, ...grokIds],
    );
    assert.equal(rows.find((r) => r.id === IMAGE_HDR_GROK)?.header, "Grok");
  });

  it("on Grok with API connected: Grok list, then an API header, then the chat list", () => {
    const rows = imagePickerModels({
      chatSource: "grok",
      llmConnected: true,
      llmStarred: ["ds-flash"],
      llmModels: ["ds-flash", "other"],
      llmModel: "agy-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, ...grokIds, IMAGE_HDR_API, "agy-high", "ds-flash"],
    );
    assert.equal(rows.find((r) => r.id === IMAGE_HDR_API)?.header, "API");
  });

  it("on Grok with API disconnected: no API block", () => {
    const rows = imagePickerModels({
      chatSource: "grok",
      llmConnected: false,
      llmStarred: ["ds-flash"],
      llmModels: ["ds-flash"],
      llmModel: "ds-flash",
      imageModelId: "grok-4.6-high",
    });
    assert.deepEqual(
      rows.map((r) => r.id),
      [FOLLOW_IMAGE_AI, ...grokIds],
    );
  });

  it("keeps a selected delisted API model in red, at the end of the API block", () => {
    const rows = imagePickerModels({
      chatSource: "api",
      llmConnected: true,
      llmStarred: ["agy-high"],
      llmModels: ["agy-high"],
      llmModel: "agy-high",
      imageModelId: "gone-model",
    });
    const grokAt = rows.findIndex((r) => r.id === IMAGE_HDR_GROK);
    const goneAt = rows.findIndex((r) => r.id === "gone-model");
    assert.ok(goneAt > 0 && goneAt < grokAt);
    assert.equal(rows[goneAt]?.danger, true);
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
