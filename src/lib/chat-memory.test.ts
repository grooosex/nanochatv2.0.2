import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  applySnaps,
  foldCoveredEnd,
  foldIntervalMessages,
  isPlausibleMemory,
  planFold,
  rewindSnaps,
} from "./chat-memory.ts";

describe("foldIntervalMessages", () => {
  it("is window minus 6 turns, floored at 4", () => {
    assert.equal(foldIntervalMessages(16), 20);
    assert.equal(foldIntervalMessages(20), 28);
    assert.equal(foldIntervalMessages(8), 8);
    assert.equal(foldIntervalMessages(4), 8);
  });
});

describe("planFold", () => {
  const W = 32;
  const I = 20;
  it("does nothing before the window fills", () => {
    assert.equal(planFold(30, 0, 0, W, I), null);
  });
  it("first fold at 16 turns compresses 1–10", () => {
    assert.deepEqual(planFold(32, 0, 0, W, I), { start: 0, end: 20 });
  });
  it("waits a full interval after the first fold", () => {
    assert.equal(planFold(51, 20, 32, W, I), null);
    assert.deepEqual(planFold(52, 20, 32, W, I), { start: 20, end: 40 });
  });
  it("third fold at turn 36", () => {
    assert.deepEqual(planFold(72, 40, 52, W, I), { start: 40, end: 60 });
  });
  it("manual summarize does not immediately refold", () => {
    assert.equal(planFold(50, 18, 50, W, I), null);
    assert.deepEqual(planFold(70, 18, 50, W, I), { start: 18, end: 38 });
  });
  it("retries the same chunk if the last fold never landed", () => {
    assert.deepEqual(planFold(34, 0, 0, W, I), { start: 0, end: 20 });
    assert.deepEqual(planFold(52, 0, 0, W, I), { start: 0, end: 20 });
  });
});

describe("foldCoveredEnd", () => {
  const W = 32;
  const I = 20;
  it("matches the 16 / 26 / 36 schedule", () => {
    assert.equal(foldCoveredEnd(30, W, I), 0);
    assert.equal(foldCoveredEnd(32, W, I), 20);
    assert.equal(foldCoveredEnd(51, W, I), 20);
    assert.equal(foldCoveredEnd(52, W, I), 40);
    assert.equal(foldCoveredEnd(72, W, I), 60);
  });
});

describe("rewindSnaps", () => {
  const snaps = [
    { covered: 20, text: "1-10", foldAt: 32 },
    { covered: 40, text: "1-20", foldAt: 52 },
    { covered: 60, text: "1-30", foldAt: 72 },
  ];
  it("drops sheets that include the regenerated turn", () => {
    const kept = rewindSnaps(snaps, 53);
    assert.deepEqual(applySnaps(kept).memory, "1-20");
    assert.equal(applySnaps(kept).memoryUntil, 40);
  });
  it("keeps a sheet that stops exactly at the cut", () => {
    const kept = rewindSnaps(snaps, 40);
    assert.equal(applySnaps(kept).memoryUntil, 40);
    assert.equal(applySnaps(kept).memory, "1-20");
  });
  it("clears when cutting into the first sheet", () => {
    const kept = rewindSnaps(snaps, 9);
    assert.equal(applySnaps(kept).memory, "");
    assert.equal(applySnaps(kept).memoryUntil, 0);
  });
});

describe("isPlausibleMemory", () => {
  it("rejects empty or one-word replies", () => {
    assert.equal(isPlausibleMemory(""), false);
    assert.equal(isPlausibleMemory("好的"), false);
    assert.equal(isPlausibleMemory("他们在雨里进门，外套还湿着，项链没摘。客厅灯没开。后来在沙发上做过。"), true);
  });
});
