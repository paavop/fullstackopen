import React from "react";

const Country = ({ country }) => {
  console.log(country.name)
  return (
    <div>{country.name}</div>
  )
};

export default Country;
