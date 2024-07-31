import { Outlet } from "react-router-dom";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
