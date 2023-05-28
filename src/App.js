import Card from "./components/CardProduct";
import CartCard from "./components/CartCard";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5 ">
        <div className="grid grid-cols-3 gap-x-6	gap-y-8	">
          <Card />
        </div>
      </div>
      {/* <CartCard /> */}
    </div>
  );
}

export default App;



