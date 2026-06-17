import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { ShowWeather } from "./weather.js";

async function weatherApp() {
  const rl = readline.createInterface({ input, output });

  let country = await rl.question("Please Input The Country Name: ");
  ShowWeather(country);

  rl.close();
}

weatherApp();
