import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header header="Give feedback" />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = bad + neutral + good;
  const average = (good - bad) / total;
  const posp = ((good / total) * 100).toFixed(2) + " %";

  return (
    <div>
      <Header header="Statistics" />
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>All: {total}</div>
      <div>Average: {average}</div>
      <div>Positive: {posp}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
