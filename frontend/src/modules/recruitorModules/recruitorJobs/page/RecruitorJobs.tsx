import { useState } from "react";

// Apis
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useListJobsByAdminQuery } from "../../../../redux/features/jobApi";

// Components
import DeleteModal from "../component/DeleteModal";
import CreateJobModal from "../component/CreateJobModal";
import UpdateJobModal from "../component/UpdateJobModal";

// Icons
import { IoIosSearch } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface jobType {
  title: string;
  company: { companyName: string; logo: string };
  location: string;
  salary: string;
  _id: string;
}

const RecruitorJobs = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const [cardId, setCardId] = useState<string>("");
  const [updateCardId, setUpdateCardId] = useState<string>("");
  const [queryParams, setQueryParams] = useState({
    search: "",
    page: 1,
    limit: 100,
  });

  const { data: jobData, isLoading } = useListJobsByAdminQuery({
    params: { search: queryParams.search },
  });

  const filterJobByAdmin = jobData?.data?.filter(
    (element: { createdBy: string }) => element?.createdBy === user?._id
  );

  const deleteJob = (id: string) => {
    setCardId(id);
    const deleteModalElement = document.getElementById(id);
    if (deleteModalElement) {
      (deleteModalElement as HTMLDialogElement).showModal();
    }
  };
  return (
    <main>
      {/* Job Search section */}
      <section className="flex items-center justify-between w-full my-[40px]">
        {/* Search bar */}
        <div>
          <div>
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Job
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
                value={queryParams.search}
                onChange={(e) => {
                  setQueryParams({ ...queryParams, search: e.target.value });
                }}
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>
        {/* Create button */}
        <button
          className="primary-btn px-[20px]"
          onClick={() => {
            const element = document.getElementById(
              "CreateJobModal"
            ) as HTMLDialogElement;
            if (element) {
              element.showModal();
            }
          }}
        >
          Create Job
        </button>
      </section>

      {/* Job Card section */}
      <section className="mt-5">
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {isLoading ? (
            <div className="w-full h-[60vh] flex items-center justify-center col-span-full">
              <span className="text-green loading loading-dots loading-lg"></span>
            </div>
          ) : (
            filterJobByAdmin?.map((element: jobType, index: number) => {
              return (
                <div
                  key={index}
                  className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full"
                >
                  <div className="p-4 pt-4 border border-gray-700 rounded-md bg-light-blue py-7">
                    <div className="flex justify-end gap-2 mb-4">
                      {/* Update button */}
                      <button
                        onClick={() => {
                          setUpdateCardId(element._id);
                          const deleteModalElement = document.getElementById(
                            element?._id
                          );
                          if (deleteModalElement) {
                            (
                              deleteModalElement as HTMLDialogElement
                            ).showModal();
                          }
                        }}
                        className="w-[30px] h-[30px] rounded-md bg-green focus:bg-[#23755b] text-white flex items-center justify-center"
                      >
                        {" "}
                        <HiOutlinePencilSquare className="text-base text-white" />
                      </button>
                      {/* Delete button */}
                      <button
                        onClick={() => deleteJob(element._id)}
                        className="w-[30px] h-[30px] rounded-md bg-red-500 focus:bg-red-700 text-white flex items-center justify-center"
                      >
                        {" "}
                        <RiDeleteBinLine className="text-white" />
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div>
                        <div className="w-[60px] h-[60px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
                          <img
                            src={element.company.logo}
                            className="w-[35px] rounded-full"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h4 className="text-base font-medium text-white capitalize font-jakarta">
                          {element.title}
                        </h4>
                        <p className="text-xs text-red-500 font-jakarta">
                          {element.company.companyName}
                        </p>
                        <div className="flex flex-col items-center justify-center gap-1 mt-2">
                          <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                            <IoLocation /> {element.location}
                          </p>
                          <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
                            {element.salary} PKR
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Pagniation */}
      {!isLoading && (
        <div className="flex items-center justify-center mt-10 col-span-full">
          <div className="flex items-center justify-center">
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              <FaChevronLeft />
            </button>
            {[0, 1, 2, 3, 4]?.map((index) => {
              return (
                <button
                  key={index}
                  className={`w-[40px] h-[40px] flex items-center justify-center border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green ${
                    index === 0 ? "bg-green text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      <DeleteModal id={cardId} />
      <CreateJobModal id="CreateJobModal" />
      <UpdateJobModal id={updateCardId} />
    </main>
  );
};

export default RecruitorJobs;
