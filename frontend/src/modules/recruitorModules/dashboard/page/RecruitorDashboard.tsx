// Components
import ViewsStats from "../components/ViewsStats";
import NetworkStat from "../components/NetworkStat";
import AvailableJobs from "../components/AvailableJobs";
import ApplicationStat from "../components/ApplicationStat";
import RecruitorProfile from "../components/RecruitorProfile";
import FeaturedCompanies from "../components/FeaturedCompanies";

const RecruitorDashboard = () => {
  return (
    <main className="w-full">
      <section className="grid grid-cols-12 gap-4 mt-3">
        <div className="col-span-full">
          <ViewsStats />
        </div>
        <div className="md:col-span-7 col-span-full lg:col-span-8">
          <ApplicationStat />
        </div>
        <div className="md:col-span-5 lg:col-span-4 col-span-full">
          {/* <CandidateGender /> */}
          <RecruitorProfile />
        </div>
        <div className=" col-span-full md:col-span-6 lg:col-span-5">
          <FeaturedCompanies />
        </div>
        <div className=" col-span-full md:col-span-6 lg:col-span-7">
          <AvailableJobs />
          <div className="mt-4">
            <NetworkStat />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecruitorDashboard;
