import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import Spinner from "../Spinner";

export function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return (
      <div className="flex w-[100%] justify-center">
        <Spinner />
      </div>
    );
  }

  return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
