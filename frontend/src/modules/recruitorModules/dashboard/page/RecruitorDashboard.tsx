// Components
import ViewsStats from "../components/ViewsStats";
import Acquistions from "../components/Acquistions";
import NetworkStat from "../components/NetworkStat";
import ApplicationStat from "../components/ApplicationStat";
import RecruitorProfile from "../components/RecruitorProfile";
import CandidateGender from "../components/CandidateGender";

const RecruitorDashboard = () => {
  return (
    <main className="w-full">
      <section className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="lg:col-span-7 col-span-full xl:col-span-9">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-full">
                  <ViewsStats />
                </div>
                <div className="xl:col-span-8 col-span-full">
                  <ApplicationStat />
                </div>
                <div className="xl:col-span-4 col-span-full">
                  <Acquistions />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-full xl:col-span-3">
              <RecruitorProfile />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 col-span-full xl:col-span-9">
          <NetworkStat />
        </div>
        <div className="lg:col-span-5 col-span-full xl:col-span-3">
          <CandidateGender />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-4 mt-5">
        <div className="col-span-full">
          <ViewsStats />
        </div>
        <div className="col-span-8">
          <ApplicationStat />
        </div>
        <div className="col-span-4">
          <CandidateGender />
        </div>
      </section>
    </main>
  );
};

export default RecruitorDashboard;
