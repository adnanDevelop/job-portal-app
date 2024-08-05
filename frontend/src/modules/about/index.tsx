// Components
import Counter from "./component/Counter";
import JobFeature from "./component/JobFeature";
import ExploreJob from "../home/component/ExploreJob";
import PageHeader from "../../components/global/PageHeader";

const About = () => {
  return (
    <main>
      {/* Header section */}
      <section>
        <PageHeader title="About" breadCrumb="About" />
      </section>
      <section className="padding-inline ">
        <JobFeature />
        <Counter />
        <ExploreJob />
      </section>
    </main>
  );
};

export default About;
