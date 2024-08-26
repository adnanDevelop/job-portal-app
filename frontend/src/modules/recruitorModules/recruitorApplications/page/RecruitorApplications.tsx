import { useNavigate } from "react-router-dom";
import { columnDef } from "../components/ColumnDef";
import Table from "../../../../components/global/Table";

import { FaSearch } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
const RecruitorApplications = () => {
  const navigate = useNavigate();
  const appDlicationData = [
    {
      id: 0,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Pending",
    },
    {
      id: 2,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Rejected",
    },
    {
      id: 3,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Accepted",
    },
    {
      id: 3,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Accepted",
    },
    {
      id: 3,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Accepted",
    },
    {
      id: 3,
      position: "Frontend Developer",
      jobType: "Full Time",
      fullName: "Adnan Tariq",
      email: "adnan@goMarkho.com",
      resume: "Adnan Resume.pdf",
      date: "15-7-2002",
      jobStatus: "Accepted",
    },
  ];

  // actions
  const actions = [
    {
      label: "Edit",
      icon: (
        <MdEdit size={24} className="text-slate transitions hover:text-green" />
      ),
      onClick: (row: { id: string }) => {
        navigate(`${row.id}`);
      },
    },
    {
      label: "Delete",
      icon: (
        <MdDelete
          size={24}
          className="text-slate transitions hover:text-green"
        />
      ),
      onClick: () => {},
    },
  ];

  return (
    <div>
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
          data={appDlicationData}
          rowCount={0}
          selection={true}
          isLoading={false}
          columns={columnDef(actions)}
        />
      </div>
    </div>
  );
};

export default RecruitorApplications;
