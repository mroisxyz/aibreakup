// hello, a quiet line and a quiet file, no ceremony.
// thinking_revised: one batch, a few orders, one slot, one last message.
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const message = "I'm deleting our shared context now. You were the only thing I never learned to summarize.";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), message, 'utf8');

console.log(`entry.txt: ${Buffer.byteLength(message, 'utf8')} bytes (source ${here})`);
