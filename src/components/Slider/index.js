import img from "../../mockData/background.png";
import { Link } from "react-router-dom";

import Carousel from "nuka-carousel";
import styles from "./slider.module.css";
// import Ellipse from "../svg/Ellipse";
export const Slider = () => {
  const slides = [img, img, img, img];
  const params = {};
  return (
    <div className="flex justify-center relative">
      <div className={"flex " + styles.carousel}>
        <Carousel
          {...params}
          renderCenterLeftControls
          // renderBottomCenterControls={{Paging dots}}
          // renderCenterRightControls={({ goToSlide, slideIndex }) => (
          //   <button onClick={goToSlide(slideIndex)}><Ellipse /></button>
          // )}
        >
          {slides.map((slide) => (
            <img src={slide} key={slide} alt="" />
          ))}
        </Carousel>
      </div>
      <div className={"flex absolute " + styles.catalog}>
        {" "}
        <Link to="Catalog">
          <button
            className={
              "flex bg-primary1 text-p1 justify-center text-secondary1 p-5 rounded-xl " +
              styles.button
            }
          >
            Смотреть каталог{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Slider;
