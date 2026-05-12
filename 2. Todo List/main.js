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
        await showTask();
        break;
      case 2:
        console.log("Insert Task");
        await addTask();
        break;
      case 3:
        const id = await Number(
          await rl.question(
            "Please Select Which Task You Want To Delete Based On Their Number:",
          ),
        );
        showTask();
        deleteTask(id);
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

async function addTask() {
  const task = await rl.question("Please Enter A New Task:");
  todo.push(task);
  console.log("Task Added Successfully");
  await delay(3000);
}

async function showTask() {
  console.log("Your Task:");
  if (todo.length > 0) {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else {
    console.log("You Have No Task");
  }
  await delay(3000);
}

async function deleteTask(id) {
  id = id - 1;
  todo.splice(id, 1);
  console.log("Task Deleted Successfully");
  await delay(3000);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

showOption();
