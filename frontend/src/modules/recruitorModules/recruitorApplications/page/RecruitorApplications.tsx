// Apis
import { useListAllApplicationDataQuery } from "../../../../redux/features/applyJobApi";

// Icons
import { FaSearch } from "react-icons/fa";
import DeleteApplicationModal from "../components/DeleteApplicationModal";
import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { RiDeleteBinLine } from "react-icons/ri";
import UpdateApplicationModal from "../components/UpdateApplicationModal";

// types
interface applicationType {
  _id: string;
  status: string;
  job: {
    title: string;
  };
  applicant: { fullName: string; profile: { profilePhoto: string } };
}

const RecruitorApplications = () => {
  const [cardId, setCardId] = useState<string>("");
  const [updateCardId, setUpdateCardId] = useState<string>("");
  const { data: appData } = useListAllApplicationDataQuery({});

  const filterNullApplicants = appData?.data?.filter(
    (element: { job: never }) => element.job !== null
  );

  const deleteApplication = (id: string) => {
    setCardId(id);
    const deleteModalElement = document.getElementById(id);
    if (deleteModalElement) {
      (deleteModalElement as HTMLDialogElement).showModal();
    }
  };

  return (
    <div className={`${filterNullApplicants?.length <= 8 ? "h-[80vh]" : null}`}>
      {/* Search bar */}
      <div className="max-w-[300px] h-[40px] relative rounded-full bg-light-blue text-slate ms-auto my-[30px]">
        <input
          type="text"
          className="w-full h-[40px] placeholder:text-xs focus:outline-none rounded-full bg-light-blue ps-4 pe-11 text-xs"
          placeholder="Search here..."
        />

        <button className="w-[30px] h-[30px] rounded-full bg-green absolute top-[50%] translate-y-[-50%] right-1.5 flex items-center justify-center text-[13px] text-white">
          <FaSearch />
        </button>
      </div>

      {/* Application list */}
      <div className="grid grid-cols-12 gap-4">
        {filterNullApplicants?.map(
          (element: applicationType, index: number) => {
            return (
              <div
                key={index}
                className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full"
              >
                <div className="p-4 pt-4 border border-gray-700 rounded-md bg-light-blue py-7">
                  {/* Buttons */}
                  <div className="flex justify-end gap-2 mb-4">
                    {/* Update button */}
                    <button
                      onClick={() => {
                        setUpdateCardId(element._id);
                        const deleteModalElement = document.getElementById(
                          element?._id
                        );
                        if (deleteModalElement) {
                          (deleteModalElement as HTMLDialogElement).showModal();
                        }
                      }}
                      className="w-[30px] h-[30px] rounded-md bg-green focus:bg-[#23755b] text-white flex items-center justify-center"
                    >
                      {" "}
                      <HiOutlinePencilSquare className="text-base text-white" />
                    </button>
                    {/* Delete button */}
                    <button
                      onClick={() => deleteApplication(element._id)}
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
                          src={element?.applicant?.profile?.profilePhoto}
                          className="w-[40px] rounded-full"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="flex flex-col text-base font-medium capitalize font-jakarta">
                        <span className="text-red-500">Name:</span>{" "}
                        <span className="text-slate">
                          {element?.applicant?.fullName}
                        </span>
                      </h4>
                      <p className="flex flex-col text-xs text-red-500 font-jakarta">
                        <span>Job:</span>{" "}
                        <span className="text-slate">
                          {element?.job?.title}
                        </span>
                      </p>
                      <p className="flex flex-col text-xs text-red-500 font-jakarta">
                        <span>Status:</span>{" "}
                        <span className="capitalize text-slate">
                          {element?.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>

      {/* Modals */}
      <DeleteApplicationModal id={cardId} />
      <UpdateApplicationModal id={updateCardId} />
    </div>
  );
};

export default RecruitorApplications;
