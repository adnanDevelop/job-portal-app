import { Link } from "react-router-dom";
import { format } from "date-fns";

// Icons
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";

// interface IBlogProps {
//   blogImage: string;
//   category: string;
//   title: string;
//   createdAt: string;
//   createdBy: { fullName: string };
//   _id: string;
// }

const BlogCard = ({ data }: any) => {
  return (
    <div className="overflow-hidden border border-gray-700 rounded-lg shadow-sm cursor-pointer shadow-gray-700">
      {/* Image section */}
      <div className=" overflow-hidden h-[200px]">
        <img
          src={data.blogImage}
          alt=""
          className="hover:scale-[1.1] transitions scale-[1] h-[200px] object-cover w-full"
        />
      </div>

      {/* Body section */}
      <div className="relative p-4 pt-6">
        <p className="absolute z-[1] top-[-10%] left-3  m-1 text-[10px] mb-2 leading-none badge border-none px-2 badge-outline font-medium font-jakarta text-white bg-green transitions hover:text-white focus:text-white">
          {data.category}
        </p>
        {/* Date and time section */}
        <div className="flex items-center justify-between">
          <p className="flex items-center text-xs gap-x-1.5 text-slate leading-none font-jakarta">
            <SlCalender className="text-white" />
            {format(new Date(data?.createdAt || 0), "dd MMMM yyyy")}
          </p>
          <p className="flex items-center text-xs gap-x-1.5 text-slate leading-none font-jakarta">
            <FaRegClock className="text-white" />
            {Math.floor(Math.random() * 10) + "min read"}
          </p>
        </div>
        <h3 className="my-4 text-base font-medium leading-5 text-white font-poppin transitions hover:text-green">
          {data?.title?.length > 28
            ? `${data?.title?.slice(0, 28)}...`
            : data?.title}
        </h3>

        <div className="flex items-center justify-between ">
          <Link
            to={`/blog-detail/${data?._id}`}
            className="relative text-sm font-medium text-white font-jakarta transitions before:absolute before:content-[''] before:w-0 before:h-[1px] before:bg-green before:bottom-0 before:left-0 hover:text-green hover:before:w-full before:transitions"
            onClick={() => window.scrollTo(0, 0)}
          >
            Read More
          </Link>
          <p className="flex items-center text-sm gap-x-1.5 text-slate leading-none font-jakarta">
            by
            <span className="text-white">{data?.createdBy?.fullName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
