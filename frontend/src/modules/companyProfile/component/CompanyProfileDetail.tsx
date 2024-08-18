import { IoLocationOutline } from "react-icons/io5";

interface IDataProps {
  data: {
    companyName: string;
    description: string;
    logo: string;
    location: string;
    _id: number;
    totalJobs: number;
    headQuater: string;
  };
}

const CompanyProfileDetail = ({ data }: IDataProps) => {
  console.log(data);

  return (
    <main className=" mt-[50px] padding-inline">
      {/* company logo section */}
      <section className="flex items-center justify-between p-4 py-6 border border-gray-700 rounded-lg bg-dark-blue">
        <div className="flex items-center gap-4">
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
        <div className="flex items-center justify-center gap-2">
          <button type="button" className="primary-btn !h-[35px] px-[20px]">
            Follow
          </button>
          <button
            type="button"
            className="primary-btn-outline !h-[35px] px-[20px]"
          >
            See Jobs
          </button>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-10">
        {/* Company description */}
        <div className="col-span-9">
          <div>
            <h2 className="mt-6 text-[25px] font-medium text-white font-jakarta ">
              Company Description
            </h2>

            <p className="mt-2 text-base max-w-[800px] text-justify text-slate">
              {data?.description}
            </p>
            <p className="mt-2 text-base max-w-[800px] text-justify text-slate">
              {data?.description}
            </p>
          </div>

          {/* Vacancies */}
          <div>
            <h2 className="mt-6 text-[25px] font-medium text-white font-jakarta ">
              Vacancies:
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompanyProfileDetail;
