import SettingIcon from "../svg/SettingIcon";
import { createPortal } from "react-dom";
import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Xmark from "../svg/Xmark";
import Filter from "../FilterForm";

const FilterSetting = () => {
  const [open, set] = useState(false);
  const transition = useTransition(open ? Filter : [], {
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <animated.div
        className="flex tablet:hidden desktop:hidden "
        onClick={() => set(true)}
      >
        <div className="flex tablet:hidden my-5">
          <p className="flex font-semibold text-p1 mr-[5px]">Фильтры</p>
          <SettingIcon />
        </div>
      </animated.div>
      {open &&
        createPortal(
          <div className="container flex fixed flex-col z-10 bg-white py-5 top-0 inset-0 overflow-scroll tablet:hidden desktop:hidden">
            {transition(() => (
              <animated.div>
                <button onClick={() => set(false)} className="fixed right-8">
                  {" "}
                  <Xmark />
                </button>
                <Filter />
              </animated.div>
            ))}
          </div>,
          document.body
        )}
    </>
  );
};

export default FilterSetting;
