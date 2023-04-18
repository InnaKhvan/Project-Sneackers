import Header from "./components/Header";
import "./index.css";
import Slider from "./components/Slider";
import Brands from "./components/BrandBlock";
import ApplicationForm from "./components/ApplicationForm";
import NewBlock from "./components/New";
import HotSale from "./components/HotSale";
function App() {
  return (
    <>
      <Header />
      <Slider />
      <Brands />
      <NewBlock />
      <HotSale />
      <ApplicationForm />
    </>
  );
}

export default App;
