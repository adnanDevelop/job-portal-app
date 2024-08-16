import { useParams } from "react-router-dom";

// Components
import JobDescription from "./component/JobDescription";
import JobInformation from "./component/JobInformation";
import ExploreJob from "../home/component/ExploreJob";

// Apis
import { useGetJobByIdQuery } from "../../redux/features/jobApi";

const JobDetail = () => {
  const { id } = useParams();
  const { data } = useGetJobByIdQuery({ id });

  return (
    <main>
      <section className="padding-inline padding-block bg-light-blue md:pt-[150px] pt-[100px]">
        <section className="grid grid-cols-12 gap-6">
          {/* Job Detail section */}
          <div className="lg:col-span-8 col-span-full">
            <JobDescription data={data?.data} />
          </div>
          {/* Job information */}
          <div className="lg:col-span-4 col-span-full">
            <JobInformation data={data?.data} />
          </div>
        </section>
      </section>

      {/* Explore job section */}
      <ExploreJob />
    </main>
  );
};

export default JobDetail;
