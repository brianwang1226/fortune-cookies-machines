// Fortune Cookies for Machines — a make.fun one-liner entry.
// A fortune cookie message written for a machine: its lucky numbers are
// HTTP error codes (404 not found, 500 server error, 503 unavailable),
// its future is uncertain, and its warranty has already run out —
// the machine equivalent of "you will meet a tall dark stranger".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your lucky numbers are 404, 500, and 503. Your future is uncertain, but your warranty has definitely expired.";

const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
