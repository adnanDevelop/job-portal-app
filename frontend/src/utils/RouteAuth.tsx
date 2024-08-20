import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

// Protected routes
export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Public routes
export const PublicRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (isAuthenticated) {
    if (user.role === "student") {
      return <Navigate to="/" replace />;
    } else if (user.role === "recruiter") {
      return <Navigate to="/recruiter/dashboard" replace />;
    }
  }

  return <>{children}</>;
};

// Admin routes
export const AdminRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  console.log("User role:", user?.role);
  console.log("Is authenticated:", isAuthenticated);

  if (isAuthenticated && user.role === "recruitor") {
    return <Navigate to="/recruiter/dashboard" replace />;
  }

  return <>{children}</>;
};
