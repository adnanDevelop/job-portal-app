import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../redux/store";

// Protected routes
export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
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
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAuthenticated && user.role !== "recruitor") {
    // Redirect student to their home page
    if (user.role === "student") {
      return <Navigate to="/" replace />;
    }
  }

  if (
    isAuthenticated &&
    user.role === "recruitor" &&
    location.pathname.startsWith("/recruiter")
  ) {
    return <>{children}</>;
  }

  // Default redirect for recruitor role
  return <Navigate to="/recruiter/dashboard" replace />;
};
