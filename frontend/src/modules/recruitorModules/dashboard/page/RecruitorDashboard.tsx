// Components
import ViewsStats from "../components/ViewsStats";
import NetworkStat from "../components/NetworkStat";
import VacancyStats from "../components/VacancyStats";
import AvailableJobs from "../components/AvailableJobs";
import RecruitorProfile from "../components/RecruitorProfile";
import FeaturedCompanies from "../components/FeaturedCompanies";

const RecruitorDashboard = () => {
  return (
    <main className="w-full h-[80vh]">
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <ViewsStats />
        </div>
        <div className="col-span-6">
          <RecruitorProfile />
        </div>
        <div className="col-span-6">
          <VacancyStats />
        </div>
        <div className="col-span-6">
          <FeaturedCompanies />
        </div>
        <div className="col-span-6">
          <AvailableJobs />
        </div>
        <div className="col-span-6">
          <NetworkStat />
        </div>
      </section>
    </main>
  );
};

export default RecruitorDashboard;
