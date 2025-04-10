import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Login from "../page/login/login";
import Board from "../page/login/board";
import About from "../page/login/about";
import Home from "../App";
import NotFound from "../page/NotFound";

const router = createHashRouter([
  {
    path: "/login/:id/:gender",
    element: <Login />,
    children: [
      {
        // path: "board", //優先權>index
        index: true, // 若訪問父級路由，則會抓children內有index的路由 (path優先權>index)

        element: <Board />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
