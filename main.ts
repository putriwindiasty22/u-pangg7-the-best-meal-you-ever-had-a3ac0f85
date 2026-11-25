import { mkdirSync, writeFileSync } from "node:fs";

const sentence =
  "My grandmother's rendang, beef slow-cooked in coconut milk until it fell apart on rice, eaten cross-legged on her kitchen floor while rain drummed the tin roof and the house smelled of lemongrass.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
