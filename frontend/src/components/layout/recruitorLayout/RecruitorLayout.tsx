import { Outlet } from "react-router-dom";
import Navbar from "../../global/userLayoutComponents/Navbar";
import Footer from "../../global/userLayoutComponents/Footer";

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
