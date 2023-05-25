import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
    useTransition,
    // useSpring,
    // useChain,
    // config,
    animated,
    // useSpringRef,
  } from '@react-spring/web'
import SearchIconTablet from "../../svg/SearchIconTablet";
import SearchForm from "./../Search";


const ModalSeach = () => {
  // const [open, set] = useState(false)

  const transition = useTransition(<SearchForm />, {

    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return (
    <>
    <button onClick={(transition)}><SearchIconTablet />
    {transition((style, item) => (
                  <animated.div>
                    <SearchForm />
                  </animated.div>
                ))}
    </button>

    </>
  );
};
export default ModalSeach;
