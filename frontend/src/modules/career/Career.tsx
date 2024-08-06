import JobOpening from "./component/JobOpening";
import JobStack from "../home/component/JobStack";
import PageHeader from "../../components/global/PageHeader";

const Career = () => {
  return (
    <main>
      <PageHeader title="Career" breadCrumb="Career" />
      <JobStack />
      <JobOpening />
    </main>
  );
};

export default Career;
