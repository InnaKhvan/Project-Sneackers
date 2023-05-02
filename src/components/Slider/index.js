import img from "../../mockData/slider.json";
import { Link } from "react-router-dom";
import Ellipse from "../svg/Ellipse";
import Carousel from "nuka-carousel";
import styles from "./slider.module.css";
export const Slider = () => {
  const pagingDots = ({
    goToSlide,
    currentSlide,
    slideIndex,
    pagingDotsIndices,
  }) =>
    pagingDotsIndices.map((index) => (
      <button
        onClick={slideIndex}
        style={{
          display: "flex",
          marginRight: 120,
          padding: 11,
        }}
        className={styles.dot}
      >
        {/* <Ellipse /> */}
      </button>
    ));
  return (
    <div className="flex justify-center relative">
      <div className={"flex " + styles.carousel}>
        <Carousel
          animation="zoom"
          renderCenterRightControls={pagingDots}
          renderCenterLeftControls
          renderBottomCenterControls
        >
          {img.map((slide) => (
            <img src={slide.img} key={slide} alt="" />
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
