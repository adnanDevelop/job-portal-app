import { FaLocationArrow } from "react-icons/fa";

const CompanyCard = ({ data }: any) => {
  return (
    <div className="relative p-4 border border-gray-700 rounded-md shadow-sm shadow-gray-800">
      <div className="img-section">
        <img src={data.logo} alt="" />
      </div>
      {/* Body section */}
      <div>
        <h3 className="text-white mb-1.5 text-lg font-medium font-poppin">
          {data.title}
        </h3>

        <p className="text-sm  text-slate font-poppin pb-1.5 border-b border-b-gray-700">
          {data.content}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-justify items-center flex gap-x-1.5 text-slate font-poppin">
            <FaLocationArrow className="text-lg" />
            {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
