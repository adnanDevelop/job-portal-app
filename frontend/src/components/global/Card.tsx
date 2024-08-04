interface IProps {
  title: string;
  jobs: string;
  icon: JSX.Element;
}

const Card = ({ title, jobs, icon }: IProps) => {
  return (
    <div className="py-[50px] px-2 rounded-md flex flex-col items-center justify-center w-full group shadow-gray-800 shadow transitions hover:bg-[#0596681e] border border-gray-700 hover:border-[#0596681e]">
      <div className="w-[60px] h-[65px] rounded-md bg-[#0596681e] text-green transitions group-hover:bg-green group-hover:text-white text-[28px] flex items-center justify-center shadow-gray-700 shadow">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-medium text-center text-white font-jakarta">
        {title}
      </h3>
      <p className="mt-2 text-base text-slate font-poppin ">{jobs}</p>
    </div>
  );
};

export default Card;
