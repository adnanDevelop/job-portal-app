import { Link } from "react-router-dom";

// Icons
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";

interface ILinks {
  name: string;
  path: string;
}

const Navbar = () => {
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  );
  console.log(isAuthenticated);

  const dispatch = useDispatch();
  const [open, setOpen] = useState<boolean>(false);
  const [sideBar, showSideBar] = useState<boolean>(false);
  const [scrollAnimation, setScrollAnimation] = useState<boolean>(false);
  const links: ILinks[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  const activeLink = window.location.pathname;

  // Scroll animation
  useEffect(() => {
    const windowScroll = () => {
      window.scrollY > 50
        ? setScrollAnimation(true)
        : setScrollAnimation(false);
    };
    window.addEventListener("scroll", windowScroll);

    return () => window.removeEventListener("scroll", windowScroll);
  }, []);

  // Sidebar function
  const openSidebar = () => {
    showSideBar(!sideBar);
    setOpen(!open);
  };

  return (
    <div className="relative">
      {/* large screen navbar */}
      <nav
        className={`flex items-center justify-between w-full sm:h-[75px] h-[55px] padding-inline transitions fixed top-0 left-0 z-[10] shadow ${
          scrollAnimation ? "bg-dark-blue" : "lg:bg-transparent bg-dark-blue"
        }`}
      >
        {/* Logo section */}
        <div>
          <img src="/image/logo-light.png" className="hidden md:block" alt="" />
          <img
            src="/image/small-logo.png"
            className="block md:hidden w-[35px] object-cover"
            alt=""
          />
        </div>

        {/* links */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-center text-sm font-medium text-white gap-x-6 ">
            {links.map((link: ILinks, index: number) => (
              <Link
                className={`transitions hover:text-green ${
                  activeLink === link?.path ? "text-green" : "text-white"
                }`}
                to={link?.path}
                key={index}
              >
                {link?.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-3">
          {isAuthenticated ? (
            <>
              {/* Search bar */}
              <div className="w-[170px] rounded-full border-color border h-[35px] relative lg:block hidden">
                <input
                  type="text"
                  className="w-full h-full text-xs text-white bg-transparent border border-transparent rounded-full placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                  placeholder="Search..."
                />
                <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                  <IoIosSearch />
                </span>
              </div>

              {/* Profile dropdown */}
              <div className="flex items-center justify-center">
                <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={`${"/image/avator.jpg"}`}
                      className="w-[35px] h-[35px] border-2 border-green object-cover rounded-full"
                      alt=""
                    />
                  </div>
                  {/* dropdown links */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content !top-[150%] menu  rounded-xl p-2 z-[1] w-[180px]  bg-dark-blue shadow"
                  >
                    <li>
                      <Link
                        to="/user-profile"
                        className="p-2 font-medium text-white bg-transparent rounded-md transitions hover:bg-green text-content-color hover:text-yellow focus:text-yellow"
                      >
                        <FaRegUser className="text-base" /> Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/setting"
                        className="p-2 font-medium text-white bg-transparent rounded-md transitions hover:bg-green text-content-color hover:text-yellow focus:text-yellow"
                      >
                        <IoSettingsOutline className="text-base" /> Setting
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="!p-2 font-medium bg-transparent rounded-md transitions hover:bg-green text-white text-content-color hover:text-yellow focus:text-yellow"
                        onClick={() => {
                          dispatch(logout());
                        }}
                      >
                        <IoExitOutline className="text-base" /> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-end gap-x-4">
              <Link
                className="flex items-center justify-center primary-btn-outline px-[20px]"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="flex items-center justify-center primary-btn px-[20px]"
                to="/register"
              >
                Register
              </Link>
            </div>
          )}

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              type="button"
              className="hamburger flex flex-col md:gap-y-[6px] gap-y-[5px]"
              onClick={openSidebar}
            >
              <span
                className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                  open
                    ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                    : ""
                }`}
              ></span>
              <span
                className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                  open ? " opacity-0" : ""
                }`}
              ></span>
              <span
                className={`md:w-[25px] w-[20px] h-[2px] bg-white rounded-full transform transition duration-500 ease-in-out ${
                  open
                    ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                    : ""
                }`}
              ></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Small screen navbar */}
      <div>
        <div
          className={`fixed w-[250px] h-screen bg-dark-blue border-r-2 border-r-green rounded-tr-xl top-0 transitions z-10 ${
            sideBar ? " left-[0%]" : "left-[-200%]"
          } `}
        >
          {/* Nav links */}
          <div className="p-[20px]">
            <div className="flex items-center justify-between menu_header">
              <div className="logo">
                <Link to="/">
                  <img
                    src="/image/small-logo.png"
                    alt=""
                    className=""
                    onClick={() => {
                      showSideBar(false);
                      setOpen(false);
                    }}
                    loading="lazy"
                  />
                </Link>
              </div>
              <button
                className="close_btn text-[16px] text-white p-2 border  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
                onClick={() => {
                  showSideBar(false);
                  setOpen(false);
                }}
              >
                <GrClose />
              </button>
            </div>
            <ul className="flex flex-col items-start list-none gap-y-6 mt-[50px]">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`transitions hover:text-green ${
                      activeLink === link?.path ? "text-green" : "text-white"
                    }`}
                    onClick={() => {
                      showSideBar(false);
                      setOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
