import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import RouteFooter from "./RouteFooter";
import RouteFooterMenu from "./RouteFooterMenu";

const router = createBrowserRouter([
    { 
      path: "/",
      element: <App />,
    },
    {
      path: "/Footer",
      element: <RouteFooter />
    },
    {
      path: "/components/Footer/FooterMenu",
      element: <RouteFooterMenu />
    }
])

export default router;