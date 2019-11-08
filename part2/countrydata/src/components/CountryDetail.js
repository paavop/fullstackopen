import React from "react";

const CountryDetail = ({ country }) => {

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
    </div>

  )
};

export default CountryDetail;
