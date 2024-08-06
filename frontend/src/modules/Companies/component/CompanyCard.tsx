import { MdOutlineLocationOn } from "react-icons/md";
const CompanyCard = ({ data }: any) => {
  return (
    <div className="relative p-5 border border-gray-700 rounded-md shadow-sm cursor-pointer shadow-gray-800 group transitions hover:shadow-lg">
      <div className="img-section w-[60px] h-[60px] rounded-md shadow-md shadow-gray-700 border-2 border-gray-800 absolute top-[-30px] text-[30px] text-white flex items-center justify-center group-hover:bg-green group-hover:text-white transitions group-hover:border-green">
        {data.logo}
      </div>
      {/* Body section */}
      <div className="mt-[30px]">
        <h3 className="text-white mb-1.5 text-lg font-medium font-poppin">
          {data.title}
        </h3>

        <p className="pb-4 text-sm border-b text-slate font-poppin border-b-gray-700">
          {data.content}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-justify items-center flex gap-x-1.5 text-slate font-poppin">
            <MdOutlineLocationOn className="text-lg" />
            {data.location}
          </p>
          <p className="text-sm text-green font-poppin">{data.totalJobs}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
