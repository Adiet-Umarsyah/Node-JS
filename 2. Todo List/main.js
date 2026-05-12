import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { AddTask, DeleteTask, ShowTask } from "./Task.js";

const rl = readline.createInterface({ input, output });

async function showOption() {
  while (true) {
    console.log("Welcome To My Simple Todo App");
    console.log(
      "Action \n1. See All Task. \n2. Insert A New Task. \n3. Delete A Task. \n4. Exit",
    );
    const option = Number(await rl.question("Please Select Your Action:"));
    switch (option) {
      case 1:
        console.log("Show Task");
        await ShowTask();
        await delay(3000);
        break;
      case 2:
        console.log("Insert Task");
        await AddTask();
        await delay(3000);
        break;
      case 3:
        ShowTask();
        const id = await Number(
          await rl.question(
            "Please Select Which Task You Want To Delete Based On Their Number:",
          ),
        );
        DeleteTask(id);
        await delay(3000);
        break;
      case 4:
        console.log("Exit");
        rl.close();
        return;
        break;
      default:
        console.log("Insert A Valid Action");
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

showOption();
