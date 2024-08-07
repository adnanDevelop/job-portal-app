import UserUpdateForm from "./component/UserUpdateForm";
import ProfileHeader from "../userProfile/component/ProfileHeader";

const UserSetting = () => {
  return (
    <main>
      <ProfileHeader showSettingButton={false} />
      <UserUpdateForm />
    </main>
  );
};

export default UserSetting;
