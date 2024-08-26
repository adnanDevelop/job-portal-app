import { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Footer from "../../global/recruitorLayoutComponents/Footer";
import Sidebar from "../../global/recruitorLayoutComponents/Sidebar";
import RecruitorNavbar from "../../global/userLayoutComponents/RecruitorNavbar";

const RecruitorLayout = () => {
  const [isSidebarActive, setSidebarActive] = useState(true);

  return (
    <div className="relative lg:flex pt-[50px]">
      <div
        className={`flex-none transitions ${
          isSidebarActive ? "lg:w-[220px]" : "w-0"
        }`}
      >
        <Sidebar
          isSidebarActive={isSidebarActive}
          setSidebarActive={setSidebarActive}
        />
      </div>
      <div className={`flex flex-col flex-1`}>
        <div className="flex-none">
          <RecruitorNavbar
            isSidebarActive={isSidebarActive}
            setSidebarActive={setSidebarActive}
          />
        </div>
        <div
          className={`relative flex-1 md:p-[25px] p-[20px] bg-dark-blue md:pb-[80px]`}
        >
          <Outlet />
        </div>
        <Footer isSidebarActive={isSidebarActive} />
      </div>
    </div>
  );
};

export default RecruitorLayout;
