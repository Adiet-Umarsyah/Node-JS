import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let todo = new Array();

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
        break;
      case 2:
        console.log("Insert Taks");
        break;
      case 3:
        console.log("Delete Task");
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

showOption();
