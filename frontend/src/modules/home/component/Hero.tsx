import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="lg:pt-[220px] pt-[120px] lg:pb-[140px] md:pb-[100px] pb-[70px] bg-dark-blue relative z-[1] padding-inline ">
      <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-b from-[#0596681e] to-[#05966814]" />

      {/* Image animation section */}
      <div>
        <div className="w-[40px] h-[40px] rounded-md border border-color shadow bg-dark-blue sm:block hidden slow-bounce absolute md:top-[20%] top-[15%] left-[50%] translate-x-[-50%] ">
          <div className="flex items-center justify-center h-[40px]">
            <img src="/image/hero/img-1.png" className="w-[22px]" alt="" />
          </div>
        </div>
        {/* 2 */}
        <div className="w-[40px] h-[40px] rounded-md lg:block hidden border border-color shadow bg-dark-blue  round-animate absolute top-[40%] left-[10%]  ">
          <div className="flex items-center justify-center h-[40px]">
            <img src="/image/hero/img-2.png" className="w-[22px]" alt="" />
          </div>
        </div>

        {/* 4 */}
        <div className="w-[40px] h-[40px] rounded-md border border-color lg:block hidden shadow bg-dark-blue   absolute top-[40%] right-[10%]  ">
          <div className="flex items-center justify-center h-[40px]">
            <img src="/image/hero/img-4.png" className="w-[22px]" alt="" />
          </div>
        </div>
        {/* 5 */}
        <div className="w-[40px] h-[40px] rounded-md border border-color shadow bg-dark-blue  xl:block hidden round-animate absolute bottom-[36%] right-[8%]  ">
          <div className="flex items-center justify-center h-[40px]">
            <img src="/image/hero/img-5.png" className="w-[22px]" alt="" />
          </div>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border border-color shadow bg-dark-blue  xl:block hidden  absolute bottom-[36%] left-[8%]  ">
          <div className="flex items-center justify-center h-[40px]">
            <img src="/image/hero/img-3.png" className="w-[22px]" alt="" />
          </div>
        </div>
      </div>

      {/* Text section */}
      <section className="flex flex-col items-center justify-center w-full text-center">
        <h1 className="text-white leading-none lg:text-[60px] md:text-[50px] sm:text-[40px] text-[35px] font-bold font-jakarta s">
          Join us &{" "}
          <span className="text-green">
            Explore <br /> Thousands
          </span>{" "}
          of Jobs
        </h1>
        <p className="mt-4 mb-3 text-sm text-slate sm:text-base">
          Find Jobs, Employment & Career Opportunities. Some of the companies
          we've helped <br className="hidden md:block" /> recruit excellent
          applicants over the years.
        </p>

        {/* Search section */}
        <div className="grid w-full grid-cols-12 gap-3 p-3 mt-4 rounded-md bg-dark-blue max-w-[950px]">
          <div className="sm:col-span-6 col-span-full md:col-span-4 lg:col-span-3">
            <input
              type="Search you keywords..."
              placeholder="Search Jobs"
              className="w-full h-[40px] px-2 text-xs text-white border rounded-md placeholder:text-xs focus:outline-none focus:border-green border-slate bg-dark-blue"
            />
          </div>
          <div className="sm:col-span-6 col-span-full md:col-span-4 lg:col-span-3">
            <input
              type="text"
              placeholder="Location"
              className="w-full h-[40px] px-2 text-xs text-white border rounded-md placeholder:text-xs focus:outline-none focus:border-green border-slate bg-dark-blue"
            />
          </div>
          <div className="sm:col-span-6 col-span-full md:col-span-4 lg:col-span-3">
            <input
              type="text"
              placeholder="Job Type"
              className="w-full h-[40px] px-2 text-xs text-white border rounded-md placeholder:text-xs focus:outline-none focus:border-green border-slate bg-dark-blue"
            />
          </div>
          {/* button section */}
          <div className="sm:col-span-6 lg:col-span-3 col-span-full md:col-span-full">
            <button className="w-full primary-btn !h-[40px] ">Search</button>
          </div>
        </div>

        {/* Badge section */}
        <p className="mt-4 text-sm text-slate">
          <span className="block mb-2 text-color sm:inline-block sm:mb-0">
            Popular Searches :
          </span>{" "}
          {["Developer", "Web", "IOS", "PHP", "Senior Engineer"].map(
            (item: string, index: number) => (
              <Link
                to="/jobs"
                key={index}
                className="m-1 text-[11px] leading-none badge  badge-outline border-green text-green transitions hover:bg-green hover:text-white focus:bg-green focus:text-white"
              >
                {item}
              </Link>
            )
          )}
        </p>
      </section>
    </main>
  );
};

export default Hero;
