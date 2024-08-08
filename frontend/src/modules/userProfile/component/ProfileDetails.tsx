import React from "react";

// Icons
import { FiFileText } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";

// redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ProfileDetails = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const data: { name: string; icon: React.ReactElement; title: string }[] = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      title: user?.email || "dummy@gmail.com",
    },
    {
      name: "Birthday",
      icon: <FaCalendar />,
      title: user?.profile?.dateOfBirth || "31st Dec, 2002",
    },
    {
      name: "City",
      icon: <MdOutlineLocationOn />,
      title: user?.profile?.city || "Islamabad",
    },
    {
      name: "Country",
      icon: <MdOutlineLocationOn />,
      title: user?.profile?.country || "Pakistan",
    },
    {
      name: "Phone",
      icon: <FaPhone />,
      title: user?.profile?.phoneNumber || "0323-0838836",
    },
  ];

  console.log(user?.profile?.resume);

  return (
    <div className="p-5 rounded-lg xl:p-6 bg-light-blue">
      <h3 className="text-[20px] font-medium text-white font-poppin">
        Personal Details
      </h3>

      <div className="flex flex-col mt-4 gap-y-6">
        {data?.map((element, index) => {
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
          <FiFileText className="text-[35px]" />{" "}
          {`${user?.bio?.resume || "My-cv.pdf"}`}
        </p>
        <a
          href={` ${user?.profile?.resume} `}
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
