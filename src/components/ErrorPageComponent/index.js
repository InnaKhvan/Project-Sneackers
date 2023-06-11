import img from "../../mockData/errorpage.png";
const ErrorPageComponent = () => {
  return (
    <div className="container flex flex-col items-center justify-center my-20	tablet:my-[120px]">
      <img src={img} className="flex object-contain tablet:mb-10" alt="" />

      <div className="flex text-primary2 text-h3 mt-5 tablet:text-h5 mt-10 desktop:text-h1 ">
        УПС! ВАШИ КРОССОВКИ ПОРВАЛИСЬ :(
      </div>
      <div className="flex text-center font-normal text-p2 mt-2.5	tablet:mt-5 tablet:text-h2t">
        Эта страница не найдена. Попробуйте перейти на главную и купить себе
        новые кроссовки!
      </div>
    </div>
  );
};

export default ErrorPageComponent;
