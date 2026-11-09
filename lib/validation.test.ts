// Run with: npm test
import assert from "node:assert/strict";
import { test } from "node:test";
import { messageSchema } from "./validation.ts";

const valid = { name: "Ada", email: "ada@example.com", message: "I would like a website for my shop." };

test("accepts a valid message", () => {
  assert.equal(messageSchema.safeParse(valid).success, true);
});

test("rejects a bad email and a short message", () => {
  assert.equal(messageSchema.safeParse({ ...valid, email: "nope" }).success, false);
  assert.equal(messageSchema.safeParse({ ...valid, message: "hi" }).success, false);
});

test("rejects a filled honeypot", () => {
  assert.equal(messageSchema.safeParse({ ...valid, website: "http://spam" }).success, false);
});
