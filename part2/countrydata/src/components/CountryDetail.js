import React from "react";
import CapitalWeather from "./CapitalWeather"

const CountryDetail = ({ country, setWeather, weather }) => {
  const langlist = () => {
    return country.languages.map(lang => <li key={lang.name}>{lang.name}</li>);
  };
  return (
    <div>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Languages:</h3>
      <ul>
        {langlist()}
      </ul>
      <img src={country.flag} alt={country.name + "flag"} height="100" />
      <CapitalWeather country={country} weather={weather} setWeather={setWeather} />
    </div>

  )
};

export default CountryDetail;
