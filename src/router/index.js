import { createBrowserRouter } from "react-router-dom";
import Login from "../page/login/login";
import Board from "../page/login/board";
import About from "../page/login/about";
import Home from "../App";

const router = createBrowserRouter([
  {
    path: "/login/:id/:gender",
    element: <Login />,
    children: [
      {
        path: "board",
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
]);

export default router;
