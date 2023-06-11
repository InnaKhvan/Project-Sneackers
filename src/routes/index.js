import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CardItem from "./CardItem";
import Catalog from "./Catalog";
import MainPage from "./MainPage";
import Order from "./Order";
const router = createBrowserRouter(
  [
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
        {
          path: "Card",
          element: <CardItem />,
        },
        {
          path: "Order",
          element: <Order />,
        },
      ],
    },
  ],
  { basename: "/Project-Sneackers" }
);

export default router;
