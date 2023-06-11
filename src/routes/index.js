import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Catalog from "./Catalog";
import ErrorPage from "./ErrorPage";
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
          path: "Error",
          element: <ErrorPage />,
        },
      ],
    },
    {
      path: "Order",
      element: <Order />,
    },
  ],
  { basename: "/Project-Sneackers" }
);

export default router;
