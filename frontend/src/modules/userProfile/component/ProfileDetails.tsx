import React from "react";

// Icons
import { FiFileText } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";

const ProfileDetails = () => {
  const data: { name: string; icon: React.ReactElement; title: string }[] = [
    { name: "Email", icon: <FaEnvelope />, title: "dummy@gmail.com" },
    { name: "Birthday", icon: <FaCalendar />, title: "31st Dec, 2002" },
    { name: "City", icon: <MdOutlineLocationOn />, title: "Islamabad" },
    { name: "Country", icon: <MdOutlineLocationOn />, title: "Pakistan" },
    { name: "Phone", icon: <FaPhone />, title: "0323-0838836" },
  ];

  return (
    <div className="p-5 rounded-lg xl:p-6 bg-light-blue">
      <h3 className="text-[20px] font-medium text-white font-poppin">
        Personal Details
      </h3>

      <div className="flex flex-col mt-4 gap-y-6">
        {data.map((element, index) => {
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
          <FiFileText className="text-[35px]" /> My-cv.pdf
        </p>
        <button className="w-full p-2.5 flex items-center justify-center gap-1 rounded-md bg-green hover:scale-[1.06] transitions text-white font-poppin font-semibold">
          <FiFileText /> Download CV
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
