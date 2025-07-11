export function getOutfitRecommendation(temp, condition) {
  if (condition.toLowerCase().includes("rain")) return "Take an umbrella";
  if (temp <= 10) return "Wear a heavy jacket";
  if (temp <= 20) return "Wear a jacket";
  if (condition.toLowerCase().includes("sun")) return "Sunglasses suggested";
  return "Dress comfortably";
}
