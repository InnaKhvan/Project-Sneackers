import Card from "./components/CardProduct";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mt-5 ">
        <div className="grid grid-cols-3 ">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;



