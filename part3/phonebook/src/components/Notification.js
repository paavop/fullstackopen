import React from "react";

const Notification = ({ message }) => {
  if (!("text" in message)) {
    return null;
  }
  const color = "type" in message ? "red" : "green";
  const style = {
      color: color,
      fontSize: 16
  }
  return <div className="error" style={style}>{message.text}</div>;
};

export default Notification;
