import img from "../../mockData/slider.json";
import { Link } from "react-router-dom";
import Carousel from "nuka-carousel";
import styles from "./slider.module.css";
export const Slider = () => {
  const pagingDots = ({ goToSlide, slideIndex, pagingDotsIndices }) =>
    pagingDotsIndices.map((index) => (
      <button
        onClick={() => goToSlide(index)}
        className={index == slideIndex ? styles.dotActive : styles.dot}
      />
    ));
  return (
    <div className="flex justify-center relative">
      <Carousel
        renderTopCenterControls={({ currentSlide }) => (
          <div>Slide: {currentSlide}</div>
        )}
        animation="zoom"
        // currentSlide={0}
        renderCenterRightControls={pagingDots}
        renderCenterLeftControls
        renderBottomCenterControls
      >
        {img.map((slide) => (
          <img
            className="w-full h-[605px] object-cover"
            src={slide.img}
            key={slide}
            alt=""
          />
        ))}
      </Carousel>
      <div className="flex absolute bottom-[50px]">
        {" "}
        <Link to="Catalog">
          <button className="flex bg-primary1 text-p1 justify-center text-secondary1 p-5 rounded-xl w-[204px] h-[60px]">
            Смотреть каталог{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;