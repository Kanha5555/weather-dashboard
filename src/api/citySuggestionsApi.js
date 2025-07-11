const API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export async function fetchCitySuggestions(query) {
  const url = `${API_URL}?namePrefix=${encodeURIComponent(
    query
  )}&limit=5&sort=-population`;

  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch city suggestions");
  }

  const data = await response.json();
  return data.data.map((city) => city.city);
}
