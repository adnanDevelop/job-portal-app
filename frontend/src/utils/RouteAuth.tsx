import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

// Protected routes
export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "recruitor") {
    return <Navigate to="/recruiter/dashboard" />;
  }

  return <>{children}</>;
};

// Public routes
export const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  if (isAuthenticated) {
    if (user.role === "student") {
      return <Navigate to="/" replace />;
    } else if (user.role === "recruitor") {
      return <Navigate to="/recruiter/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

// Admin routes
export const AdminRoute = ({ children }: React.PropsWithChildren) => {
  const { user, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === "student") {
    return <Navigate to="/" replace />;
  }

  if (user.role === "recruitor") {
    return <>{children}</>;
  }

  return <Navigate to="/recruiter/dashboard" replace />;
};
