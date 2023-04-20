import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Catalog from "./Catalog";
import Order from "./Order";
const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Catalog />,
        }
      ]
    },
    {
      path: "Catalog",
      element: <Catalog />,
    },
    {
      path: "Order",
      element: <Order />,
    }
])

export default router;