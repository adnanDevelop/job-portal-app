import { useNavigate } from "react-router-dom";
import { columnDef } from "../components/ColumnDef";
import Table from "../../../../components/global/Table";

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
