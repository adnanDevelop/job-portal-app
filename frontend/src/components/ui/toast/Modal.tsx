const Modal = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <dialog id={id} className={`modal `}>
      {children}
    </dialog>
  );
};

export default Modal;
