import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  showSettingButton: boolean;
}
const ProfileHeader = ({ showSettingButton }: Props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  return (
    <section className="md:pt-[75px] pt-[60px] padding-inline mb-[100px]">
      <div
        className="relative w-full h-[40vh]  bg-no-repeat bg-center bg-cover shadow shadow-gray-700 rounded-md z-[1]"
        style={{ backgroundImage: `url(/image/user/banner.jpg)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#161d2e] to-[#0f172a3d] z-[-1] rounded-md" />
        {/* Profile image section */}
        <div className="absolute md:bottom-[-75px] bottom-[-50px]  flex items-center gap-3 left-4">
          <img
            src="/image/user/avator.jpg"
            className="md:w-[150px] w-[100px] md:h-[150px] h-[100px] rounded-full border-4 border-light-blue object-cover"
            alt=""
          />
          <div className="pt-14">
            <h4 className="text-[22px] mb-0.5 font-medium leading-none text-white font-jakarta capitalize ">
              {user ? user.fullName : "Adnan Tariq"}
            </h4>
            <p className="text-[15px] font-jakarta text-slate capitalize">
              {user ? user?.profile?.bio : "Frontend Developer"}
            </p>
          </div>
        </div>
      </div>

      {/* Setting button */}
      {showSettingButton && (
        <div className="flex justify-end mt-4">
          <Link
            to="/user-setting"
            className="w-[35px] h-[35px] rounded-full round-animate-2 !duration-1000 bg-[#05966834] text-green text-[20px] transitions hover:bg-green focus:bg-green hover:text-white focus:text-white  flex items-center justify-center"
          >
            <IoSettingsOutline />
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProfileHeader;
