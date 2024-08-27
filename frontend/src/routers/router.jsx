import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Admin/Dashboard";
import HomeIndex from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":lang",
        element: <HomeIndex />,
      },
      {
        path:":lang/admin",
        element:<Dashboard/>,
        children:[
          {
            path:"",
            element:<h1>home</h1>
          },
          {
            path:"dot",
            element:<h3>dot</h3>
          }
        ]
      }
    ],
  },
]);

export default router;
