import { useWeather } from "../context/WeatherContext";

export default function HistoryList() {
  const { state } = useWeather();

  if (state.history.length === 0) return null;

  return (
    <div className="mt-4">
      <h3 className="font-semibold mb-2">Search History:</h3>
      <ul className="list-disc pl-5">
        {state.history.map((city, idx) => (
          <li key={idx}>{city}</li>
        ))}
      </ul>
    </div>
  );
}
