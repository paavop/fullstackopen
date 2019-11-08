import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header header="Give feedback" />
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Statistics = ({ good, neutral, bad }) => {
  const total = bad + neutral + good;
  const average = (good - bad) / total;
  const posp = ((good / total) * 100).toFixed(2) + " %";

  if (total > 0) {
    return (
      <div>
        <Header header="Statistics" />
        <table>
          <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={total} />
            <Statistic text="Average" value={average} />
            <Statistic text="Positive" value={posp} />
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <div>
        <Header header="Statistics" />
        <div>No feedback given</div>
      </div>
    );
  }
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
