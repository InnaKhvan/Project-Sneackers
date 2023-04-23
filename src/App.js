import Header from "./components/HeaderComponent";
import "./index.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />

    </>
  );
}

export default App;
