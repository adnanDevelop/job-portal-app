import { useParams } from "react-router-dom";

// Components
import CandidateInfo from "./component/CandidateInfo";
import CandidateDetails from "./component/CandidateDetails";
import ProfileHeader from "../userProfile/component/ProfileHeader";

// Apis
import { useGetUserByIdQuery } from "../../redux/features/userApi";

const CandidateProfile = () => {
  const { id } = useParams();
  const { data: getUserData } = useGetUserByIdQuery({ id });

  return (
    <main>
      <ProfileHeader showSettingButton={false} />
      <section className="grid mt-[60px] lg:pb-0 pb-[60px] grid-cols-12 xl:gap-20 lg:gap-8 gap-2 padding-inline">
        <div className="lg:col-span-8 col-span-full">
          <CandidateInfo data={getUserData?.data} />
        </div>
        <div className="lg:col-span-4 col-span-full ">
          <CandidateDetails data={getUserData?.data} />
        </div>
      </section>
    </main>
  );
};

export default CandidateProfile;
