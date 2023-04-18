import img from "../../mockData/errorpage.png";
import styles from "./errorPage.module.css";
const ErrorPage = () => {
  return (
    <div className={"flex flex-col justify-center " + styles.block}>
      <img className={"object-cover " + styles.image}>{img}</img>
      <div className="text-primary2 text-h1">
        УПС! ВАШИ КРОССОВКИ ПОРВАЛИСЬ :(
      </div>
      <div className={"flex font-normal " + styles.blocktext}>
        Эта страница не найдена. Попробуйте перейти на главную и купить себе
        новые кроссовки!
      </div>
    </div>
  );
};

export default ErrorPage;
