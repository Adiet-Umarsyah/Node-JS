import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let todo = new Array();

export async function AddTask() {
  const task = await rl.question("Please Enter A New Task:");
  todo.push(task);
  console.log("Task Added Successfully");
}

export async function ShowTask() {
  console.log("Your Task:");
  if (todo.length > 0) {
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else {
    console.log("You Have No Task");
  }
}

export async function DeleteTask(id) {
  id = id - 1;
  // Because javascript didn't have a function to dalete a specific item from an array, splice was used to replace that item with another data, which in this case is nothing/null to delete that data.
  todo.splice(id, 1);
  console.log("Task Deleted Successfully");
}
