import React from "react";

// Icons
import { FiFileText } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";

interface IDataProps {
  data: {
    email: string;
    fullName: string;
    profile: {
      profilePhoto: string;
      salary: string;
      experience: string;
      bio: string;
      skills: string[];
      description: string;
      dateOfBirth: string;
      city: string;
      country: string;
      phoneNumber: string;
      resume: string;
    };
  };
}

const ProfileDetails = ({ data }: IDataProps) => {
  const newData: { name: string; icon: React.ReactElement; title: string }[] = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      title: data?.email || "dummy@gmail.com",
    },
    {
      name: "Birthday",
      icon: <FaCalendar />,
      title: data?.profile?.dateOfBirth || "31st Dec, 2002",
    },
    {
      name: "City",
      icon: <MdOutlineLocationOn />,
      title: data?.profile?.city || "Islamabad",
    },
    {
      name: "Country",
      icon: <MdOutlineLocationOn />,
      title: data?.profile?.country || "Pakistan",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      title: data?.profile?.phoneNumber || "0323-0838836",
    },
  ];

  console.log(data);
  return (
    <div className="p-5 rounded-lg xl:p-6 bg-light-blue">
      <h3 className="text-[20px] font-medium text-white font-poppin">
        Personal Details
      </h3>

      <div className="flex flex-col mt-4 gap-y-6">
        {newData?.map((element, index) => {
          return (
            <div key={index} className="flex items-center justify-between">
              <p className="flex items-center text-base leading-none text-slate font-jakarta">
                <span className="me-1.5">{element.icon}</span>{" "}
                <span>{element.name}</span>
              </p>
              <p className="text-base leading-none text-white font-jakarta">
                {element?.title}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full p-5 mt-10 rounded-md bg-dark-blue">
        <p className="flex items-center gap-2 mb-6 text-lg text-white">
          <FiFileText className="text-[35px]" /> {`My-cv.pdf`}
        </p>
        <a
          href={` ${data?.profile?.resume} `}
          target="_blank"
          // download={` ${user?.profile?.resume || "/image/my-cv.pdf"} `}
          className="w-full p-2.5 flex items-center justify-center gap-1 rounded-md bg-green hover:scale-[1.06] transitions text-white font-poppin font-semibold"
        >
          <FiFileText /> View Cv
        </a>
      </div>
    </div>
  );
};

export default ProfileDetails;
