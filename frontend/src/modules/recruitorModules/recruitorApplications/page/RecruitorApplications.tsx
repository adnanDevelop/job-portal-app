import { useNavigate } from "react-router-dom";
import { columnDef } from "../components/ColumnDef";
import Table from "../../../../components/global/Table";

import { FaSearch } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

// Apis
import { useListAllApplicationDataQuery } from "../../../../redux/features/applyJobApi";

const RecruitorApplications = () => {
  const navigate = useNavigate();

  const { data: appData, isLoading } = useListAllApplicationDataQuery({});

  // actions
  const actions = [
    {
      label: "Edit",
      icon: <MdEdit size={24} className="text-green" />,
      onClick: (row: { id: string }) => {
        navigate(`${row.id}`);
      },
    },
    {
      label: "Delete",
      icon: <MdDelete size={24} className="text-red-500" />,
      onClick: () => {},
    },
  ];

  const filterNullApplicants = appData?.data?.filter(
    (element: { job: never }) => element.job !== null
  );

  return (
    <div
      className={`${filterNullApplicants?.length <= 8 ? "pb-[200px]" : null}`}
    >
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
      <div>
        <Table
          isLoading={isLoading}
          data={filterNullApplicants || []}
          columns={columnDef(actions)}
        />
      </div>
    </div>
  );
};

export default RecruitorApplications;
