import { toast } from "react-toastify";
import Modal from "../../../../components/ui/toast/Modal";

// Icons
import { GoAlertFill } from "react-icons/go";

// Api
import { useDeleteBlogMutation } from "../../../../redux/features/blogApi";

const DeleteBlogModal = ({ id }: { id: string }) => {
  const [deleteBlog] = useDeleteBlogMutation();

  const closeModal = () => {
    const modal = document.getElementById(id) as HTMLDialogElement | null;
    if (modal) modal.close();
  };

  const deleteBlogFunction = async (id: string) => {
    try {
      await deleteBlog(id)
        .unwrap()
        .then(() => {
          toast.success("Company deleted successfully");
          const element = document.getElementById(id) as HTMLDialogElement;
          if (element) {
            element.close();
          }
        })
        .catch((e) => {
          toast.error(e.data.message);
          console.log(e, "Error while deleting company");
        });
    } catch (error) {
      console.log("Error while deleting account", error);
    }
  };

  return (
    <Modal id={id}>
      <div className="modal-box w-[400px] text-center bg-light-blue">
        <div className="w-[70px] h-[70px] mx-auto rounded-full grid place-items-center bg-red-100">
          <GoAlertFill className="text-[30px] text-red-500" />
        </div>
        <h3 className=" font-bold text-center text-[25px] text-white mt-4">
          Delete Blog
        </h3>
        <p className="mt-3 leading-5 text-white">
          You&apos;re going to delete this Blog. Are you sure?
        </p>
        <div className="flex items-center justify-center w-full modal-action">
          <button
            className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-black font-medium font-jakarta transitions hover:scale-105 text-sm"
            onClick={closeModal}
          >
            No, Keep it.
          </button>
          <button
            type="submit"
            className="px-[30px] h-[40px] rounded-lg bg-red-500 text-white font-jakarta font-medium transitions hover:scale-105 text-sm"
            onClick={() => deleteBlogFunction(id)}
          >
            Yes, Delete it!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteBlogModal;
