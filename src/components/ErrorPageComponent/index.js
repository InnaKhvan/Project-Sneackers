import img from "../../mockData/errorpage.png";
import styles from "./errorPage.module.css";
const ErrorPageComponent = () => {
  return (
    <div className={"container flex flex-col items-center	" + styles.block}>
     <img src={img} className={"flex object-contain tablet:mb-10 " + styles.image} alt="" />
     
      <div className={"flex text-primary2 text-h1 " + styles.text1}>
        УПС! ВАШИ КРОССОВКИ ПОРВАЛИСЬ :(
      </div>
      <div className={"flex text-center font-normal text-h2t mt-2.5	tablet:mt-5 " + styles.text2}>
        Эта страница не найдена. Попробуйте перейти на главную и купить себе новые кроссовки!
      </div>
    </div>
  );
};

export default ErrorPageComponent;
