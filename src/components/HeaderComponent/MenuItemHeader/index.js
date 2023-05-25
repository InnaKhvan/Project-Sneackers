import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import MenuItem from "../../MenuItems/MenuItem";
import MenuIcon from "../../svg/MenuIcon";
import FullscreenMenu from "../FullscreenMenu/Index";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
const MenuItemHeader = () => {
  const [open, set] = useState(false);
  const transition = useTransition(open ? MenuItem : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useEffect(
    () => {document.body.style.overflow = open ? "hidden" : "unset"},
    [open]
  );
  return (
    <>
      {" "}
      <animated.div
        className="flex tablet:hidden desktop:hidden "
        onClick={() => set(true)}
      >
        <MenuIcon />
      </animated.div>
      {open &&
        createPortal(
          <div className="container flex fixed flex-col z-10 bg-secondary1 py-5 overflow-scroll top-0 w-full h-full tablet:hidden desktop:hidden">
            {transition(() => (
              <animated.div className={styles.modal}>
                <FullscreenMenu onClose={() => set(false)} />
              </animated.div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default MenuItemHeader;
