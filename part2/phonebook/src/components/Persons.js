import React from "react";
import Person from "./Person"

const Persons = ({ persons, filter }) => {
  const rows = () =>
    persons
      .filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(p => <Person key={p.name} person={p} />);

    return(
        <div>{rows()}</div> 
    )
};

export default Persons;
