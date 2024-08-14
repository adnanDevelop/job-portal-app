// Components
import JobFilter from "./component/JobFilter";
import JobStack from "../home/component/JobStack";
import JobCard from "../../components/global/JobCard";
import PageHeader from "../../components/global/PageHeader";
import { IJobProp } from "../home/type";

// Icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

// Apis
import { useListJobsQuery } from "../../redux/features/jobApi";

const JobList = () => {
  const { data } = useListJobsQuery({});

  return (
    <main className="relative">
      {/* Page header section */}
      <section>
        <PageHeader title="Job Vacancies" breadCrumb="Job List" />
      </section>

      {/* Job list section */}
      <section className="grid grid-cols-12 gap-4 padding-inline md:pt-[100px] pt-[80px]">
        <section className="xl:col-span-3 lg:col-span-4 col-span-full">
          <JobFilter />
        </section>
        <section className="grid grid-cols-12 gap-4 mt-3 lg:mt-0 xl:col-span-9 lg:col-span-8 col-span-full">
          {data?.data?.map((element: IJobProp, index: number) => {
            return (
              <div key={index} className="sm:col-span-6 col-span-full">
                <JobCard data={element} />
              </div>
            );
          })}

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
      </section>

      {/* JobStack section */}
      <JobStack />
    </main>
  );
};

export default JobList;
