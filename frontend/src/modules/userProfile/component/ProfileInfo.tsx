import { format } from "date-fns";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Apis
import { useListAllApplyJobsQuery } from "../../../redux/features/applyJobApi";
interface IDetails {
  experience: { title: string; bio: string; content: string; date: string }[];
}

const ProfileInfo = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const details: IDetails = {
    experience: [
      {
        title: "Frontend Developer",
        bio: "Adnan Tariq - Pindigheb",
        content:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        date: "2019 - 2020",
      },
      {
        title: "Fullstack Developer",
        bio: "Adnan Tariq - Pindigheb",
        content:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        date: "2020 - 2022",
      },
    ],
  };

  const { data: applicationData } = useListAllApplyJobsQuery({});

  return (
    <div>
      {/* Info section */}
      <div className="mb-8">
        <h3 className="text-[25px] mb-3.5 text-white font-medium font-jakarta capitalize">
          {user?.fullName || "Adnan Tariq"}
        </h3>
        <p className="text-base text-justify text-slate font-jakarta mb-3.5">
          {`${
            user?.profile?.description ||
            "Obviously I'M a Web Developer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. The as opposed to using 'Content here, content here', making it look like readable English."
          }`}
        </p>
      </div>

      {/* Skills section */}
      <div>
        <h3 className="text-[25px] mb-3 text-white font-medium font-jakarta">
          Skills:
        </h3>
        <div className="flex items-center flex-wrap gap-2.5">
          {user?.profile?.skills.map((element: string, index: number) => {
            return (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between">
                  <p className=" text-xs mb-3 leading-none badge border-none px-3 h-[25px] badge-outline font-medium font-poppin  text-green transitions hover:bg-green hover:text-white focus:bg-green bg-[#05966813] focus:text-white">
                    {element}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience section */}
      <div className="mt-8">
        <h3 className="text-[25px] mb-4 text-white font-medium font-jakarta">
          Experience:
        </h3>

        <div className="w-full">
          {details.experience.map((element, index: number) => {
            return (
              <div
                className="flex flex-wrap items-center gap-4 mb-5"
                key={index}
              >
                <div className="lg:w-[200px] lg:flex-none flex items-center  gap-3">
                  <div>
                    <img
                      src="/image/user/company-logo.png"
                      className="w-[70px] h-[70px] object-cover"
                    />
                    <p className="mt-2 text-sm text-slate font-jakarta">
                      {element.date}
                    </p>
                  </div>
                  <div className="block lg:hidden">
                    <h3 className="text-[20px] text-white font-jakarta">
                      {element.title}
                    </h3>
                    <p className="text-sm text-slate font-jakarta">
                      {element.bio}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px] text-white font-jakarta lg:block hidden">
                    {element.title}
                  </h3>
                  <p className="hidden text-sm text-slate font-jakarta lg:block">
                    {element.bio}
                  </p>

                  <p className="text-base text-justify lg:pt-3 text-slate font-jakarta">
                    {element.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Applied jobs table section
       */}
      <div className="my-8 overflow-x-auto">
        <h2 className="mb-4 text-lg font-semibold text-white capitalize font-jakarta">
          Applied Jobs:
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="border-b-slate">
              <th className="text-base font-semibold text-white font-jakarta">
                Date
              </th>
              <th className="text-base font-semibold text-white font-jakarta">
                Job Role
              </th>
              <th className="text-base font-semibold text-white font-jakarta">
                Company
              </th>
              <th className="text-base font-semibold text-white font-jakarta">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {applicationData?.data?.map(
              (
                element: {
                  job: { title: string; company: { companyName: string } };
                  status: string;
                  createdAt: string;
                },
                index: string
              ) => {
                if (element?.job === null) return null;
                let badgeColor = "";
                switch (element?.status) {
                  case "pending":
                    badgeColor = "bg-slate text-gray-800";
                    break;
                  case "accepted":
                    badgeColor = "bg-green text-white";
                    break;
                  case "rejected":
                    badgeColor = "bg-red-500 text-white";
                    break;
                }

                return (
                  <tr key={index} className="border-b-slate">
                    <th className="text-sm font-light text-slate">
                      {format(new Date(element?.createdAt), "dd-M-yyyy")}
                    </th>
                    <td className="text-sm font-light text-slate">
                      {element?.job?.title}
                    </td>
                    <td className="text-sm font-light text-slate">
                      {element?.job?.company?.companyName}
                    </td>
                    <td>
                      <p
                        className={`text-xs capitalize  rounded-full w-[90px] h-[30px] flex items-center justify-center font-medium ${badgeColor}`}
                      >
                        {element?.status}
                      </p>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProfileInfo;
