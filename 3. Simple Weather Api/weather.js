import "dotenv/config";

async function getWeather(country) {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${country}`,
    );

    if (!res.ok) {
      return {
        weather: null,
        error: "Data Error",
      };
    }

    const data = await res.json();

    return {
      weather: data,
      error: null,
    };
  } catch (err) {
    return {
      weather: null,
      error: err.message,
    };
  }
}

export async function ShowWeather(country) {
  let countri = country.charAt(0).toUpperCase() + country.slice(1);

  let { weather, error } = await getWeather(countri);

  if (error) {
    console.log("Country Not Found!");
    return;
  }

  console.log(
    `${countri} is currently experiencing ${weather.current.condition.text} with wind speed up to ${weather.current.wind_mph} mph.`,
  );
}
