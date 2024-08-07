// Components
import ProfileInfo from "./component/ProfileInfo";
import ProfileHeader from "./component/ProfileHeader";
import ProfileDetails from "./component/ProfileDetails";

const UserProfile = () => {
  return (
    <main>
      <ProfileHeader showSettingButton={true} />
      <section className="grid mt-[60px] lg:pb-0 pb-[60px] grid-cols-12 xl:gap-20 lg:gap-8 gap-2 padding-inline">
        <div className="lg:col-span-8 col-span-full">
          <ProfileInfo />
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <ProfileDetails />
        </div>
      </section>
    </main>
  );
};

export default UserProfile;
