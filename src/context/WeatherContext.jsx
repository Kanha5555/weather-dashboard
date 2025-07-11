import { createContext, useReducer, useContext } from "react";

const WeatherContext = createContext();

const initialState = {
  weather: null,
  history: [],
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_WEATHER":
      const newHistory = [
        action.payload.city,
        ...state.history.filter((c) => c !== action.payload.city),
      ].slice(0, 5);
      return {
        ...state,
        weather: action.payload,
        history: newHistory,
        error: null,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export function WeatherProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <WeatherContext.Provider value={{ state, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}
