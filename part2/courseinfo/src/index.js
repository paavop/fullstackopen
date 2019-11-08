import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ text }) => {
  return <h1>{text}</h1>;
};

const Content = ({ parts }) => {
  const rows = () => parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    )
  return (
    <div>
      {rows()}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => (sum + part.exercises), 0); 
  return (
    <b>
      Number of exercises {total}
    </b>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
