import { Navigate , useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import Cookie from 'js-cookie';

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  // const {token} = useSelector((state) => state.user);   
  const token = Cookie.get("token");  
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  return <>{children}</>;

}

export default ProtectedRoutes;