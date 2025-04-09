import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

// 導入路由
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);
