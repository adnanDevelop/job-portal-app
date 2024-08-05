import { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";

const JobFilter = () => {
  const [sideBar, showSideBar] = useState<boolean>(false);
  const filters = {
    categories: [
      { title: "Graphic Design", value: "Graphic Design" },
      { title: "Web Development", value: "Web Developer" },
      { title: "App Development", value: " App Developer " },
      { title: "UI / UX Designer", value: "UI / UX Designer" },
      { title: "Video Editing", value: "Video Editor" },
      { title: "Content Creator", value: "Content Creator" },
      { title: "Blockchain Development", value: "Blockchain Developer" },
    ],
    location: [
      "Lahore",
      "Karachi",
      "Islamabad",
      "Faislabad",
      "Peshawar",
      "Rawalpindi",
    ],
    jobType: [
      { title: "Full Time", totalJobs: "3" },
      { title: "Part Time", totalJobs: "15" },
      { title: "Freelance", totalJobs: "6" },
      { title: "Remote", totalJobs: "2" },
    ],
    salaryType: ["10k - 15k", "15k - 30k", "30k - 50k", "More than 100k"],
  };

  return (
    <section>
      {/* Large screen filters */}
      <div className="sticky top-[75px] p-4 border border-gray-700 rounded-md shadow shadow-gray-800 lg:block hidden">
        {/* Search box */}
        <div>
          <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
            Search Company
          </label>
          <div className="w-full rounded-md border-color border h-[40px] relative">
            <input
              type="text"
              className="w-full h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
              placeholder="Search..."
            />
            <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
              <IoIosSearch />
            </span>
          </div>
        </div>

        {/* Categories section */}
        <div className="mt-5">
          <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
            Categories
          </label>
          <select className="w-full bg-transparent h-[40px] min-h-[40px] text-xs select text-white focus:outline-none focus:border-green  rounded-md border-color border">
            <option disabled selected className="text-gray-800">
              Select Category
            </option>
            {filters.categories.map((element, index) => {
              return (
                <option
                  key={index}
                  className="text-gray-800"
                  value={element.value}
                >
                  {element.title}
                </option>
              );
            })}
          </select>
        </div>

        {/* Location section */}
        <div className="mt-5">
          <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
            Location
          </label>
          <select className="w-full bg-transparent h-[40px] min-h-[40px] text-xs select text-white focus:outline-none focus:border-green  rounded-md border-color border">
            <option disabled selected className="text-gray-800">
              Select Location
            </option>
            {filters.location.map((element, index) => {
              return (
                <option key={index} className="text-gray-800" value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>

        {/* Job types section */}
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-white font-poppin">
            Job Types
          </label>

          {/* Options */}
          <div className="flex flex-col w-full gap-2">
            {filters.jobType.map((element, index) => {
              return (
                <div key={index} className="flex items-center justify-between">
                  <label
                    htmlFor={element.title}
                    className="flex items-center gap-2.5 text-sm font-medium leading-none text-slate font-jakarta "
                  >
                    <input
                      id={element.title}
                      type="checkbox"
                      className="rounded-md checkbox checkbox-success checkbox-sm"
                    />
                    {element.title}
                  </label>
                  <p className="leading-none text-[11px] font-poppin font-bold px-3 py-1 bg-[#05966839] text-green rounded-full">
                    {element.totalJobs}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Salary type section */}
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-white font-poppin">
            Salary
          </label>
          <div className="flex flex-col w-full gap-2">
            {filters.salaryType.map((element, index) => {
              return (
                <div key={index}>
                  <label
                    htmlFor={element}
                    className="flex items-center gap-2.5 text-sm font-medium leading-none text-slate font-jakarta "
                  >
                    <input
                      id={element}
                      name="element"
                      type="radio"
                      className=" radio radio-sm"
                    />
                    {element}
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Filter Button */}
        <div className="mt-8">
          <button className="w-full !h-[40px] primary-btn">
            Apply Filters
          </button>
        </div>
      </div>

      {/* Mobile screen filters */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between">
          {/* Search box */}
          <div className="basis-1/2">
            <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
              Search Company
            </label>
            <div className="w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="w-full h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => showSideBar(!sideBar)}
            className=" w-[40px] h-[40px] text-green focus:bg-green focus:text-white rounded-md bg-transparent border-green border text-[25px]  flex items-center justify-center"
          >
            <CiFilter />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed w-[350px]  h-screen bg-dark-blue border-r-2 border-r-green rounded-tr-xl top-0 transitions overflow-y-auto z-10 ${
          sideBar ? " left-[0%]" : "left-[-200%]"
        } `}
      >
        {/* Close button */}
        <div className="flex items-end justify-end p-3">
          <button
            className="close_btn text-[16px] text-white p-2 border  border-white rounded-md transition duration-300 hover:border-white hover:text-white "
            onClick={() => {
              showSideBar(false);
            }}
          >
            <GrClose />
          </button>
        </div>

        {/* filter section */}
        <div className="p-5">
          {/* Search box */}
          <div>
            <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
              Search Company
            </label>
            <div className="w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="w-full h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>

          {/* Categories section */}
          <div className="mt-5">
            <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
              Categories
            </label>
            <select className="w-full bg-transparent h-[40px] min-h-[40px] text-xs select text-white focus:outline-none focus:border-green  rounded-md border-color border">
              <option disabled selected className="text-gray-800">
                Select Category
              </option>
              {filters.categories.map((element, index) => {
                return (
                  <option
                    key={index}
                    className="text-gray-800"
                    value={element.value}
                  >
                    {element.title}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Location section */}
          <div className="mt-5">
            <label className="text-sm font-medium text-white font-poppin mb-1.5 block">
              Location
            </label>
            <select className="w-full bg-transparent h-[40px] min-h-[40px] text-xs select text-white focus:outline-none focus:border-green  rounded-md border-color border">
              <option disabled selected className="text-gray-800">
                Select Location
              </option>
              {filters.location.map((element, index) => {
                return (
                  <option key={index} className="text-gray-800" value={element}>
                    {element}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Job types section */}
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-white font-poppin">
              Job Types
            </label>

            {/* Options */}
            <div className="flex flex-col w-full gap-2">
              {filters.jobType.map((element, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <label
                      htmlFor={element.title}
                      className="flex items-center gap-2.5 text-sm font-medium leading-none text-slate font-jakarta "
                    >
                      <input
                        id={element.title}
                        type="checkbox"
                        className="rounded-md checkbox checkbox-success checkbox-sm"
                      />
                      {element.title}
                    </label>
                    <p className="leading-none text-[11px] font-poppin font-bold px-3 py-1 bg-[#05966839] text-green rounded-full">
                      {element.totalJobs}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Salary type section */}
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-white font-poppin">
              Salary
            </label>
            <div className="flex flex-col w-full gap-2">
              {filters.salaryType.map((element, index) => {
                return (
                  <div key={index}>
                    <label
                      htmlFor={element}
                      className="flex items-center gap-2.5 text-sm font-medium leading-none text-slate font-jakarta "
                    >
                      <input
                        id={element}
                        name="element"
                        type="radio"
                        className=" radio radio-sm"
                      />
                      {element}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter Button */}
          <div className="mt-8">
            <button className="w-full !h-[40px] primary-btn">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobFilter;
