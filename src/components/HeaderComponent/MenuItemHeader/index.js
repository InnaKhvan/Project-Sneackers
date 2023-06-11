import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import MenuItem from "../../MenuItems/MenuItem";
import MenuIcon from "../../svg/MenuIcon";
import FullscreenMenu from "../FullscreenMenu/Index";
import { createPortal } from "react-dom";
const MenuItemHeader = () => {
  const [open, set] = useState(false);
  const transition = useTransition(open ? MenuItem : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);
  return (
    <>
      {" "}
      <animated.div
        
        onClick={() => set(true)}
      >
        <MenuIcon />
      </animated.div>
      {open &&
        createPortal(
          <div className="flex fixed flex-col z-10 bg-white py-5 top-0 inset-0 tablet:hidden desktop:hidden">
            {transition(() => (
              <animated.div>
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
