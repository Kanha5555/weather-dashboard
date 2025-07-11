import { getOutfitRecommendation } from "../utils/getOutfitRecommendation";

export default function WeatherCard({ data }) {
  return (
    <div className="p-4 border rounded shadow-md mt-4">
      <h2 className="text-xl font-bold">{data.city}</h2>
      <p>Temperature: {data.temp}°C</p>
      <p>Condition: {data.condition}</p>
      <p>Humidity: {data.humidity}%</p>
      <p>Wind Speed: {data.wind} m/s</p>
      <p className="mt-2 font-semibold">
        {getOutfitRecommendation(data.temp, data.condition)}
      </p>
    </div>
  );
}
