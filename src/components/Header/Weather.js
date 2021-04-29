import React, { useState, useEffect } from "react";

import axios from "axios";

const params = {
  access_key: process.env.REACT_APP_WEATHER_API_KEY,
  query: "Helsinki",
};
const URL = `http://api.openweathermap.org/data/2.5/weather?q=${params.query}&units=metric&appid=${params.access_key}`;

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getWeather = async () => {
      const res = await axios.get(URL);
      const data = res.data;
      setWeather(data);
      setIsLoading(false);
    };
    getWeather();
  }, []);

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      <p>
        {weather.name}, {Math.round(weather.main.temp)}°C. Feels like{" "}
        {Math.round(weather.main.feels_like)}°C
      </p>
    </div>
  );
};

export default Weather;
