import { IoLocation } from "react-icons/io5";

import { useListJobsByAdminQuery } from "../../../../redux/features/jobApi";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface jobType {
  title: string;
  company: { companyName: string; logo: string };
  location: string;
  salary: string;
}

const RecruitorJobs = () => {
  const { data: jobData } = useListJobsByAdminQuery({});
  console.log(jobData?.data);

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
          {jobData?.data?.map((element: jobType, index: number) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-3 p-4 border border-gray-700 rounded-md lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full bg-light-blue py-7"
              >
                <div>
                  <div className="w-[60px] h-[60px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
                    <img
                      src={element.company.logo}
                      className="w-[35px] rounded-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-base font-medium text-white capitalize font-jakarta">
                    {element.title}
                  </h4>
                  <p className="text-xs text-red-500 font-jakarta">
                    {element.company.companyName}
                  </p>
                  <div className="flex flex-col items-center justify-center gap-1 mt-2">
                    <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                      <IoLocation /> {element.location}
                    </p>
                    <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                      {element.salary} PKR
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pagniation */}
      <div className="flex items-center justify-center mt-10 col-span-full">
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
