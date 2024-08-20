import { Link } from "react-router-dom";

interface IProps {
  isSidebarActive: boolean;
  setSidebarActive: (value: boolean) => void;
}

const links = [
  { name: "Dashboard", path: "/recruitor/dashboard" },
  { name: "Jobs", path: "/jobs" },
  { name: "Applications", path: "/recruitor/application" },
  { name: "Profile", path: "/profile" },
  { name: "Companies", path: "/companies" },
  { name: "Candidates", path: "/candidates" },
];

const Sidebar = ({ isSidebarActive }: IProps) => {
  return (
    <div
      className={`${
        isSidebarActive ? "w-[220px] p-[15px] " : "w-0 p-[0px]"
      } fixed top-0 left-0 h-full bg-light-blue py-[20px] border-r border-r-gray-700 transitions  `}
    >
      <div className={`${isSidebarActive ? "block" : "hidden"}`}>
        <img src="/image/logo-light.png" className="hidden md:block" alt="" />
      </div>

      {/* Links */}

      <div className={`${isSidebarActive ? "block" : "hidden"}`}>
        <div className="flex flex-col gap-y-2 mt-[50px]">
          {links.map((element, index) => {
            const isActive = window.location.pathname === element.path;
            return (
              <Link
                key={index}
                to={element.path}
                className={`${
                  isActive ? "bg-green text-white" : "text-slate"
                } text-sm transitions p-[15px] rounded-lg text-[15px] bg-transparent transitions hover:bg-green hover:text-white`}
              >
                {element.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
