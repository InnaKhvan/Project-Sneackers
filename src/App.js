import Card from "./components/CardProduct";
import Header from "./components/Header";
import "./index.css";
import product from "./mockData/products.json";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto mt-3.5 ">
        <div className="grid-cols-3 ">
          <Card items={product} />
        </div>
      </div>
    </div>
  );
}

export default App;



