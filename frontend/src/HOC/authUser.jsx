import { Navigate, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser";

const AuthUser = (WrappedComponent) => {
  return (props) => {
    const { user } = useUser();
    const { pathname } = useLocation();
    if (user && user.username) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to={"../login"} state={{ from: pathname }} />;
    }
  };
};

export default AuthUser;
