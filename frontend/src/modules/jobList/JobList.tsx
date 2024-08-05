import PageHeader from "../../components/global/PageHeader";
import JobFilter from "./component/JobFilter";

const JobList = () => {
  return (
    <main>
      {/* Page header section */}
      <section>
        <PageHeader title="Job Vacancies" breadCrumb="Job List" />
      </section>

      {/* Job list section */}
      <section className="grid grid-cols-12 padding-inline padding-block">
        <section className="col-span-4">
          <JobFilter />
        </section>
        <section className="col-span-8">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index: number) => {
            return <div></div>;
          })}
        </section>
      </section>
    </main>
  );
};

export default JobList;
