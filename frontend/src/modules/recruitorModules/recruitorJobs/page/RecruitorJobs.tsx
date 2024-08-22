import {
  FaBullhorn,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaNetworkWired,
  FaPaintBrush,
  FaPencilRuler,
  FaProjectDiagram,
  FaSearch,
  FaServer,
  FaUserShield,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

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
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designer",
    companyName: "Creative Minds",
    location: "Austin, TX",
    salary: "$55,000 - $75,000",
  },
  {
    icon: <FaDatabase />,
    title: "Database Administrator",
    companyName: "DataSecure",
    location: "Atlanta, GA",
    salary: "$85,000 - $105,000",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Manager",
    companyName: "BuildTech",
    location: "Dallas, TX",
    salary: "$90,000 - $120,000",
  },
];

const RecruitorJobs = () => {
  return (
    <main>
      {/* Job Search section */}
      <section className="mt-[20px]">
        <div className="max-w-[300px] h-[40px] relative rounded-full bg-light-blue text-slate ms-auto">
          <input
            type="text"
            className="w-full h-[40px] placeholder:text-xs focus:outline-none rounded-full bg-light-blue ps-4 pe-11 text-xs"
            placeholder="Search here..."
          />

          <button className="w-[30px] h-[30px] rounded-full bg-green absolute top-[50%] translate-y-[-50%] right-1.5 flex items-center justify-center text-[13px] text-white">
            <FaSearch />
          </button>
        </div>
      </section>

      {/* Job Card section */}
      <section className="mt-5">
        <h3 className="mb-6 text-base font-medium text-white font-poppin">
          Showing 12 of 124 Jobs Results
        </h3>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {jobs.map((element, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-4 border border-gray-700 rounded-md lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full bg-light-blue py-7"
              >
                <div>
                  <div className="w-[60px] h-[60px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
                    {element.icon}
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-base font-medium text-white capitalize font-jakarta">
                    {element.title}
                  </h4>
                  <p className="text-xs text-red-500 font-jakarta">
                    {element.companyName}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-1 mt-3">
                    <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                      <IoLocation /> {element.location}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                      {element.salary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pagniation */}
      <div className="flex items-center justify-center mt-8 col-span-full">
        <div className="flex items-center justify-center">
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate  transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
            <FaChevronLeft />
          </button>
          {[1, 2, 3, 4, 5].map((element: number, index: number) => {
            return (
              <button
                key={index}
                className="w-[40px] h-[40px] flex items-center justify-center  border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
              >
                {element}
              </button>
            );
          })}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
            {" "}
            <FaChevronRight />
          </button>
        </div>
      </div>
    </main>
  );
};

export default RecruitorJobs;
