import { Link } from "react-router-dom";

// Icons
import { SlPaperPlane } from "react-icons/sl";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegBuilding, FaUser } from "react-icons/fa";
import { PiFlagPennantBold, PiUsersThree } from "react-icons/pi";

interface IProps {
  isSidebarActive: boolean;
  setSidebarActive: (value: boolean) => void;
}

const links = [
  {
    name: "Dashboard",
    path: "/recruitor/dashboard",
    icons: <MdOutlineDashboard />,
  },
  { name: "Jobs", path: "/recruitor/jobs", icons: <PiFlagPennantBold /> },
  {
    name: "Applications",
    path: "/recruitor/applications",
    icons: <SlPaperPlane />,
  },
  { name: "Profile", path: "/recruitor/profile", icons: <FaUser /> },
  { name: "Companies", path: "/recruitor/companies", icons: <FaRegBuilding /> },
  {
    name: "Candidates",
    path: "/recruitor/candidates",
    icons: <PiUsersThree />,
  },
];

const Sidebar = ({ isSidebarActive }: IProps) => {
  return (
    <div
      className={`${
        isSidebarActive ? "w-[220px] p-[15px] " : "w-0 p-[0px]"
      } fixed top-0 left-0 h-full bg-light-blue py-[20px] border-r border-r-gray-700 transitions  `}
    >
      <div className={`${isSidebarActive ? "w-full" : "w-0 hidden"}`}>
        <img src={`/image/logo-light.png`} alt="" />
      </div>

      {/* Links */}
      <div
        className={`${
          isSidebarActive ? "w-full" : "w-0 "
        } mt-[50px] transitions`}
      >
        <div className="flex flex-col gap-y-2 ">
          {links.map((element, index) => {
            const activeLink = window.location.pathname;
            return (
              <Link
                key={index}
                to={element.path}
                className={`${
                  activeLink === element?.path
                    ? "bg-green text-white"
                    : "text-slate bg-transparent"
                } text-sm transitions flex items-center gap-x-2.5 p-[15px] rounded-lg text-[15px] transitions hover:bg-green hover:text-white`}
              >
                <span className="text-lg">{element.icons}</span> {element.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
