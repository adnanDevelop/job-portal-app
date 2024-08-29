import { BiLocationPlus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

const RecruitorProfile = () => {
  return (
    <section className="w-full p-4 rounded-md bg-light-blue">
      {/* Header section */}
      <div className="flex items-center justify-end gap-3 mb-8">
        <button className="text-[20px] text-white">
          <FaRegCircleQuestion />
        </button>
        <button className="text-[20px] text-white">
          <CiSettings />
        </button>
        <div className="flex items-center gap-x-1">
          <img
            src="/image/avator.jpg"
            className="w-[30px] rounded-full"
            alt=""
          />
          <MdOutlineKeyboardArrowDown className="text-white text-[20px]" />
        </div>
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center justify-center gap-x-3">
        <img
          src="/image/avator.jpg"
          className="w-[100px] rounded-full"
          alt=""
        />
        <h2 className="font-medium text-[22px] mt-2 text-white font-jakarta">
          Adnan Tariq
        </h2>
        <p className="text-sm text-slate font-jakarta">Recruitor</p>
        <p className="flex items-center gap-1 text-sm text-slate font-jakarta">
          <BiLocationPlus /> Islamabad, Pakistan
        </p>
      </div>

      {/* Job posted button section */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-lg font-semibold leading-none text-slate font-jakarta">
          Job Posted
        </p>
        <Link
          to="/recruiter/jobs"
          className="primary-btn flex items-center justify-center gap-x-1 px-[20px] h-[35px]"
        >
          {" "}
          <FaPlus /> Add
        </Link>
      </div>

      {/* Jobs */}
      <div className="mt-5">
        <div className="flex items-start justify-between px-2 py-3 mb-2 rounded-md bg-green">
          <div className="flex items-center gap-3">
            <h3 className="w-[50px] h-[50px] bg-[#ffffff53] text-[22px] font-semibold text-white rounded-md flex items-center justify-center">
              95
            </h3>
            <div>
              <p className="text-base font-medium text-white font-poppin">
                Frontend Developer
              </p>
              <p className="text-sm text-white font-poppin">
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-start justify-between px-2 py-3 bg-red-500 rounded-md ">
            <div className="flex items-center gap-3">
              <h3 className="w-[50px] h-[50px] bg-[#ffffff53] text-[22px] font-semibold text-white rounded-md flex items-center justify-center">
                24
              </h3>
              <div>
                <p className="text-base font-medium text-white font-poppin">
                  Android Developer
                </p>
                <p className="text-sm text-white font-poppin">
                  Islamabad, Pakistan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitorProfile;
