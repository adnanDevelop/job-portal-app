// Icons
import {} from "react-icons/fa";
import { PiBagFill } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { LuUser, LuBookMinus, LuDollarSign, LuClock } from "react-icons/lu";

const JobInformation = () => {
  const details = [
    { icon: <LuUser />, title: "Emplyee Type", value: "Full Time" },
    {
      icon: <MdOutlineLocationOn />,
      title: "Location",
      value: "Islambad, Pakistan",
    },
    {
      icon: <FiMonitor />,
      title: "Job Type",
      value: "Frontend Developer",
    },
    {
      icon: <PiBagFill />,
      title: "Experience",
      value: "2+ Years",
    },
    {
      icon: <LuBookMinus />,
      title: "Qualifications",
      value: "BSCS",
    },
    {
      icon: <LuDollarSign />,
      title: "Salary",
      value: "50k -100k",
    },
    {
      icon: <LuClock />,
      title: "Date posted",
      value: "28th June, 2024",
    },
  ];

  return (
    <div className="border border-gray-700 rounded-md bg-dark-blue">
      <h3 className="p-5 mb-3 text-lg font-medium leading-none text-white border-b border-gray-700 sm:p-7 font-jakarta text-capitalize">
        Job Information
      </h3>

      <div className="p-4 pt-4 sm:p-7">
        {details.map((element, index) => {
          return (
            <div
              key={index}
              className="flex items-center w-full gap-3 mb-5 text-lg text-white font-jakarta"
            >
              <p className="text-[20px] leading-none">{element.icon}</p>
              <div>
                <p className="mb-2 text-base font-medium leading-none">
                  {element.title}:
                </p>
                <p className="text-sm leading-none text-green">
                  {element.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobInformation;
