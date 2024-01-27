import fs from "fs/promises";
import path from "path";

import { midiToSequenceProto, quantizeNoteSequence } from "./lib";

async function main() {
  const dir = "./midi";
  const fileName = "0.mid";
  const filePath = path.join(dir, fileName);
  const buffer = await fs.readFile(filePath);
  const ns = midiToSequenceProto(buffer);
  const sequence = quantizeNoteSequence(ns, 4);
  console.log(sequence.totalQuantizedSteps);
}

main().catch((error) => console.log(error));
