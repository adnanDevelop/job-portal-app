// Components
import ViewsStats from "../components/ViewsStats";
import NetworkStat from "../components/NetworkStat";
import ApplicationStat from "../components/ApplicationStat";
import AvailableJobs from "../components/AvailableJobs";
import RecruitorProfile from "../components/RecruitorProfile";
import FeaturedCompanies from "../components/FeaturedCompanies";

const RecruitorDashboard = () => {
  return (
    <main className="w-full h-[80vh]">
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-full">
              <ViewsStats />
            </div>
            <div className="col-span-8">
              <ApplicationStat />
            </div>
            <div className="col-span-4">
              <FeaturedCompanies />
            </div>
            <div className="col-span-6">
              <AvailableJobs />
            </div>
            <div className="col-span-6">
              <NetworkStat />
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <RecruitorProfile />
        </div>
      </section>
    </main>
  );
};

export default RecruitorDashboard;
