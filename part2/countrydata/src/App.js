import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Filter from "./components/Filter";
import Countries from "./components/Countries";


function App() {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} setWeather={setWeather} />
      <Countries countries={countries} filter={filter} setFilter={setFilter} weather={weather} setWeather={setWeather} />
    </div>
  );
}

export default App;
