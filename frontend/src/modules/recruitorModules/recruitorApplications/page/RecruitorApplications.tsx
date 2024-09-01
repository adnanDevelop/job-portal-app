import { useState } from "react";
import DeleteApplicationModal from "../components/DeleteApplicationModal";
import UpdateApplicationModal from "../components/UpdateApplicationModal";

// Apis
import { useListAllApplicationDataQuery } from "../../../../redux/features/applyJobApi";

// Icons
import { FaSearch } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

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
  const { user } = useSelector((state: RootState) => state.auth);
  const [cardId, setCardId] = useState<string>("");
  const [updateCardId, setUpdateCardId] = useState<string>("");
  const { data: appData } = useListAllApplicationDataQuery({});

  const filterNullApplicants = appData?.data?.filter(
    (element: { job: { createdBy: string } }) =>
      element.job !== null && element.job.createdBy === user._id
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
        {filterNullApplicants?.length > 0 ? (
          filterNullApplicants?.map(
            (element: applicationType, index: number) => {
              let badgeColor = "";

              // Use a switch statement to set the badgeColor based on the application status
              switch (element.status) {
                case "accepted":
                  badgeColor = "bg-green text-white";
                  break;
                case "rejected":
                  badgeColor = "bg-red-500 text-white";
                  break;
                case "pending":
                  badgeColor = "bg-gray-700 text-slate";
                  break;
                default:
                  badgeColor = "bg-gray-700 text-slate"; // Default color if status doesn't match any case
              }
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
                          <span
                            className={`capitalize w-[90px] mt-1 mx-auto leading-none px-[10px] h-[25px] flex items-center justify-center rounded-full  ${badgeColor}`}
                          >
                            {element?.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <h3 className="flex items-center justify-center text-lg font-medium text-white font-poppin col-span-full h-[40vh]">
            You don't have any company yet
          </h3>
        )}
      </div>

      {/* Modals */}
      <DeleteApplicationModal id={cardId} />
      <UpdateApplicationModal id={updateCardId} />
    </div>
  );
};

export default RecruitorApplications;
