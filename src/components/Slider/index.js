import img from "../../mockData/background.png";
import { Link } from "react-router-dom";
import Ellipse from '../svg/Ellipse'
import Carousel from "nuka-carousel";
import styles from "./slider.module.css";
// import Ellipse from "../svg/Ellipse";
export const Slider = () => {
  const slides = [img, img, img, img];
  const pagingDots = ({ goToSlide, currentSlide, slideIndex, pagingDotsIndices }) =>
  pagingDotsIndices.map((index) => (
    <button goToSlide={index}
      style={{
        display: "flex",
        marginRight: 120,
        padding: 11
      }}
    >
      <Ellipse />
    </button>
  ));
return (
  <div className="flex justify-center relative">
    <div className={"flex " + styles.carousel}>
      <Carousel
        renderCenterRightControls={pagingDots}
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
