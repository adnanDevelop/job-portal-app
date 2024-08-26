interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: (row: any) => void;
}

export const columnDef = (actions: Action[]) => {
  return [
    {
      accessorKey: "date",
      header: "Date",
      cell: (row: { row: { original: { date: string } } }) => {
        return <p>{row?.row?.original?.date}</p>;
      },
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: (row: { row: { original: { position: string } } }) => {
        return <p>{row?.row?.original?.position}</p>;
      },
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: (row: { row: { original: { fullName: string } } }) => {
        return <p>{row?.row?.original?.fullName}</p>;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (row: { row: { original: { email: string } } }) => {
        return <p>{row?.row?.original?.email}</p>;
      },
    },
    {
      accessorKey: "resume",
      header: "Resume",
      cell: (row: { row: { original: { resume: string } } }) => {
        return <p>{row?.row?.original?.resume}</p>;
      },
    },
    {
      accessorKey: "jobType",
      header: "Job Type",
      cell: (row: { row: { original: { jobType: string } } }) => {
        return <p>{row?.row?.original?.jobType}</p>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (row: { row: { original: { jobStatus: string } } }) => {
        return <p>{row?.row?.original?.jobStatus}</p>;
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: (row: { original: any }) => {
        return (
          <div className="flex gap-1">
            {actions?.map(
              (
                action: {
                  label: string;
                  icon: React.ReactNode;
                  onClick: (row: any) => void;
                },
                index
              ) => {
                return (
                  <div
                    className={`cursor-pointer`}
                    onClick={() => action.onClick(row.original)}
                    key={index}
                  >
                    <div>{action.icon}</div>
                  </div>
                );
              }
            )}
          </div>
        );
      },
    },
  ];
};
