import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import Catalog from "./Catalog";
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
    }
  
])

export default router;