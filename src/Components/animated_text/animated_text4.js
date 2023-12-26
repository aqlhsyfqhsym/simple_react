import React from "react";
import "./animated_text.css";

const BubbleText = ({ text }) => {
  // Convert the text prop to a string representation
  const textToDisplay = typeof text === "string" ? text : String(text);

  return (
    <h2 className="headingTitle">
      {textToDisplay.split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;

