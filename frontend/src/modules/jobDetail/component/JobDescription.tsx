// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

// Icons
import { FaRegBuilding } from "react-icons/fa";
import { HiArrowSmRight } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";

// apis
import { useListAllApplyJobsQuery } from "../../../redux/features/applyJobApi";

// Interface
interface JobDataProp {
  data: {
    _id: string;
    title: string;
    employmentType: string;
    requirements: string[];
    description: string;
    jobType: string;
    location: string;
    experience: string;
    company: { companyName: string };
    qualification: string;
    salary: number;
    createdAt: string;
    applications: { applicant: string }[];
  };
}

const JobDescription = ({ data }: JobDataProp) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const keyPoints = {
    duties: [
      "Participate in requirements analysis",
      "Write clean, scalable code using C# and .NET frameworks",
      "Test and deploy applications and systems",
      "Revise, update, refactor and debug code",
      "Improve existing software",
      "Develop documentation throughout the software development life cycle (SDLC)",
      "Serve as an expert on applications and provide technical support",
    ],
    skills: [
      "Proven experience as a .NET Developer or Application Developer",
      "good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.",
      "Experience designing, developing and creating RESTful web services and APIs",
      "Basic know how of Agile process and practices",
      "Good understanding of object-oriented programming.",
      "Good understanding of concurrent programming.",
      "Sound knowledge of application architecture and design.",
      "Excellent problem solving and analytical skills",
    ],
  };

  const { data: jobData } = useListAllApplyJobsQuery({});
  console.log(jobData?.data);

  // Verifying that loggedin user already applied or not
  const isApplied = data?.applications.some(
    (element) => element.applicant === user?._id || false
  );

  return (
    <div>
      {/* Header section */}
      <div className="flex flex-col gap-4 p-5 border border-gray-700 rounded-md sm:items-center sm:flex-row sm:p-7 bg-dark-blue">
        <div className="w-[80px] h-[80px] rounded-full border border-gray-700 flex items-center justify-center">
          <img
            src="/image/hero/img-1.png"
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
        {/* title */}
        <div>
          <h3 className="mb-3 text-lg font-medium leading-none text-white font-jakarta text-capitalize">
            {data?.title}
          </h3>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <p className="flex items-center gap-1.5 text-sm text-slate font-poppin">
              <FaRegBuilding className="text-lg text-green" />{" "}
              {data?.company?.companyName} Pvt. Ltd
            </p>
            <p className="flex items-center gap-1.5 text-sm text-slate font-poppin">
              <IoLocationOutline className="text-lg text-green" />{" "}
              {data?.location}, Pakistan
            </p>
          </div>
        </div>
      </div>

      {/* Detail Section */}
      <div className="mt-[40px]">
        <h3 className="text-lg font-semibold text-white font-jakarta">
          Job Description:
        </h3>
        <p className="mt-4 text-sm font-normal text-justify text-slate font-jakarta">
          One disadvantage of Lorum Ipsum is that in Latin certain letters
          appear more frequently than others - which creates a distinct visual
          impression. Moreover, in Latin only words at the beginning of
          sentences are capitalized.
        </p>
        <p className="mt-4 text-sm font-normal text-justify text-slate font-jakarta">
          This means that Lorem Ipsum cannot accurately represent, for example,
          German, in which all nouns are capitalized. Thus, Lorem Ipsum has only
          limited suitability as a visual filler for German texts. If the fill
          text is intended to illustrate the characteristics of different
          typefaces.
        </p>
        <p className="mt-4 text-sm font-normal text-justify text-slate font-jakarta">
          It sometimes makes sense to select texts containing the various
          letters and symbols specific to the output language.
        </p>

        {/* Responsibilities */}
        <div>
          <h3 className="mt-4 text-lg font-semibold text-white font-jakarta">
            Responsibilities and Duties:
          </h3>
          <p className="mt-2 text-sm font-normal text-justify text-slate font-jakarta">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          {/* Keypoints */}
          <div className="mt-4">
            {keyPoints.duties.map((element, index) => {
              return (
                <p
                  key={index}
                  className="flex items-center mb-2 text-sm font-normal text-justify gap-x-2 text-slate font-jakarta"
                >
                  <span>
                    <HiArrowSmRight className="text-green" />
                  </span>
                  {element}
                </p>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h3 className="mt-4 text-lg font-semibold text-white font-jakarta">
            Required Experience, Skills and Qualifications:
          </h3>
          <p className="mt-2 text-sm font-normal text-justify text-slate font-jakarta">
            It sometimes makes sense to select texts containing the various
            letters and symbols specific to the output language.
          </p>
          {/* Keypoints */}
          <div className="mt-4">
            {keyPoints.skills.map((element, index) => {
              return (
                <p
                  key={index}
                  className="flex items-center mb-2 text-sm font-normal text-justify gap-x-2 text-slate font-jakarta"
                >
                  <span>
                    <HiArrowSmRight className="text-green" />
                  </span>
                  {element}
                </p>
              );
            })}
          </div>
        </div>
      </div>

      {/* Apply button */}
      <div className="mt-10">
        {isApplied ? (
          <button
            className="secondary-btn px-[20px] cursor-not-allowed"
            disabled
          >
            Already Applied
          </button>
        ) : (
          <button
            className="primary-btn px-[20px]"
            // onClick={handleApply}
            // disabled={isLoading} // Optional: Disable button while loading
          >
            {/* {isLoading ? "Applying..." : "Apply Now"} */}
          </button>
        )}
      </div>
    </div>
  );
};

export default JobDescription;
