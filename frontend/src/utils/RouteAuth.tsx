import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated && user.role === "student") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export const RecruitorRoute = ({ children }: React.PropsWithChildren) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated && user.role === "recruitor") {
    return <Navigate to="/recruitor/dashboard" replace />;
  }

  return <>{children}</>;
};
