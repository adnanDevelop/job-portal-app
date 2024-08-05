import { Outlet, useRoutes } from "react-router-dom";
import { PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/layout/Layout";

// Public Routes
import Login from "../modules/authPages/Login";
import Register from "../modules/authPages/Register";
import NotFound from "../modules/notFound/NotFound";

// Protected Routes
import Home from "../modules/home";
import About from "../modules/about";
import Service from "../modules/service";
import Blog from "../modules/blog/Blog";
import Contact from "../modules/contact";
import JobList from "../modules/jobList/JobList";

export const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        // <ProtectedRoute>
        <Layout />
        // </ProtectedRoute>
      ),
      children: [
        {
          // index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "jobs",
          element: <JobList />,
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      element: (
        <PublicRoute>
          <Outlet />
        </PublicRoute>
      ),
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};
