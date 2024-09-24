import { Navigate , useLocation } from "react-router-dom";

import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({ children }) => {
  const location = useLocation();
  const {token} = useSelector((state) => state.user);   
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } 

  return <>{children}</>;

}

export default ProtectedRoutes;