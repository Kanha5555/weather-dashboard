# Weather Outfit Recommender

This project is a simple **React Weather App** built using **Vite** and **Tailwind CSS**. It features:

- **Weather Data Fetching** using OpenWeatherMap API.
- **City Suggestions** using RapidAPI GeoDB Cities API.
- **Dark Mode Toggle** with persistence via `localStorage`.

---

## 🔥 Live Demo

Check out the live deployed app here:
[Weather Outfit Recommender](http://weather-outfit-recommender.surge.sh/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Obtain API Keys

#### OpenWeatherMap API

- Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up.
- Create an API key from the dashboard.

#### RapidAPI GeoDB Cities API

- Go to [RapidAPI GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/) and subscribe.
- Copy your API key.

### 4. Configure API Keys

Create a `.env` file in the root directory:

```bash
VITE_OPENWEATHERMAP_API_KEY=your_openweather_api_key_here
VITE_RAPIDAPI_KEY=your_rapidapi_key_here
```

### 5. Run the Development Server

```bash
npm run dev
```

App will be available at `http://localhost:5173`

---

## 📦 Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **OpenWeatherMap API**
- **RapidAPI GeoDB Cities API**

---

## 🌙 Features

### Dark Mode Toggle

- Manual theme switch (Light / Dark).
- Persistent using `localStorage`.

### Weather Data Fetching

- Fetches real-time weather based on city.
- Displays temperature, condition, and other details.

### City Suggestions

- Provides city autocomplete suggestions using RapidAPI.
- Enhances user experience for city search.

---

## 💻 Scripts

| Command           | Description          |
| ----------------- | -------------------- |
| `npm run dev`     | Start development    |
| `npm run build`   | Build production app |
| `npm run preview` | Preview production   |

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👌 Contribution

Feel free to fork this repository and contribute with pull requests.

---

## 🔗 Links

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [RapidAPI GeoDB Cities](https://rapidapi.com/wirefreethought/api/geodb-cities/)
