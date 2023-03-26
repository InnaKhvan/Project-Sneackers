import React from "react";
import ReactDOM from "react-dom/client";
//import { store } from "./store";
import { Provider as StoreProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      {/* <StoreProvider store={store}> */}
    <RouterProvider router={router} />
    {/* </StoreProvider> */}
  </React.StrictMode>
);