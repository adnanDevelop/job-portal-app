import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
