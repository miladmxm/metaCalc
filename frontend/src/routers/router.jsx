import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Admin/Dashboard";
import MainIndex from "../pages/Home";
import Home from "../pages/Home/home";
import Weekly from "../pages/Home/weekly";
import Login from "../pages/Home/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":lang",
        element: <MainIndex />,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"weekly",
            element:<Weekly/>
          },
          {
            path:"login",
            element:<Login/>
          }
        ]
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
