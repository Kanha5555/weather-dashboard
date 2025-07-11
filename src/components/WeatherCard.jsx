import { getOutfitRecommendation } from "../utils/getOutfitRecommendation";
import { motion, AnimatePresence } from "framer-motion";

export default function WeatherCard({ data }) {
  return (
    <AnimatePresence mode="wait">
      {data && (
        <motion.div
          key={data.city}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.5 }}
          className="p-4 border rounded shadow-md mt-4 bg-white dark:bg-gray-900 text-black dark:text-white"
        >
          <h2 className="text-xl font-bold">{data.city}</h2>
          <p>Temperature: {data.temp}°C</p>
          <p>Condition: {data.condition}</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Wind Speed: {data.wind} m/s</p>
          <p className="mt-2 font-semibold">
            {getOutfitRecommendation(data.temp, data.condition)}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
