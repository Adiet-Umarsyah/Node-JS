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

  const existingFiles = await searchFiles(title);
  console.log(existingFiles);
  if (existingFiles && existingFiles.length > 0) {
    console.log(`File(s) with the name "${title}" already exist:`);
    try {
      await fs.appendFile(`${title}.txt`, `\n${text}`, "utf8");
      console.log("newline added to the existing file successfully");
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await fs.writeFile(`${title}.txt`, `${text}`, "utf8");
      console.log("file created successfully");
    } catch (error) {
      console.log(error);
    }
  }
  rl.close();
}

async function searchFiles(searchString) {
  try {
    // Read all file and folder names in the directory
    const files = await fs.readdir(__dirname);
    console.log(files);
    // Filter the array to find matching filenames
    const matchedFiles = files.filter((file) => {
      // Check if it is a file (not a folder) and contains the search text
      // const fullPath = path.join(__dirname, file);
      return file.toLowerCase().includes(searchString.toLowerCase());
    });
    console.log(matchedFiles);

    return matchedFiles;
  } catch (error) {
    console.error("Error reading directory:", error);
    return null;
  }
}

async function selectFile() {
  const rl = readline.createInterface({ input, output });

  const title = await rl.question("Please enter the file name: ");
  try {
    await fs.readFile(`${title}.txt`, "utf8").then((data) => {
      console.log(data);
    });
  } catch (error) {
    console.log(`file with the name "${title}" does not exist`);
  }
  rl.close();
}

WriteFile();
