import React, { useState } from "react";
import { createPortal } from "react-dom";
import { animated } from "@react-spring/web";
import SearchIconTablet from "../../svg/SearchIconTablet";
import SearchForm from "./../Search";

const ModalSeach = () => {
  const [open, set] = useState(false);

  return (
    <>
      {" "}
      <animated.div onClick={() => set(true)}>
        <SearchIconTablet />
      </animated.div>
      {open &&
        createPortal(
          <animated.div
            onClick={() => set(false)}
            className="flex justify-center top-20 fixed z-20 inset-0 "
          >
            <SearchForm />
          </animated.div>,
          document.body
        )}
    </>
  );
};
export default ModalSeach;
