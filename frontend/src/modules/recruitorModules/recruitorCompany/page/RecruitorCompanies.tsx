import CreateCompanyModal from "./component/CreateCompanyModal";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useListCompaniesQuery } from "../../../../redux/features/companyApi";

// Icons
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RecruitorCompanies = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  // Calling apis
  const { data: companiesData } = useListCompaniesQuery({});

  // Filtering companies based on user id
  const filterCompanies = companiesData?.data?.filter(
    (element: { userId: string }) => {
      return element.userId === user?._id;
    }
  );

  return (
    <main>
      {/* Company Search section */}
      <section className="mt-[20px]">
        <section className="flex items-center justify-between w-full my-[40px]">
          {/* Search bar */}
          <div>
            <div>
              <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
                Search Company
              </label>
              <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
                <input
                  type="text"
                  className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                  placeholder="Search..."
                />
                <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                  <IoIosSearch />
                </span>
              </div>
            </div>
          </div>
          {/* Create company button */}
          <button
            className="primary-btn px-[20px]"
            onClick={() => {
              const element = document.getElementById(
                "createCompany"
              ) as HTMLDialogElement;
              if (element) {
                element.showModal();
              }
            }}
          >
            Create Company
          </button>
        </section>
      </section>

      {/* Job Card section */}
      <section className="mt-5">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {filterCompanies?.map(
            (
              element: {
                icon: string;
                logo: string;
                companyName: string;
                bio: string;
                allJobs: string;
              },
              index: number
            ) => {
              return (
                <div
                  className="flex flex-col justify-between px-4 py-6 rounded-md sm:items-center sm:flex-row col-span-full md:col-span-6 bg-light-blue"
                  key={index}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[60px] h-[60px] rounded-md bg-dark-blue flex items-center justify-center text-[25px] text-white">
                      {element.icon}
                      <img src={element.logo} className="w-[40px]" alt="" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white font-poppin">
                        {element.companyName}
                      </h4>
                      <p className="text-xs text-slate font-poppin">
                        {element.bio.length > 50
                          ? element.bio.slice(0, 50) + "..."
                          : element.bio}
                      </p>
                    </div>
                  </div>
                  <button className="px-[20px] py-[8px] text-xs font-poppin border border-green rounded-full transitions bg-transparent text-green hover:bg-green hover:text-white sm:mt-0 mt-4">
                    {element.allJobs?.length < 1 ? 0 : element.allJobs?.length}{" "}
                    Jobs Available
                  </button>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* Pagniation */}
      <div className="flex items-center justify-center mt-10 col-span-full">
        <div className="flex items-center justify-center">
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate  transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
            <FaChevronLeft />
          </button>
          {[1, 2, 3, 4, 5].map((element: number, index: number) => {
            return (
              <button
                key={index}
                className="w-[40px] h-[40px] flex items-center justify-center  border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
              >
                {element}
              </button>
            );
          })}
          <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
            {" "}
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Modals */}
      <CreateCompanyModal id="createCompany" />
    </main>
  );
};

export default RecruitorCompanies;
