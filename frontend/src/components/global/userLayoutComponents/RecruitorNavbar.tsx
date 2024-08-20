// import { Link } from "react-router-dom";

// Redux
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";

// Icons
import { IoExitOutline } from "react-icons/io5";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

interface IProps {
  isSidebarActive: boolean;
  setSidebarActive: (value: boolean) => void;
}

const RecruitorNavbar = ({ isSidebarActive, setSidebarActive }: IProps) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleClick = () => {
    const elem = document.activeElement as HTMLElement;
    if (elem) {
      elem.blur();
    }
  };

  return (
    <nav
      className={`w-full h-[60px] bg-light-blue flex items-center border-b border-b-gray-700 justify-between px-[25px]`}
    >
      <button
        className="w-[40px] h-[40px] flex items-center justify-center border border-gray-700 rounded-lg focus:border-green text-[30px] text-white"
        onClick={() => setSidebarActive(!isSidebarActive)}
      >
        <HiMiniBars3BottomLeft />
      </button>
      <div className="flex items-center justify-center">
        <div className="rounded-md dropdown dropdown-bottom dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="flex items-center justify-center"
          >
            <img
              src={`${user?.profile?.profilePhoto || "/image/avator.jpg"}`}
              className="w-[35px] h-[35px] border-2 border-green object-cover rounded-full"
              alt=""
            />
          </div>
          {/* dropdown links */}
          <ul
            tabIndex={0}
            className="dropdown-content !top-[150%] menu  rounded-xl p-2 z-[1] w-[180px]  bg-dark-blue shadow border-b-2 border-b-green "
          >
            <li onClick={handleClick}>
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
    </nav>
  );
};

export default RecruitorNavbar;
