import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { AdminRoute, ProtectedRoute, PublicRoute } from "../utils/RouteAuth";

// Main Layout
import Layout from "../components/layout/userLayout/Layout";

// Auth Routes
import Login from "../modules/authPages/Login";
import NotFound from "../modules/notFound/NotFound";
import Register from "../modules/authPages/Register";

// User Routes
import Home from "../modules/home";
import About from "../modules/about";
import Blog from "../modules/blog/Blog";
import Contact from "../modules/contact";
import Service from "../modules/service";
import Career from "../modules/career/Career";
import JobList from "../modules/jobList/JobList";
import JobDetail from "../modules/jobDetail/JobDetail";
import Candidate from "../modules/Candidate/Candidate";
import Companies from "../modules/Companies/Companies";
import UserProfile from "../modules/userProfile/UserProfile";
import UserSetting from "../modules/userSetting/UserSetting";
import CompanyProfile from "../modules/companyProfile/CompanyProfile";
import CandidateProfile from "../modules/candidateProfile/CandidateProfile";

// Recruitor Routes
import RecruitorLayout from "../components/layout/recruitorLayout/RecruitorLayout";
import RecruitorJobs from "../modules/recruitorModules/recruitorJobs/page/RecruitorJobs";
import RecruitorDashboard from "../modules/recruitorModules/dashboard/page/RecruitorDashboard";
import RecruitorProfile from "../modules/recruitorModules/recruitorProfile/page/RecruitorProfile";
import RecruitorCompanies from "../modules/recruitorModules/recruitorCompany/page/RecruitorCompanies";
import RecruitorCandidates from "../modules/recruitorModules/recruitorCandidate/page/RecruitorCandidate";
import RecruitorApplications from "../modules/recruitorModules/recruitorApplications/page/RecruitorApplications";

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
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "/jobs",
          element: <JobList />,
        },
        {
          path: "/job-details/:id",
          element: <JobDetail />,
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
          path: "candidates/profile/:id",
          element: <CandidateProfile />,
        },
        {
          path: "companies",
          element: <Companies />,
        },
        {
          path: "company-profile/:id",
          element: <CompanyProfile />,
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
      path: "/",
      element: (
        <AdminRoute>
          <RecruitorLayout />
        </AdminRoute>
      ),
      children: [
        { index: true, element: <Navigate to="recruiter/dashboard" replace /> }, // Index route simplified
        { path: "recruiter/dashboard", element: <RecruitorDashboard /> },
        { path: "recruiter/jobs", element: <RecruitorJobs /> },
        { path: "recruiter/applications", element: <RecruitorApplications /> },
        { path: "recruiter/profile", element: <RecruitorProfile /> },
        { path: "recruiter/companies", element: <RecruitorCompanies /> },
        { path: "recruiter/candidates", element: <RecruitorCandidates /> },
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
