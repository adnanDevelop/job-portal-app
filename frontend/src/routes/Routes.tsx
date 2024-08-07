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
import JobDetail from "../modules/jobDetail/JobDetail";
import Candidate from "../modules/Candidate/Candidate";
import Companies from "../modules/Companies/Companies";
import Career from "../modules/career/Career";
import UserProfile from "../modules/userProfile/UserProfile";
import UserSetting from "../modules/userSetting/UserSetting";

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
          path: "/jobs",
          children: [
            {
              index: true,
              element: <JobList />,
            },
            {
              path: "job-detils",
              element: <JobDetail />,
            },
          ],
        },
        {
          path: "service",
          element: <Service />,
        },
        {
          path: "candidates",
          element: <Candidate />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "career",
          element: <Career />,
        },
        {
          path: "blog",
          element: <Blog />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "user-profile",
          element: <UserProfile />,
        },
        {
          path: "user-setting",
          element: <UserSetting />,
        },
        {
          path: "contact",
          element: <Contact />,
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
