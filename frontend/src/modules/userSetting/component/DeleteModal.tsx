import { toast } from "react-toastify";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../components/ui/toast/Modal";
import { logout } from "../../../redux/slices/authSlice";

// Icons
import { GoAlertFill } from "react-icons/go";
import { userApiEndPoint } from "../../../utils/apiEndPoints";

const DeleteModal = ({ id }: { id: string }) => {
  const { user } = useSelector((state: RootState) => state.auth);

  const disptach = useDispatch();
  const closeModal = () => {
    const modal = document.getElementById(
      "DeleteAccountModal"
    ) as HTMLDialogElement | null;
    if (modal) modal.close();
  };

  const deleteAccount = async () => {
    try {
      const deleteUser = await fetch(`${userApiEndPoint}/delete/${user._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (deleteUser.ok) {
        const response = await deleteUser.json();
        disptach(logout());
        closeModal();
        toast.success(response.message);
      }
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
          Delete Account
        </h3>
        <p className="mt-3 leading-5 text-white">
          You&apos;re going to delete your account. Are you sure?
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
            onClick={deleteAccount}
          >
            Yes, Delete it!
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
