// Interface
interface IDataProps {
  data: {
    fullName: string;
    profile: {
      profilePhoto: string;
      salary: string;
      experience: string;
      bio: string;
      skills: string[];
      description: string;
    };
  };
}

const CandidateProfileHeader = ({ data }: IDataProps) => {
  return (
    <section className="md:pt-[75px] pt-[60px] padding-inline mb-[100px]">
      <div
        className="relative w-full h-[40vh]  bg-no-repeat bg-center bg-cover shadow shadow-gray-700 rounded-md z-[1]"
        style={{ backgroundImage: `url(/image/user/banner.jpg)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#161d2e] to-[#0f172a3d] z-[-1] rounded-md" />
        {/* Profile image section */}
        <div className="absolute md:bottom-[-75px] bottom-[-50px]  flex items-center gap-3 left-4">
          <img
            src={data?.profile?.profilePhoto || "/image/user/avator.jpg"}
            className="md:w-[150px] w-[100px] md:h-[150px] h-[100px] rounded-full border-4 border-light-blue object-cover"
            alt=""
          />
          <div className="pt-14">
            <h4 className="text-[22px] mb-0.5 font-medium leading-none text-white font-jakarta capitalize ">
              {data?.fullName || "Adnan Tariq"}
            </h4>
            <p className="text-[15px] font-jakarta text-slate capitalize">
              {data?.profile?.bio || "Frontend Developer"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateProfileHeader;
