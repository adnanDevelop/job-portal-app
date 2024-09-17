interface Action {
  label: string;
  icon: React.ReactNode;
  onClick: (row: { id: string }) => void;
}

export const columnDef = (actions: Action[]) => {
  return [
    {
      accessorKey: "date",
      header: "Date",
      cell: ({ row }: any) => {
        return <p>{row?.original?.createdAt}</p>;
      },
    },
    {
      accessorKey: "title",
      header: "Position",
      cell: ({ row }: { row: { original: { job: { title: string } } } }) => {
        return <p>{row?.original?.job?.title}</p>;
      },
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: ({ row }: any) => {
        return (
          <p className="capitalize">{row?.original?.applicant?.fullName}</p>
        );
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }: any) => {
        return <p>{row?.original?.applicant?.email}</p>;
      },
    },
    {
      accessorKey: "resumeOriginalName",
      header: "Resume",
      cell: ({ row }: any) => {
        return (
          <p>
            {row?.original?.applicant?.profile?.resumeOriginalName ||
              "Resume Link"}
          </p>
        );
      },
    },
    {
      accessorKey: "jobType",
      header: "Job Type",
      cell: ({ row }: any) => {
        return <p>{row?.original?.job?.jobType}</p>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }: any) => {
        return <p className="capitalize">{row?.original?.status}</p>;
      },
    },
    {
      id: "actions",
      header: "Actions",
      cell: (row: { original: never }) => {
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
