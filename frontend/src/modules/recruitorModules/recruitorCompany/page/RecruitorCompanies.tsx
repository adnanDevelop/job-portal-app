import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const content = [
  {
    icon: <FaFacebook />,
    title: "Facebook",
    content: "Design Team Agency",
    totalJobs: 15,
  },
  {
    icon: <FaTwitter />,
    title: "Twitter",
    content: "Design Team Agency",
    totalJobs: 22,
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    content: "Design Team Agency",
    totalJobs: 18,
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    content: "Design Team Agency",
    totalJobs: 12,
  },
  {
    icon: <FaYoutube />,
    title: "YouTube",
    content: "Design Team Agency",
    totalJobs: 8,
  },
  {
    icon: <FaPinterest />,
    title: "Pinterest",
    content: "Design Team Agency",
    totalJobs: 5,
  },
  {
    icon: <FaSnapchat />,
    title: "Snapchat",
    content: "Design Team Agency",
    totalJobs: 10,
  },
  {
    icon: <FaTiktok />,
    title: "TikTok",
    content: "Design Team Agency",
    totalJobs: 14,
  },
  {
    icon: <FaReddit />,
    title: "Reddit",
    content: "Design Team Agency",
    totalJobs: 7,
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    content: "Design Team Agency",
    totalJobs: 20,
  },
];

const RecruitorCompanies = () => {
  return (
    <main>
      {/* Company Search section */}
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
          Showing 12 of 124 Companies Results
        </h3>
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {content.map((element, index) => {
            return (
              <div
                className="flex flex-col justify-between px-4 py-6 rounded-md sm:items-center sm:flex-row col-span-full md:col-span-6 bg-light-blue"
                key={index}
              >
                <div className="flex items-center gap-3">
                  <div className="w-[60px] h-[60px] rounded-md bg-dark-blue flex items-center justify-center text-[25px] text-white">
                    {element.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-white font-poppin">
                      {element.title}
                    </h4>
                    <p className="text-xs text-slate font-poppin">
                      {element.content}
                    </p>
                  </div>
                </div>
                <button className="px-[20px] py-[8px] text-xs font-poppin border border-green rounded-full transitions bg-transparent text-green hover:bg-green hover:text-white sm:mt-0 mt-4">
                  {element.totalJobs} Jobs Available
                </button>
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

export default RecruitorCompanies;
