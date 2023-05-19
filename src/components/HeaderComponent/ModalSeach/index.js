import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
  } from '@react-spring/web'
import SearchIconTablet from "../../svg/SearchIconTablet";
import SearchForm from "./../Search";

const ModalSeach = () => {
  const [showModal, setShowModal] = useState(false);
  const springApi = useSpringRef();


  const transApi = useSpringRef();
  const transition = useTransition(showModal ? SearchForm : [], {
    ref: transApi,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  useChain(showModal ? [springApi, transApi] : [transApi, springApi], [
    0,
    showModal ? 0.1 : 0.6,
  ]);
  return (
    <>
      
        <animated.div
          className="relative bg-white"
          onClick={() => setShowModal(showModal => !showModal)}
        >
            <SearchIconTablet />
         
                {transition((style, item) => (
                  <animated.div className="z-10 absolute flex top-20">
                    <SearchForm />
                  </animated.div>
                ))}
          
        </animated.div>
    
    </>
  );
};
export default ModalSeach;
