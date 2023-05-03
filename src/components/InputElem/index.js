import React from "react";
const InputElem = ({ className, ...other }) => {
  return (
    <input
      className={
        "border-secondary2 rounded-xl bg-secondary1 h-14 border-2 text-p1 p-5 " +
        className
      }
      {...other}
    />
  );
};

export default InputElem;
