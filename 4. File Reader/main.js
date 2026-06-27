import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { WriteFile, ReadFile, SearchFiles, DeleteFile } from "./file.js";

const rl = readline.createInterface({
  input,
  output,
});

async function start() {
  let run = true;

  while (run) {
    console.log("========== FILE MANAGER ==========");
    console.log("1. Write File");
    console.log("2. Read File");
    console.log("3. List Files");
    console.log("4. Delete File");
    console.log("5. Exit");
    console.log("==================================");

    const option = (await rl.question("Select an option: ")).trim();

    console.log();

    switch (option) {
      case "1":
        await WriteFile();
        break;

      case "2":
        await ReadFile();
        break;

      case "3":
        await SearchFiles();
        break;

      case "4":
        await DeleteFile();
        break;

      case "5":
        run = false;
        console.log("Goodbye!");
        break;

      default:
        console.log("Invalid option.\n");
    }
  }

  rl.close();
}

start();
