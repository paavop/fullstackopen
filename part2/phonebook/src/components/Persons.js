import React from "react";
import Person from "./Person";
import personService from "../services/persons";

const Persons = ({ persons, filter, setPersons }) => {
  const rows = () =>
    persons
      .filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(p => (
        <Person
          key={p.name}
          person={p}
          deletePerson={() => deletePerson(p.id)}
        />
      ));
  const deletePerson = id => {
    const name = persons.find(p => p.id === id).name;
    if (window.confirm(`Delete ${name}?`)) {
      personService.remove(id).then(() => {
        setPersons(persons.filter(p => p.id !== id));
      });
    }
  };
  return <div>{rows()}</div>;
};

export default Persons;
