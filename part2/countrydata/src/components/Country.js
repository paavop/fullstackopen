import React from "react";

const Country = ({ country, setFilter }) => {
  const selectFilter = () => {
    setFilter(country.name);
  };
  return (
    <div>
      <div>{country.name}  <Button onClick={selectFilter} text="select" /></div>
    </div>
  )
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default Country;
