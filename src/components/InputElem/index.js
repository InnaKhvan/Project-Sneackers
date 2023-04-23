import "./inputElem.css";
import React from "react";
const InputElem = ({ kind, ...other }) => {
  const className = kind === "primary" ? "PrimaryInput" : "SecondaryInput";
  return <input className={className} {...other} />;
};

export default InputElem;
