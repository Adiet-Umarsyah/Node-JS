// import { dialog } from "electron";
import fs from "fs/promises";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const title = await rl.question("Please enter the file name: ");
const text = await rl.question("Please enter the file content: ");

await fs.writeFile(`${title}.txt`, `${text}`);
console.log("file created successfully");

rl.close();
