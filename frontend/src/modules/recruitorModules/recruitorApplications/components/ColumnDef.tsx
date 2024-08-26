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
      cell: ({ row }: { row: { original: { createdAt: string } } }) => {
        return <p>{row?.original?.createdAt}</p>;
      },
    },
    {
      accessorKey: "position",
      header: "Position",
      cell: ({ row }: { row: { original: { job: { title: string } } } }) => {
        return <p>{row?.original?.job?.title}</p>;
      },
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: ({
        row,
      }: {
        row: { row: { original: { applicant: { fullName: string } } } };
      }) => {
        return <p>{row?.row?.original?.applicant?.fullName}</p>;
      },
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (row: {
        row: { row: { original: { applicant: { email: string } } } };
      }) => {
        return <p>{row?.row?.original?.applicant?.email}</p>;
      },
    },
    {
      accessorKey: "resume",
      header: "Resume",
      cell: (row: {
        row: {
          original: { applicant: { profile: { resumeOriginalName: string } } };
        };
      }) => {
        return (
          <p>{row?.row?.original?.applicant?.profile?.resumeOriginalName}</p>
        );
      },
    },
    {
      accessorKey: "jobType",
      header: "Job Type",
      cell: (row: { row: { original: { job: { jobType: string } } } }) => {
        return <p>{row?.row?.original?.job?.jobType}</p>;
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: (row: { row: { original: { status: string } } }) => {
        console.log(row?.row?.original?.status);

        return <p>{row?.row?.original?.status}</p>;
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
