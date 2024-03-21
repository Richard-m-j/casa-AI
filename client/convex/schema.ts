import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    loginTime: v.string(),
  }),
  images: defineTable({
    id: v.id("_storage"),
    author: v.string(),
    format: v.string(),
    prompt: v.string(),
  }),
});