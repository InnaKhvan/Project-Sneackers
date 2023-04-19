import Header from "./components/Header";
import "./index.css";
import Slider from "./components/Slider";
import Brands from "./components/BrandBlock";
import ApplicationForm from "./components/ApplicationForm";
import NewBlock from "./components/New";
import HotSale from "./components/HotSale";
import { Outlet } from "react-router-dom";
import MainMenuItem from "./components/MainMenuItem";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <MainMenuItem className="hidden tablet:block" />
      <Slider />
      <Brands />
      <NewBlock />
      <HotSale />
      <ApplicationForm />
    </>
  );
}

export default App;
