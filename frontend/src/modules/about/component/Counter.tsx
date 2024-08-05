import { FaPlay } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const Counter = () => {
  return (
    <main>
      {/* Image and content section */}
      <section className="md:grid rounded-md md:grid-cols-2 bg-green md:h-[90vh] overflow-hidden ">
        {/* Image section */}
        <section className="relative">
          <img
            src="/image/counter-img.jpg"
            className="w-full h-[90vh] object-cover"
            alt=""
          />
          {/* Play btn */}
          <button className="w-[80px] h-[80px] bg-dark-blue rounded-full flex items-center justify-center absolute md:top-[50%] top-[92%] md:left-[110%] left-[50%] md:translate-x-[-125%] translate-x-[-50%]  md:translate-y-[-50%] shadow-lg shadow-gray-700  text-white text-[20px]">
            <FaPlay />
          </button>
        </section>

        {/* Content section */}
        <section className="flex flex-col items-start justify-center w-full h-full lg:px-[50px] py-[50px] px-[20px]">
          <h2 className="lg:text-[30px] text-[25px] font-semibold text-white font-jakarta leading-8">
            Get the job of your dreams quickly.
          </h2>
          <p className="mt-3 text-sm font-light text-justify text-white font-poppin">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>

          <div className="mt-8">
            <p className="flex items-center gap-2 mb-2 text-sm font-light text-justify text-white font-poppin">
              <SiTicktick /> Digital Marketing Solutions for Tomorrow
            </p>
            <p className="flex items-center gap-2 mb-2 text-sm font-light text-justify text-white font-poppin">
              <SiTicktick /> Our Talented & Experienced Marketing Agency
            </p>
            <p className="flex items-center gap-2 text-sm font-light text-justify text-white font-poppin">
              <SiTicktick /> Create your own skin to match your brand
            </p>
          </div>
        </section>
      </section>

      {/* Counter section */}
      <section className="flex flex-wrap sm:flex-row flex-col items-center justify-between max-w-[900px] mx-auto  mt-[60px] gap-8">
        <div className="text-center">
          <h2 className="text-white font-bold text-[40px] font-jakarta mb-2 leading-none">
            1548k+
          </h2>
          <p className="uppercase text-slate font-jakarta">job fulfillment</p>
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold text-[40px] font-jakarta mb-2 leading-none">
            25+
          </h2>
          <p className="uppercase text-slate font-jakarta">branches</p>
        </div>
        <div className="text-center">
          <h2 className="text-white font-bold text-[40px] font-jakarta mb-2 leading-none">
            10+
          </h2>
          <p className="uppercase text-slate font-jakarta">years experience</p>
        </div>
      </section>
    </main>
  );
};

export default Counter;
