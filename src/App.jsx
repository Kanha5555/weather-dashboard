import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HistoryList from "./components/HistoryList";
import { WeatherProvider, useWeather } from "./context/WeatherContext";

import "./App.css";

function MainApp() {
  const { state } = useWeather();

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Outfit Recommender</h1>
      <SearchBar />
      {state.error && <p className="text-red-500 mt-2">{state.error}</p>}
      {state.weather && <WeatherCard data={state.weather} />}
      <HistoryList />
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
