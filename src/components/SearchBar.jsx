import { useState, useEffect } from "react";
import { fetchWeather } from "../api/weatherApi";
import { useWeather } from "../context/WeatherContext";
import useDebounce from "../hooks/useDebounce";
import { fetchCitySuggestions } from "../api/citySuggestionsApi";

export default function SearchBar() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const debouncedCity = useDebounce(city, 500);
  const { dispatch } = useWeather();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedCity) {
        try {
          const results = await fetchCitySuggestions(debouncedCity);
          setSuggestions(results);
        } catch (err) {
          console.error(err);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedCity]);

  const handleSelect = (cityName) => {
    setCity(cityName);
    setSuggestions([]);
    fetchCityWeather(cityName);
  };

  const fetchCityWeather = async (cityName) => {
    try {
      const data = await fetchWeather(cityName);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCityWeather(city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 rounded"
        />
        {suggestions.length > 0 && (
          <ul className="border rounded shadow max-h-40 overflow-y-auto">
            {suggestions.map((suggestion, idx) => (
              <li
                key={idx}
                onClick={() => handleSelect(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded self-start"
        >
          Search
        </button>
      </form>
    </div>
  );
}
