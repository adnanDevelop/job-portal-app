interface ModalProps {
  children: React.ReactNode;
  className?: string;
  id: string;
}
const Modal = ({ children, className, id }: ModalProps) => {
  return (
    <dialog id={id} className={`modal ${className} p-0`}>
      <div className="w-11/12 max-w-5xl p-0 modal-box bg-light-blue">
        {/* <form method="dialog">
          <button className="absolute text-white btn btn-sm btn-circle btn-ghost hover:rotate-[360deg] right-2 top-2">
            ✕
          </button>
        </form> */}
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
