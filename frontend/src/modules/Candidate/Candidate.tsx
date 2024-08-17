// Components
import CandidateCard from "./component/CandidateCard";
import ExploreJob from "../home/component/ExploreJob";
import PageHeader from "../../components/global/PageHeader";

// Icons
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Apis
import { useGetAllUsersQuery } from "../../redux/features/userApi";
import { useState } from "react";

interface ICandidateCardProps {
  _id: string;
  fullName: string;
  profile: {
    profilePhoto: string;
    salary: string;
    experience: string;
    bio: string;
    skills: string[];
  };
}

const Candidate = () => {
  const [queryParams, setQueryParams] = useState({ search: "" });
  const { data: getUserData, isLoading } = useGetAllUsersQuery({
    params: queryParams,
  });

  // Filter students
  const filterCandidates = getUserData?.data?.filter(
    (element: { role: string }) => element.role === "student"
  );

  console.log(queryParams.search, getUserData);

  return (
    <main>
      <PageHeader title="Candidates" breadCrumb="Candidates" />
      <section className="padding-inline md:pt-[100px] pt-[70px] ">
        {/* Search bar */}
        <div className=" items-end justify-end w-full md:flex sm:mb-[50px] mb-[40px]">
          <div className="">
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Candidate
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
                value={queryParams.search}
                onChange={(event) =>
                  setQueryParams({ search: event.target.value })
                }
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>

        {/* Blog card section */}
        <section className="grid grid-cols-12 gap-5">
          {filterCandidates?.map(
            (element: ICandidateCardProps, index: number) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-3 sm:col-span-6 col-span-full"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <span className="loading loading-dots loading-md"></span>
                    </div>
                  ) : (
                    <CandidateCard data={element} />
                  )}
                </div>
              );
            }
          )}
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
      </section>
      {/* Explore job section */}
      <ExploreJob />
    </main>
  );
};

export default Candidate;
