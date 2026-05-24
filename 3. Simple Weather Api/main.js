import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function getWeather(country) {
  let data;
  const res = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=87133ed522ea44fb97d63146261205&q=${country}`,
  );

  if (res.ok) {
    data = await res.json();
    // console.log(data);
  } else {
    //console.log("Data Error");
    data = "Data Error";
  }
  return data;
}

let country = await rl.question("Please Input The Country Name: ");
country = country.charAt(0).toUpperCase() + country.slice(1);
let weather = await getWeather(country);
console.log(
  `${country} Is Currently Experiencing A ${weather.current.condition.text} With Wind Speed Up To ${weather.current.wind_mph} Mph and ${weather.current.chance_of_rain}% Chance Of Rain.`,
);
rl.close();
