import SectionHeader from "../../../components/global/SectionHeader";

const JobOpening = () => {
  const jobContent = [
    { title: "Frontend Developer", opening: 1 },
    { title: "Fullstack Developer", opening: 3 },
    { title: "Content Write", opening: 2 },
  ];

  return (
    <main className="padding-inline">
      <SectionHeader
        title="Job Openings"
        content="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.s"
      />

      {/* Opening Cards */}
      <section className="mt-[50px]">
        {jobContent.map((element: any, index: number) => {
          return (
            <div
              className="max-w-[850px] flex items-center justify-between  mx-auto py-6 px-4 rounded-md shadow-sm hover:shadow-md transitions hover:shadow-gray-600 border-2 border-gray-700 shadow-gray-700 mb-6"
              key={index}
            >
              <div>
                <h3 className="text-[20px] font-semibold text-white  font-jakarta">
                  {element.title}
                </h3>
                <p className="text-sm text-slate font-jakarta">
                  Total Openings: {element.opening}
                </p>
              </div>
              <div>
                <button className="px-[30px] h-[35px] rounded-full bg-transparent border border-gray-700 text-slate font-medium font-jakarta text-sm leading-none transitions hover:bg-green hover:border-green hover:text-white">
                  Apply Now
                </button>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default JobOpening;
