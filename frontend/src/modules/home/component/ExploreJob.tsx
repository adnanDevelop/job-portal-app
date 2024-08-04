import { Link } from "react-router-dom";

import { FaRegEnvelope } from "react-icons/fa6";

const ExploreJob = () => {
  return (
    <main className="padding-inline padding-block">
      <section className="flex flex-col items-center relative justify-center text-center overflow-hidden rounded-md p-[40px] border border-gray-800 shadow-md shadow-gray-700 bg-dark-blue">
        <div className="text-[120px] absolute text-white opacity-[0.1] top-0 left-0 rotate-[-40deg]">
          <FaRegEnvelope />
        </div>
        <div>
          <h2 className="md:text-[30px] text-[25px] font-semibold text-white font-jakarta">
            Explore a job now!
          </h2>
          <p className="mt-2 mb-3 text-sm text-center text-slate max-w-[500px] mx-auto">
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide..
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/jobs"
              className="flex items-center justify-center px-[20px] primary-btn"
            >
              Apply Now
            </Link>
            <Link
              to="/jobs"
              className="flex items-center justify-center px-[20px] primary-btn-outline"
            >
              Explore Jobs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreJob;
