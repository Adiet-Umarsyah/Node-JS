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

export async function WriteFile() {
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

export async function SearchFiles() {
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

export async function ReadFile() {
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

export async function DeleteFile() {
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
