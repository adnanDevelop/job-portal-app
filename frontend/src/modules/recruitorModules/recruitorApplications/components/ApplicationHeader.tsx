import { IoIosSearch } from "react-icons/io";

const ApplicationHeader = () => {
  return (
    <section className="flex items-center justify-between w-full my-[40px]">
      {/* Search bar */}
      <div>
        <div>
          <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
            Search Company
          </label>
          <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
            <input
              type="text"
              className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
              placeholder="Search..."
            />
            <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
              <IoIosSearch />
            </span>
          </div>
        </div>
      </div>
      <button className="primary-btn px-[20px]">Create Company</button>
    </section>
)
};

export default ApplicationHeader;
