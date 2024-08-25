import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":lang",
        element: <Home />,
        children: [
          {
            path: ":any",
            element: <h2>helo</h2>,
          },
        ],
      },
    ],
  },
]);

export default router;
