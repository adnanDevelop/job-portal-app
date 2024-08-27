import { IoLocation } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
const RecruitorJobCard = ({
  data,
  deleteJob,
}: {
  data: {
    company: { logo: string; companyName: string };
    title: string;
    location: string;
    salary: string;
    _id: string;
  };
  deleteJob: (id: string) => void;
}) => {
  return (
    <div className="p-4 pt-4 border border-gray-700 rounded-md bg-light-blue py-7">
      <div className="flex justify-end gap-2 mb-4">
        <button className="w-[30px] h-[30px] rounded-md bg-green focus:bg-[#23755b] text-white flex items-center justify-center">
          {" "}
          <HiOutlinePencilSquare className="text-base text-white" />
        </button>
        <button
          className="w-[30px] h-[30px] rounded-md bg-red-500 focus:bg-red-700 text-white flex items-center justify-center"
          onClick={() => {
            deleteJob(data?._id);
            const element = document.getElementById(
              data?._id
            ) as HTMLDialogElement;
            if (element) {
              element.showModal();
            }
          }}
        >
          {" "}
          <RiDeleteBinLine className="text-white" />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <div>
          <div className="w-[60px] h-[60px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
            <img
              src={data.company.logo}
              className="w-[35px] rounded-full"
              alt=""
            />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-base font-medium text-white capitalize font-jakarta">
            {data.title}
          </h4>
          <p className="text-xs text-red-500 font-jakarta">
            {data.company.companyName}
          </p>
          <div className="flex flex-col items-center justify-center gap-1 mt-2">
            <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
              <IoLocation /> {data.location}
            </p>
            <p className="flex items-center gap-1 text-xs text-slate font-jakarta">
              {data.salary} PKR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitorJobCard;
