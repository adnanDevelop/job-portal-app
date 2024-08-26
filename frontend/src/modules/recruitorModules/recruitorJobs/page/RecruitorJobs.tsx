import { useEffect, useState } from "react";

import { useListJobsByAdminQuery } from "../../../../redux/features/jobApi";

// Icons
import { IoIosSearch } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface jobType {
  title: string;
  company: { companyName: string; logo: string };
  location: string;
  salary: string;
}

const RecruitorJobs = () => {
  const [queryParams, setQueryParams] = useState({
    search: "",
    page: 1,
    limit: 10, // Number of items per page
  });

  const [totalPages, setTotalPages] = useState(1);

  const { data: jobData, isLoading } = useListJobsByAdminQuery({
    params: { ...queryParams },
  });

  useEffect(() => {
    if (jobData?.totalPages) {
      setTotalPages(jobData.totalPages);
    }
  }, [jobData]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setQueryParams((prev) => ({ ...prev, page: newPage }));
    }
  };

  return (
    <main>
      {/* Job Search section */}
      {/* Company Search section */}
      <section className="flex items-center justify-between w-full my-[40px]">
        {/* Search bar */}
        <div>
          <div>
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Job
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
                value={queryParams.search}
                onChange={(e) => {
                  setQueryParams({ ...queryParams, search: e.target.value });
                }}
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>
        <button className="primary-btn px-[20px]">Create Job</button>
      </section>

      {/* Job Card section */}
      <section className="mt-5">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {isLoading ? (
            <div className="w-full h-[60vh] flex items-center justify-center col-span-full">
              <span className="text-green loading loading-dots loading-lg"></span>
            </div>
          ) : (
            jobData?.data?.map((element: jobType, index: number) => {
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
            })
          )}
        </div>
      </section>

      {/* Pagniation */}
      {!isLoading && (
        <div className="flex items-center justify-center mt-10 col-span-full">
          <div className="flex items-center justify-center">
            <button
              className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
              onClick={() => handlePageChange(queryParams.page - 1)}
              disabled={queryParams.page === 1}
            >
              <FaChevronLeft />
            </button>
            {[...Array(totalPages).keys()]?.map((index) => {
              const pageNumber = index + 1;
              return (
                <button
                  key={pageNumber}
                  className={`w-[40px] h-[40px] flex items-center justify-center border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green ${
                    queryParams.page === pageNumber ? "bg-green text-white" : ""
                  }`}
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
              onClick={() => handlePageChange(queryParams.page + 1)}
              disabled={queryParams.page === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default RecruitorJobs;
