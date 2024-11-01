import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Admin/Dashboard";
import MainIndex from "../pages/Home";
import Home from "../pages/Home/home";
import Weekly from "../pages/Home/weekly";
import Login from "../pages/Home/Login";
import UserDashboard from "../pages/Home/userDashboard";
import Week from "../pages/Home/week";
import AddLastWeeks from "../pages/Home/addLastWeeks";
import EditWeek from "../pages/Home/editWeek";

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
          },
          {
            path:"dashboard",
            element:<UserDashboard/>
          },
          {
            path:"dashboard/week/add/:date",
            element:<AddLastWeeks/>
          },
          {
            path:"dashboard/week/:id",
            element:<Week/>
          },
          {
            path:"dashboard/week/edit/:id",
            element:<EditWeek/>
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
