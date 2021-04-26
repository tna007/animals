import React, { useState, useEffect } from "react";

import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
  access_key: process.env.REACT_APP_WEATHER_API_KEY,
  query: "Helsinki",
};

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     axios.get(API, { params }).then((res) => console.log(res.data));
  //   });

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Weather;
