import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  FaPencilRuler,
  FaCode,
  FaBullhorn,
  FaChartLine,
  FaNetworkWired,
  FaServer,
  FaUserShield,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";

const jobs = [
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Designer",
    companyName: "DesignHub",
    location: "New York, NY",
    salary: "$70,000 - $90,000",
  },
  {
    icon: <FaCode />,
    title: "Backend Developer",
    companyName: "TechWave",
    location: "San Francisco, CA",
    salary: "$80,000 - $110,000",
  },
  {
    icon: <FaBullhorn />,
    title: "Marketing Manager",
    companyName: "Adverto",
    location: "Los Angeles, CA",
    salary: "$75,000 - $95,000",
  },
  {
    icon: <FaChartLine />,
    title: "Data Analyst",
    companyName: "DataMetrics",
    location: "Chicago, IL",
    salary: "$65,000 - $85,000",
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Engineer",
    companyName: "NetSolutions",
    location: "Seattle, WA",
    salary: "$90,000 - $120,000",
  },
  {
    icon: <FaServer />,
    title: "Backend Developer",
    companyName: "DevBackend",
    location: "Boston, MA",
    salary: "$85,000 - $115,000",
  },
  {
    icon: <FaUserShield />,
    title: "Frontend Developer",
    companyName: "SecureTech",
    location: "Washington, D.C.",
    salary: "$95,000 - $125,000",
  },
  {
    icon: <FaMobileAlt />,
    title: "App Developer",
    companyName: "AppGen",
    location: "Denver, CO",
    salary: "$80,000 - $100,000",
  },
  {
    icon: <FaSearch />,
    title: "SEO Specialist",
    companyName: "WebOptimize",
    location: "Miami, FL",
    salary: "$60,000 - $80,000",
  },
];
const AvailableJobs = () => {
  return (
    <section className="p-4 rounded-md bg-light-blue">
      <div className="flex justify-between text-[20px] text-slate cursor-pointer mb-10">
        <h3 className="text-lg font-medium text-white font-poppin">
          Featured Jobs
        </h3>
        <BiDotsVerticalRounded className="cusor-pointer" />
      </div>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {jobs.map((element, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 p-4 border border-gray-700 rounded-md py-7 basis-1/4"
                >
                  <div>
                    <div className="w-[40px] h-[40px] rounded-md bg-dark-blue text-white text-[16px] flex items-center justify-center">
                      {element.icon}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-[13px] font-medium text-white capitalize font-jakarta">
                      {element.title}
                    </h4>
                    <p className="text-xs text-red-500 font-jakarta">
                      {element.companyName}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default AvailableJobs;
