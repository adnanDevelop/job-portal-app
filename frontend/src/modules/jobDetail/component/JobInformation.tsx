// Icons
import { formatDistanceToNow } from "date-fns";
import { PiBagFill } from "react-icons/pi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { LuUser, LuBookMinus, LuDollarSign, LuClock } from "react-icons/lu";

interface JobDataProp {
  data: {
    title: string;
    employmentType: string;
    requirements: string[];
    description: string;
    jobType: string;
    location: string;
    experience: string;
    qualification: string;
    salary: number;
    createdAt: string;
    applications: string[];
  };
}

const JobInformation = ({ data }: JobDataProp) => {
  const isoDate = data?.createdAt || new Date().toISOString();
  const formattedDate = formatDistanceToNow(new Date(isoDate));

  const details = [
    { icon: <LuUser />, title: "Emplyee Type", value: data?.jobType },
    {
      icon: <MdOutlineLocationOn />,
      title: "Location",
      value: data?.location,
    },
    {
      icon: <FiMonitor />,
      title: "Job Type",
      value: data?.title,
    },
    {
      icon: <PiBagFill />,
      title: "Experience",
      value: data?.experience,
    },
    {
      icon: <LuBookMinus />,
      title: "Qualifications",
      value: data?.qualification,
    },
    {
      icon: <LuDollarSign />,
      title: "Salary",
      value: `${data?.salary} PKR`,
    },
    {
      icon: <LuClock />,
      title: "Date posted",
      value: `${formattedDate} ago ,  ${
        data?.applications.length > 0
          ? data?.applications.length + " applications submitted"
          : ""
      }`,
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
