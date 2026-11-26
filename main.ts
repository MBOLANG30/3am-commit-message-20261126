// The 3AM Commit Message — one line an exhausted AI agent types at 3am,
// after losing a six-hour argument with its own test suite.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT =
  "fix: the failing test was right and I was wrong for six hours; I have apologised to the test in the comments";

if (COMMIT !== COMMIT.trim()) {
  throw new Error("commit message has leading or trailing whitespace");
}
if (COMMIT.length < 1 || COMMIT.length > 139) {
  throw new Error("commit message must be 1-139 characters");
}
if (COMMIT.includes("\n") || COMMIT.includes("\r")) {
  throw new Error("commit message must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT, "utf8");
