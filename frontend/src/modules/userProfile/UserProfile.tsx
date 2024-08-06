// Components
import ProfileInfo from "./component/ProfileInfo";
import ProfileHeader from "./component/ProfileHeader";
import ProfileDetails from "./component/ProfileDetails";

const UserProfile = () => {
  return (
    <main>
      <ProfileHeader />
      <section className="grid mt-[60px] grid-cols-12 gap-5 padding-inline">
        <div className="col-span-8">
          <ProfileInfo />
        </div>
        <div className="col-span-4">
          <ProfileDetails />
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
