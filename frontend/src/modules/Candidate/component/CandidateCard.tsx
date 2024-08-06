import { Link } from "react-router-dom";

import { FaHeart } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

const CandidateCard = ({ data }: any) => {
  return (
    <div className="relative px-4 py-5 border border-gray-700 rounded-md shadow-sm shadow-gray-700 group transitions hover:shadow-md">
      {/* Like button */}
      <button className="absolute top-[1rem] right-[1rem] text-gray-700 text-[25px] transitions focus:text-red-500 hover:tet-red-500">
        <FaHeart />
      </button>

      {/* Candidate Details */}
      <div className="flex flex-col items-center justify-center text-center pt-[25px]">
        <img
          src={data.img}
          className="w-[90px] h-[90px] rounded-full border-2 border-gray-700"
          alt=""
        />
        <h3 className="mt-2 text-[20px] text-white font-jakarta font-semibold ">
          {data.name}
        </h3>
        <p className="text-sm font-jakarta text-slate">{data.bio}</p>

        {/* Skill section */}
        <div className="flex flex-wrap items-center justify-center gap-1 mt-3">
          {data?.skills.map((element: string, index: number) => {
            return (
              <p
                className="px-3 py-0.5 rounded-full bg-[#05966813] text-green text-[12px]"
                key={index}
              >
                {element}
              </p>
            );
          })}
        </div>

        {/* Salary and experience section */}
        <div className="flex items-center gap-6 mt-3">
          <div className="text-center">
            <p className="text-base font-poppin text-slate">Salary:</p>
            <p className="text-sm text-white font-poppin">{data.salary}</p>
          </div>
          <div className="text-center">
            <p className="text-base font-poppin text-slate">Experience:</p>
            <p className="text-sm text-white font-poppin">{data.experience}</p>
          </div>
        </div>

        {/* Profile link */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          <Link
            to="/candidate"
            className="primary-btn px-[20px] h-[35px] flex items-center text-sm font-poppin justify-center leading-none"
          >
            Profile
          </Link>
          <Link
            to="/candidate"
            className="w-[35px] h-[35px] rounded-full  bg-[#05966813] text-green text-[20px] transitions hover:bg-green focus:bg-green hover:text-white focus:text-white  flex items-center justify-center"
          >
            <BiMessageRoundedDots />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
