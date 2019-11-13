import React from "react";

const Person = ({ person, deletePerson }) => {
  return (
    <div>
      {person.name} {person.number}{" "}
      <Button onClick={deletePerson} text="delete" />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default Person;
