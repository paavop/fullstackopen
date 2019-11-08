import React from "react";

const Filter = ({ filter, setFilter, setWeather }) => {
  const handleFilterChange = event => {
    setFilter(event.target.value);
    setWeather({});
  };
  return (
    <div>
      Filter: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
