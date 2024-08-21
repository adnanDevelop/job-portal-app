import { BiChat } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaPhone, FaRegFileAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { ImStopwatch } from "react-icons/im";

const ViewsStats = () => {
  const content = [
    { title: "Profile Viewed", value: 1250, icon: <BsEye /> },
    { title: "Unread Message", value: 70, icon: <BiChat /> },
    { title: "Application Submitted", value: 250, icon: <FaRegFileAlt /> },
    { title: "Answered", value: 20, icon: <MdOutlineDateRange /> },
    { title: "On Hold", value: 10, icon: <ImStopwatch /> },
    { title: "Accepted", value: 4, icon: <FaPhone /> },
  ];

  return (
    <section className="grid w-full grid-cols-12 gap-4">
      {content?.map((element, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-md md:col-span-4 sm:col-span-6 col-span-full xl:col-span-2 bg-light-blue"
          >
            <div className="w-[50px] h-[50px] flex items-center justify-center mb-3 mx-auto rounded-full bg-[#0596683e] text-green text-[20px]">
              {element?.icon}
            </div>
            <h3 className="text-white text-[25px] font-bold font-jakarta leading-none mb-1">
              {element.value}
            </h3>
            <p className="text-sm text-slate font-jakarta">{element?.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ViewsStats;
