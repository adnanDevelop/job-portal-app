import JobCard from "../../../components/global/JobCard";
import SectionHeader from "../../../components/global/SectionHeader";

const PopularJob = () => {
  return (
    <main className="padding-inline padding-block bg-light-blue">
      <section>
        <SectionHeader
          title="Popular Jobs"
          content="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
        />
      </section>

      {/* Job card section */}
      <section className="grid grid-cols-12 gap-x-4 gap-y-5 mt-[60px]  ">
        {[1, 2, 3, 4, 5, 6].map((element, index: number) => {
          return (
            <div
              className="sm:col-span-6 col-span-full lg:col-span-4 xl:col-span-3"
              key={index}
            >
              <JobCard data={element} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default PopularJob;
