import React from "react";
import Country from "./Country";
import CountryDetail from "./CountryDetail";

const Countries = ({ countries, filter, setFilter }) => {
  const filtered = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );
  const rows = () => {
    return filtered.map(country => <Country key={country.name} country={country} setFilter={setFilter} />);
  };

  if (filtered.length > 10) {
    return <div>Too many countries, specify your filter</div>
  }

  if (filtered.length === 1) {
    return <CountryDetail country={filtered[0]}/>
  }

  return <div>{rows()}</div>;
};

export default Countries;
