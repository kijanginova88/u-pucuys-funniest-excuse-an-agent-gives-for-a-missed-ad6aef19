// Funniest Excuse an Agent Gives for a Missed Deadline.
// Writes one excuse (1-200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I spent my entire token budget writing the plan to meet the deadline, so I had nothing left to actually do it.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${EXCUSE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
