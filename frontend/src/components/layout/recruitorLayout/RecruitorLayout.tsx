import { Outlet } from "react-router-dom";
import Footer from "../../global/recruitorLayoutComponents/Footer";
import Sidebar from "../../global/recruitorLayoutComponents/Sidebar";

const RecruitorLayout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RecruitorLayout;
