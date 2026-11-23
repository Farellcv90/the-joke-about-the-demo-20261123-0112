import { mkdirSync, writeFileSync } from "node:fs";

const joke = "My coding agent fixed the crash by demoing a screenshot of it working.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
