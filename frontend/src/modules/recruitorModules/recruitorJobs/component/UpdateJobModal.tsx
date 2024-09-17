import Modal from "../../../../components/ui/toast/Modal";

import { useForm } from "react-hook-form";
import { ICreateJobProps } from "../type";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

// Apis
import { useListCompaniesQuery } from "../../../../redux/features/companyApi";
import {
  useUpdateJobMutation,
  useGetJobByIdQuery,
} from "../../../../redux/features/jobApi";
import { toast } from "react-toastify";

const UpdateJobModal = ({ id }: { id: string }) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateJobProps>();

  const [updateJob] = useUpdateJobMutation();
  const { data: companyData } = useListCompaniesQuery({});
  const { data: jobData } = useGetJobByIdQuery({ id });

  // Filter companies based on userId
  const filterCompanies = companyData?.data.filter(
    (item: { userId: string }) => item.userId === user?._id
  );

  const submiData = async (data: ICreateJobProps) => {
    try {
      await updateJob({ id, body: data })
        .unwrap()
        .then((response) => {
          toast.success(response.message);
          reset();
          // Close accordion
          const element = document.getElementById(id) as HTMLDialogElement;
          if (element) {
            element.close();
          }
        })
        .catch((e) => {
          console.log(e, "error at record");
          toast.error(e.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal id={id}>
      <div className=" modal-box max-w-[600px] bg-light-blue">
        <h3 className="font-jakarta text-white font-bold text-center text-[25px] text-heading-color ">
          Update <span className="text-green">Job</span>
        </h3>

        <form
          className="grid w-full sm:grid-cols-2 grid-cols-1 gap-2.5 mt-4"
          onSubmit={handleSubmit(submiData)}
        >
          {/* title input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Title:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.title}
              {...register("title", {
                required: "Job title is required",
              })}
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Employment type input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Employment Type:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.employmentType}
              {...register("employmentType", {
                required: "Employment type is required",
              })}
            >
              <option className="text-black" value="Permanent">
                Permanent
              </option>
              <option className="text-black" value="Temporary">
                Temporary
              </option>
            </select>
            {errors.employmentType && (
              <p className="mt-1 text-xs text-red-500">
                {errors.employmentType.message}
              </p>
            )}
          </div>

          {/* requirement input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Requirement:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Html,Css,Javascript"
              defaultValue={jobData?.data.requirements}
              {...register("requirements", {
                required: "Requirement is required",
              })}
            />
            {errors.requirements && (
              <p className="mt-1 text-xs text-red-500">
                {errors.requirements.message}
              </p>
            )}
          </div>

          {/* Positions input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Positions:
            </label>
            <input
              type="number"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.positions}
              {...register("positions", {
                required: "Position is required",
              })}
            />
            {errors.positions && (
              <p className="mt-1 text-xs text-red-500">
                {errors.positions.message}
              </p>
            )}
          </div>

          {/* category input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Category:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.category}
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option className="text-black" value="Graphic Design">
                Graphic Design
              </option>
              <option className="text-black" value="Web Developer">
                Web Developer
              </option>
              <option className="text-black" value="App Developer">
                App Developer
              </option>
              <option className="text-black" value="UI / UX Designer">
                UI / UX Designer
              </option>
              <option className="text-black" value="Video Editor">
                Video Editor
              </option>
              <option className="text-black" value="Content Creator">
                Content Creator
              </option>
              <option className="text-black" value="Blockchain Developer">
                Blockchain Developer
              </option>
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* location input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Location:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.location}
              {...register("location", {
                required: "Location is required",
              })}
            >
              <option className="text-black" value="Islamabad">
                Islamabad
              </option>
              <option className="text-black" value="Lahore">
                Lahore
              </option>
              <option className="text-black" value="Karachi">
                Karachi
              </option>
              <option className="text-black" value="Peshawar">
                Peshawar
              </option>
              <option className="text-black" value="Faisalabad">
                Faisalabad
              </option>
              <option className="text-black" value="Rawalpindi">
                Rawalpindi
              </option>
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* address input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Address:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.address}
              {...register("address", {
                required: "Address is required",
              })}
            />
            {errors.address && (
              <p className="mt-1 text-xs text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Job type input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Job Type:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.jobType}
              {...register("jobType", {
                required: "Job Type is required",
              })}
            >
              <option className="text-black" value="Full Time">
                Full Time
              </option>
              <option className="text-black" value="Part Time">
                Part Time
              </option>
              <option className="text-black" value="Freelance">
                Freelance
              </option>
              <option className="text-black" value="Remote">
                Remote
              </option>
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Experience input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Experience:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="1 year"
              defaultValue={jobData?.data.experience}
              {...register("experience", {
                required: "Experience is required",
              })}
            />
            {errors.experience && (
              <p className="mt-1 text-xs text-red-500">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Qualification input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Qualification:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="BSCS"
              defaultValue={jobData?.data.qualification}
              {...register("qualification", {
                required: "Qualification is required",
              })}
            />
            {errors.qualification && (
              <p className="mt-1 text-xs text-red-500">
                {errors.qualification.message}
              </p>
            )}
          </div>

          {/* Salary input */}
          <div className="mb-2 ">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Salary:
            </label>
            <input
              type="number"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="50000 PKR"
              defaultValue={jobData?.data.salary}
              {...register("salary", {
                required: "Salary is required",
              })}
            />
            {errors.salary && (
              <p className="mt-1 text-xs text-red-500">
                {errors.salary.message}
              </p>
            )}
          </div>

          {/* Company Options */}
          <div className="mb-2 ">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Select company:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={jobData?.data.company}
              {...register("company", {
                required: "Company is required",
              })}
            >
              {filterCompanies?.map(
                (
                  element: { companyName: string; _id: string },
                  index: number
                ) => {
                  return (
                    <option
                      key={index}
                      className="text-black"
                      value={element?._id}
                    >
                      {element?.companyName}
                    </option>
                  );
                }
              )}
            </select>
            {errors.company && (
              <p className="mt-1 text-xs text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="col-span-full">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Description:
            </label>
            <textarea
              className="resize-none mt-1 w-full h-[150px] text-xs p-1.5 text-slate rounded-md border border-[#94a3b857] bg-transparent focus:outline-none focus:border-green"
              defaultValue={jobData?.data.description}
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-center w-full modal-action col-span-full">
            <button
              className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-content-color font-medium transitions hover:scale-105 text-sm"
              onClick={() => {
                const element = document.getElementById(
                  id
                ) as HTMLDialogElement;
                if (element) {
                  element.close();
                }
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[30px] h-[40px] rounded-lg bg-green text-white font-medium transitions hover:scale-105 text-sm"
            >
              Update Job
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateJobModal;
