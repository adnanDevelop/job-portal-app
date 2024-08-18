import { Link } from "react-router-dom";

// Icons
import { MdOutlineLocationOn } from "react-icons/md";

// Types
interface IDataProps {
  data: {
    companyName: string;
    description: string;
    logo: string;
    location: string;
    _id: number;
    totalJobs: number;
  };
}

const CompanyCard = ({ data }: IDataProps) => {
  return (
    <div className="relative p-5 border border-gray-700 rounded-md shadow-sm cursor-pointer shadow-gray-800 transitions hover:shadow-lg">
      <Link to={`/company-profile/${data._id}`}>
        <div className="img-section w-[60px] h-[60px] rounded-md  border bg-dark-blue border-gray-700 absolute top-[-30px] text-[30px] text-white flex items-center justify-center ">
          <img src={data?.logo} className="w-[40px] object-cover" alt="" />
        </div>
        {/* Body section */}
        <div className="mt-[30px]">
          <h3 className="text-white mb-1.5 text-lg font-medium font-poppin capitalize ">
            {data?.companyName}
          </h3>

          <p className="pb-4 text-sm text-justify border-b text-slate font-poppin border-b-gray-700">
            {data?.description.length > 100
              ? data?.description.slice(0, 100).trim() + "..."
              : data?.description}
            x
          </p>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-justify items-center flex gap-x-1.5 text-slate font-poppin">
              <MdOutlineLocationOn className="text-lg" />
              {data?.location}
            </p>
            <p className="text-sm text-green font-poppin">{data.totalJobs}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CompanyCard;
