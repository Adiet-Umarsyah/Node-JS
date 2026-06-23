import fs from "fs/promises";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "url";
import path from "path";

// Recreate __filename and __dirname safely
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

async function WriteFile() {
  const rl = readline.createInterface({ input, output });

  const title = await rl.question("Please enter the file name: ");
  const text = await rl.question("Please enter the file content: ");
  try {
    await fs.writeFile(`${title}.txt`, `${text}`, "utf8");
    console.log("file created successfully");
  } catch (error) {
    console.log(error);
  }
  rl.close();
}

async function selectFile() {
  const rl = readline.createInterface({ input, output });

  const title = await rl.question("Please enter the file name: ");

  await fs.readFile(`${title}.txt`, "utf8").then((data) => {
    console.log(data);
  });
  rl.close();
}
