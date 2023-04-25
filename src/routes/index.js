import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Catalog from "./Catalog";
import MainPage from "./MainPage";
import Order from "./Order";
import RouteThankYouPage from "./RouteThankYouPage";
const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "Catalog",
          element: <Catalog />,
        },
      ]
    },
    {
      path: "ThankYouPage",
      element: <RouteThankYouPage />,
    },
    {
      path: "Order",
      element: <Order />,
    },
])

export default router;