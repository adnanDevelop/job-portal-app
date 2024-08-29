import { toast } from "react-toastify";
import Modal from "../../../../components/ui/toast/Modal";

import { useForm } from "react-hook-form";

// Redux

// Apis
import {
  useListApplicationByIdQuery,
  useUpdateApplicationStatusMutation,
} from "../../../../redux/features/applyJobApi";
interface IUpdateStatus {
  status: string;
}

const UpdateApplicationModal = ({ id }: { id: string }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateStatus>();

  const [updateStatus] = useUpdateApplicationStatusMutation();
  const { data: applicationData } = useListApplicationByIdQuery({ id });
  console.log(applicationData?.data);

  const submiData = async (data: IUpdateStatus) => {
    try {
      await updateStatus({ id, body: data })
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
          {/* Employment type input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Employment Type:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={applicationData?.data?.status}
              {...register("status", {
                required: "Status is required",
              })}
            >
              <option className="text-black" value="Peding">
                Peding
              </option>
              <option className="text-black" value="Accepted">
                Accepted
              </option>
              <option className="text-black" value="Rejected">
                Rejected
              </option>
            </select>
            {errors.status && (
              <p className="mt-1 text-xs text-red-500">
                {errors.status.message}
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

export default UpdateApplicationModal;
