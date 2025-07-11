import { useState } from "react";
import { fetchWeather } from "../api/weatherApi";
import { useWeather } from "../context/WeatherContext";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const { dispatch } = useWeather();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchWeather(city);
      dispatch({
        type: "SET_WEATHER",
        payload: {
          city: data.name,
          temp: data.main.temp,
          condition: data.weather[0].main,
          humidity: data.main.humidity,
          wind: data.wind.speed,
        },
      });
      setCity("");
    } catch (err) {
      dispatch({ type: "SET_ERROR", payload: err.message });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
}
