import img from "../../../mockData/background.png";
import Carousel from "nuka-carousel";
import Catalog from "../../Catalog";
import styles from "./slider.module.css";

export const Slider = () => {
  const slides = [img, img, img, img];
  const params = {};
  return (
    <div className="flex justify-center relative">
      <div className={"flex " + styles.carousel}>
        <Carousel
          {...params}
          renderCenterLeftControls
          renderBottomCenterControls
        >
          {slides.map((slide) => (
            <img src={slide} key={slide} alt="" />
          ))}
        </Carousel>
      </div>
      <div className={"flex absolute " + styles.catalog}>
        {" "}
        <Catalog />{" "}
      </div>
    </div>
  );
};
export default Slider;
