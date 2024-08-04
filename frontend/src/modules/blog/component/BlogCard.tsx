import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BlogCard = ({ data }: any) => {
  return (
    <div className="overflow-hidden border border-gray-700 rounded-lg shadow-sm cursor-pointer shadow-gray-700">
      {/* Image section */}
      <div className=" overflow-hidden h-[200px]">
        <img
          src={data.image}
          alt=""
          className="hover:scale-[1.1] transitions scale-[1] h-[200px] object-cover w-full"
        />
      </div>

      {/* Body section */}
      <div className="relative p-4 pt-6">
        <p className="absolute z-[1] top-[-10%] left-3  m-1 text-[10px] mb-2 leading-none badge border-none px-2 badge-outline font-medium font-jakarta text-white bg-green transitions hover:text-white focus:text-white">
          {data.badge}
        </p>
        {/* Date and time section */}
        <div className="flex items-center justify-between">
          <p className="flex items-center text-xs gap-x-1.5 text-slate leading-none font-jakarta">
            <SlCalender className="text-white" />
            {data.date}
          </p>
          <p className="flex items-center text-xs gap-x-1.5 text-slate leading-none font-jakarta">
            <FaRegClock className="text-white" />
            {data.time}
          </p>
        </div>
        <h3 className="my-4 text-base font-medium leading-5 text-white font-poppin transitions hover:text-green">
          {data.title}
        </h3>

        <div className="flex items-center justify-between ">
          <Link
            to="/blog"
            className="relative text-sm font-medium text-white font-jakarta transitions before:absolute before:content-[''] before:w-0 before:h-[1px] before:bg-green before:bottom-0 before:left-0 hover:text-green hover:before:w-full before:transitions"
          >
            Read More
          </Link>
          <p className="flex items-center text-sm gap-x-1.5 text-slate leading-none font-jakarta">
            by
            <span className="text-white">{data.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
