import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";
import MenuItem from "../../MenuItems/MenuItem";
import MenuIcon from "../../svg/MenuIcon";
import FullscreenMenu from "../FullscreenMenu/Index";
import { createPortal } from "react-dom";

const MenuItemHeader = () => {
  const [open, set] = useState(0);
  const transition = useTransition(open ? MenuItem : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  return (
    <>
      {" "}
      <animated.div
        className="flex tablet:hidden desktop:hidden"
        onClick={() => set(true)}
      >
        <MenuIcon />
      </animated.div>
      {open &&
        createPortal(
          <div className="container flex fixed flex-col z-10 bg-secondary1 pt-10 overflow-scroll top-0 w-full h-full tablet:hidden desktop:hidden">
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
