import JobCard from "../../../components/global/JobCard";
import SectionHeader from "../../../components/global/SectionHeader";
import { IJobProp } from "../type";
// Listing apis
import { useListJobsQuery } from "../../../redux/features/jobApi";

const PopularJob = () => {
  const { data: jobData } = useListJobsQuery({});
  console.log(jobData?.data);

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
        {jobData?.data.map((element: IJobProp, index: number) => {
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
