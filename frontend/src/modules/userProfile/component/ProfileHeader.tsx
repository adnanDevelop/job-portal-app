import { IoSettingsOutline } from "react-icons/io5";

const ProfileHeader = () => {
  return (
    <section className="pt-[75px] padding-inline mb-[100px]">
      <div
        className="relative w-full h-[40vh]  bg-no-repeat bg-center bg-cover shadow shadow-gray-700 rounded-md z-[1]"
        style={{ backgroundImage: `url(/image/user/banner.jpg)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#161d2e] to-[#0f172a3d] z-[-1] rounded-md" />
        {/* Profile image section */}
        <div className="absolute bottom-[-75px]  flex items-center gap-3 left-4">
          <img
            src="/image/user/avator.jpg"
            className="w-[150px] h-[150px] rounded-full border-4 border-light-blue object-cover"
            alt=""
          />
          <div className="pt-14">
            <h4 className="text-[22px] mb-0.5 font-medium leading-none text-white font-jakarta">
              Adnan Tariq{" "}
            </h4>
            <p className="text-[15px] font-jakarta text-slate">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-2">
        <button
          // to="/candidate"
          className="w-[35px] h-[35px] rounded-full round-animate-2 !duration-1000 bg-[#05966834] text-green text-[20px] transitions hover:bg-green focus:bg-green hover:text-white focus:text-white  flex items-center justify-center"
        >
          <IoSettingsOutline />
        </button>
      </div>
    </section>
  );
};

export default ProfileHeader;
