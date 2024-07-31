import { Outlet, useRoutes } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/layout/Layout";

// Public Routes

// Protected Routes

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        // {
        //   index: true,
        //   element: <Home />,
        // },
       
      ],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        // {
        //   path: "login",
        //   element: <Login />,
        // },
      ],
    },
    // {
    //   path: "*",
    //   element: <NotFound />,
    // },
  ]);
};
