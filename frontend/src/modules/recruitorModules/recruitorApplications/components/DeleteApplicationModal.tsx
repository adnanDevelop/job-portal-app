import { toast } from "react-toastify";
import Modal from "../../../../components/ui/toast/Modal";

// Api
import { useDeleteApplicationMutation } from "../../../../redux/features/applyJobApi";

// Icons
import { GoAlertFill } from "react-icons/go";
const DeleteApplicationModal = ({ id }: { id: string }) => {
  const [deleteApplication] = useDeleteApplicationMutation();

  const deleteJobFunction = async (id: string) => {
    try {
      await deleteApplication(id)
        .unwrap()
        .then((response) => {
          toast.success(response.message);
          // Close accordion
          const element = document.getElementById(id) as HTMLDialogElement;
          if (element) {
            element.close();
          }
        })
        .catch((e) => {
          console.log(e, "Error while deleting job");
          toast.error(e.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] text-center bg-light-blue">
        <div className="w-[70px] h-[70px] mx-auto rounded-full grid place-items-center bg-red-100">
          <GoAlertFill className="text-[30px] text-red-500" />
        </div>
        <h3 className="text-lg font-bold text-center text-[30px] text-white mt-4">
          Delete Job
        </h3>
        <p className="mt-3 leading-5 text-slate">
          Are you sure, you want to delete this job?
        </p>
        <div className="flex items-center justify-center w-full modal-action">
          <button
            className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-content-color font-medium transitions hover:scale-105 text-sm"
            onClick={() => {
              const element = document.getElementById(id) as HTMLDialogElement;
              if (element) {
                element.close();
              }
            }}
          >
            No, Keep it.
          </button>
          <button
            type="submit"
            className="px-[30px] h-[40px] rounded-lg bg-red-500 text-white font-medium transitions hover:scale-105 text-sm"
            onClick={() => {
              deleteJobFunction(id);
            }}
          >
            Yes, Delete it!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteApplicationModal;
