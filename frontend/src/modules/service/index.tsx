import JobFeature from "../about/component/JobFeature";
import PageHeader from "../../components/global/PageHeader";
import ExploreJob from "../home/component/ExploreJob";

const Service = () => {
  return (
    <main>
      {/* Page header section */}
      <section>
        <PageHeader title="How it works?" breadCrumb="Services" />
      </section>

      <section className="padding-inline">
        <JobFeature />
        <ExploreJob />
      </section>
    </main>
  );
};

export default Service;
