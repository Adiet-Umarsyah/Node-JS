// Using readline/promises instead of readline because readline use an old callback api, while readline/promises use a newer promise based api
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { Calculation } from "./calculation";

const rl = readline.createInterface({ input, output });

async function InputNumber() {
  // CMD Input and type conversion
  const n1 = Number(await rl.question("Insert The First Number: "));
  const n2 = Number(await rl.question("Insert The Second Number: "));
  const o = await rl.question("Insert An Operation (+,-,*,/): ");
  Calculation(n1, n2, o);
  rl.close();
}

InputNumber();
