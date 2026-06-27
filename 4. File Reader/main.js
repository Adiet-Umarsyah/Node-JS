import fs from "fs/promises";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input,
  output,
});

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function getFileName() {
  const title = (await rl.question("Please enter the file name: ")).trim();

  if (!title) {
    console.log("Filename cannot be empty.");
    return null;
  }

  return title;
}

async function writeFile() {
  const title = await getFileName();

  if (!title) return;

  const text = await rl.question("Please enter the file content: ");

  const filePath = path.join(__dirname, `${title}.txt`);

  try {
    if (await fileExists(filePath)) {
      await fs.appendFile(filePath, `\n${text}`, "utf8");
      console.log("\nContent added successfully.");
    } else {
      await fs.writeFile(filePath, text, "utf8");
      console.log("\nFile created successfully.");
    }
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}

async function searchFiles() {
  try {
    const entries = await fs.readdir(__dirname, {
      withFileTypes: true,
    });

    const files = entries
      .filter(
        (entry) =>
          entry.isFile() && path.extname(entry.name).toLowerCase() === ".txt",
      )
      .map((entry) => entry.name);

    console.log("\n========== FILES ==========");

    if (files.length === 0) {
      console.log("No text files found.");
    } else {
      files.forEach((file, index) => {
        console.log(`${index + 1}. ${file}`);
      });
    }

    console.log("===========================\n");
  } catch (error) {
    console.error("Unable to read directory:", error.message);
  }
}

async function readFile() {
  const title = await getFileName();

  if (!title) return;

  const filePath = path.join(__dirname, `${title}.txt`);

  try {
    const data = await fs.readFile(filePath, "utf8");

    console.log("\n========== FILE CONTENT ==========");
    console.log(data);
    console.log("==================================\n");
  } catch {
    console.log(`\nFile "${title}.txt" does not exist.\n`);
  }
}

async function deleteFile() {
  const title = await getFileName();

  if (!title) return;

  const filePath = path.join(__dirname, `${title}.txt`);

  try {
    await fs.unlink(filePath);
    console.log("\nFile deleted successfully.\n");
  } catch {
    console.log(`\nFile "${title}.txt" does not exist.\n`);
  }
}

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
        await writeFile();
        break;

      case "2":
        await readFile();
        break;

      case "3":
        await searchFiles();
        break;

      case "4":
        await deleteFile();
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
