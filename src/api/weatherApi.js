const API_KEY = "86a56954daa8bca49aecc15b7273c619";

export async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("City not found");
  return response.json();
}
