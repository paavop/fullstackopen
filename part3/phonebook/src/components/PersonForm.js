import React from "react";
import personService from "../services/persons";

const PersonForm = ({
  setNewName,
  setNewNumber,
  setPersons,
  newName,
  newNumber,
  persons,
  setNotification
}) => {
  const handleNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const addName = event => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const oldPerson = persons.find(p => p.name === newName);
        const newPerson = { ...oldPerson, number: newNumber };
        personService.update(oldPerson.id, newPerson).then(returnedPerson => {
          setNotification({ text: `Updated number for ${oldPerson.name}`});
          setTimeout(() => {
            setNotification({});
          }, 5000);
          setPersons(persons.map(p => (p.id !== oldPerson.id ? p : newPerson)));
        });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };

      personService.create(personObject).then(newPerson => {
        setNotification({text: `Added number for ${personObject.name}`});
        setTimeout(() => {
          setNotification({});
        }, 5000);
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      }).catch(error => {
        setNotification({
          text: `Error: '${error}'`,
          type: 'error'
        });
        setTimeout(() => {
          setNotification({});
        }, 5000);
      });
    }
  };

  return (
    <form onSubmit={addName}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
