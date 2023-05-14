import React, { useState } from "react";
import { useTransition, config, animated } from "react-spring";
// import ReactDOM from "react-dom";
import MenuItem from "../../MenuItems/MenuItem";
import MenuIcon from "../../svg/MenuIcon";
import "./styles.css";

const MenuItemHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fullscreenMenu = useTransition(isOpen, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      position: "absolute",
      maxHeight: "100vh",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    leave: { opacity: 0 },
    config: config.gentle,
  });
 

  const openButton = useTransition(isOpen, null, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      position: "absolute",
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff,
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "2rem",
        overflow: isOpen ? "hidden" : "auto",
        maxHeight: "100vh",
      }}
    >
      <div className="relative z-20">
        {openButton.map(({ item, key, props }) =>
          !item ? (
            <animated.div key={key} style={props}>
              <button onClick={toggleMenu}>
                <MenuIcon />
              </button>
            </animated.div>
          ) : (
            <animated.div key={key} style={props}>
              <button onClick={toggleMenu}>
                <MenuIcon />
              </button>
            </animated.div>
          )
        )}
      </div>

      <div>
        {fullscreenMenu.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <div className="flex h-full flex-col justify-center items-center	overflow-hidden	">
                  <MenuItem />
                </div>
              </animated.div>
            )
        )}
      </div>
    </div>
    
  );
  
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<MenuItemHeader />, rootElement);

export default MenuItemHeader;
