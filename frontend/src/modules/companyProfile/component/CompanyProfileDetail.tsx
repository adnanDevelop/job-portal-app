import { IoGlobe, IoLocationOutline } from "react-icons/io5";
import JobCard from "../../../components/global/JobCard";

interface IDataProps {
  data: {
    companyName: string;
    description: string;
    logo: string;
    location: string;
    _id: number;
    totalJobs: number;
    headQuater: string;
    allJobs: [];
    founded: string;
    founder: string;
    headerQuater: string;
    websiteLink: string;
  };
}

const CompanyProfileDetail = ({ data }: IDataProps) => {

  const details = [
    { key: "Founded", value: data?.founded },
    { key: "Founder", value: data?.founder },
    { key: "Headquarter", value: data?.headQuater },
    { key: "Website Link", value: data?.websiteLink },
  ];

  return (
    <main className="my-[50px] padding-inline ">
      {/* company logo section */}
      <section className="flex flex-col p-4 py-6 border border-gray-700 rounded-lg sm:justify-between sm:items-center sm:flex-row bg-dark-blue">
        <div className="flex items-center gap-4 ">
          <div className=" w-[60px] h-[60px]  flex items-center justify-center rounded-lg bg-[#2d3747]">
            <img src={data?.logo} className="w-[40px] object-cover" alt="" />
          </div>
          <div>
            <h3 className="text-lg leading-none text-white capitalize font-poppin">
              {data?.companyName}
            </h3>
            <p className="flex items-center mt-1.5 text-sm text-slate">
              <span className="flex items-center gap-1">
                <IoLocationOutline /> {data?.location},
              </span>
              <span className="ms-1">{data?.headQuater}</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 mt-3 sm:justify-center sm:items-center sm:mt-0">
          <button type="button" className="primary-btn !h-[35px] px-[20px]">
            Follow
          </button>
          <a
            href="#jobs"
            className="primary-btn-outline flex items-center justify-center !h-[35px] px-[20px]"
          >
            See Jobs
          </a>
        </div>
      </section>

      {/* Company description */}
      <section className="grid grid-cols-12 gap-10 mt-10">
        {/* Company jobs */}
        <div className="lg:col-span-8 col-span-full">
          <div>
            <h2 className=" text-[25px] font-medium text-white font-jakarta ">
              Company Description
            </h2>

            <p className="mt-2 text-base sm:max-w-[800px] text-justify text-slate">
              {data?.description}
            </p>
            <p className="mt-2 text-base sm:max-w-[800px] text-justify text-slate">
              {data?.description}
            </p>
          </div>

          {/* Vacancies */}
          <div id="jobs">
            <h2 className="mt-6 text-[25px] font-medium text-white font-jakarta mb-4">
              Vacancies:
            </h2>
          </div>

          <div className="grid-cols-12 gap-3 sm:grid">
            {data?.allJobs.map((element, index: number) => {
              return (
                <div key={index} className="md:col-span-6 col-span-full">
                  <JobCard data={element} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Details section */}
        <div className="px-4 py-6 rounded-lg lg:col-span-4 col-span-full bg-light-blue">
          <div className="pb-2 border-b border-b-gray-700">
            {details?.map((element, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between mb-2.5"
                >
                  <p className="font-medium text-slate font-jakarta">
                    {element.key}
                  </p>
                  {element.key === "Website Link" ? (
                    <a
                      href={element?.value}
                      className="font-medium w-[30px] h-[30px] flex items-center justify-center border border-gray-700 rounded-md bg-transparent text-white font-jakarta transitions hover:bg-green hover:text-white hover:border-green"
                      target="_blank"
                    >
                      <IoGlobe />
                    </a>
                  ) : (
                    <p className="font-medium text-white font-jakarta">
                      {element?.value}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-4">
            <h3 className="mb-4 text-lg font-medium text-white font-jakarta">
              Contact Us
            </h3>

            <div className="mb-4">
              <h4 className="mb-1.5 text-sm leading-none text-white font-poppin">
                Your Name:
              </h4>
              <input
                type="text"
                className="w-full h-[40px] px-2 rounded-md bg-dark-blue text-slate placeholder:text-slate text-sm  placeholder:text-xs focus:border-green focus:outline-none border border-transparent"
                placeholder="Name:"
              />
            </div>

            <div className="mb-4">
              <h4 className="mb-1.5 text-sm leading-none text-white font-poppin">
                Your Email:
              </h4>
              <input
                type="email"
                className="w-full h-[40px] px-2 rounded-md bg-dark-blue text-slate placeholder:text-slate text-sm  placeholder:text-xs focus:border-green focus:outline-none border border-transparent"
                placeholder="Email:"
              />
            </div>

            <div className="mb-4">
              <h4 className="mb-1.5 text-sm leading-none text-white font-poppin">
                Your Question:
              </h4>
              <input
                type="text"
                className="w-full h-[40px] px-2 rounded-md bg-dark-blue text-slate placeholder:text-slate text-sm  placeholder:text-xs focus:border-green focus:outline-none border border-transparent"
                placeholder="Subject:"
              />
            </div>

            <div className="mb-3">
              <h4 className="mb-1.5 text-sm leading-none text-white font-poppin">
                Your Coment:
              </h4>
              <textarea
                className="w-full h-[120px] resize-none p-2 rounded-md bg-dark-blue text-slate placeholder:text-slate text-sm  placeholder:text-xs focus:border-green focus:outline-none border border-transparent"
                placeholder="Subject:"
              />
            </div>

            <div>
              <button type="submit" className="primary-btn px-[20px] w-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyProfileDetail;
