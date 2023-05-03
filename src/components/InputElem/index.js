import "./inputElem.css";
import React from "react";
const InputElem = ({ kind, ...other }) => {
  
  const className = kind === "Primary" ? "PrimaryInput" : "SecondaryInput";
  return <input className={"border-secondary2 rounded-xl bg-secondary1 h-14 w-64 border-2 text-p1 p-5 " + className} {...other}/>;

  // border-secondary2 rounded-xl bg-secondary1 h-14 w-64 border-2 text-p1 p-5
};

export default InputElem;
