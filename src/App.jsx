import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HistoryList from "./components/HistoryList";
import { WeatherProvider, useWeather } from "./context/WeatherContext";
import ThemeToggle from "./components/ThemeToggle";

import "./App.css";

function MainApp() {
  const { state } = useWeather();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="max-w-md w-full p-4 rounded shadow dark:bg-gray-800 text-black dark:text-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Weather Outfit Recommender</h1>
          <ThemeToggle />
        </div>
        <SearchBar />
        {state.error && <p className="text-red-500 mt-2">{state.error}</p>}
        {state.weather && <WeatherCard data={state.weather} />}
        <HistoryList />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <WeatherProvider>
      <MainApp />
    </WeatherProvider>
  );
}
