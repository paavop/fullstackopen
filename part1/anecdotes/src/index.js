import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = props => {
  const anecdoteCount = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdoteCount).fill(0));

  const addVote = () => {
    const copy = { ...votes };
    copy[selected] += 1;
    setVotes(copy);
  };

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <Votes votes={votes} selected={selected}></Votes>
      <Button onClick={addVote} text="vote" />
      <Button
        onClick={() => setSelected(Math.floor(Math.random() * anecdoteCount))}
        text="next anecdote"
      />
    </div>
  );
};

const Votes = ({ votes, selected }) => {
  return <div>Votes: {votes[selected]}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
