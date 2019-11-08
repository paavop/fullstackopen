import React from 'react'

const Course = ({ course }) => {
    return (
      <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };
  
  const Header = ({ text }) => {
    return <h1>{text}</h1>;
  };
  
  const Content = ({ parts }) => {
    const rows = () =>
      parts.map(part => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ));
    return <div>{rows()}</div>;
  };
  
  const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0);
    return <b>Number of exercises {total}</b>;
  };
  
  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };

  export default Course