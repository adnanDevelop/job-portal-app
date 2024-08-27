import {
  ColumnDef,
  useReactTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
// components

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading?: boolean;
  rowCount?: number;
  selection: boolean;
}

function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  rowCount,
}: Props<TData, TValue>) {
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    rowCount: rowCount,
  });

  return (
    <div className="min-h-full overflow-x-scroll overflow-y-hidden no-scrollbar">
      {/* data table */}
      <table
        className={`table border-separate border-spacing-x-0 border-spacing-y-3 ${
          data?.length < 0 || !isLoading
            ? "[&>thead>tr>*:first-child]:px-5 [&>tbody>tr>*:first-child]:border-l-2 [&>tbody>tr>*:first-child]:border-green"
            : ""
        }`}
      >
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="px-1 h-[41px]">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    className="py-4 text-base font-semibold text-white border-b-2 font-poppins border-green bg-light-blue "
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="border-none">
              <td colSpan={12}>
                <div className="w-full h-[35vh] flex flex-col items-center justify-center">
                  <span className="loading loading-dots loading-lg bg-green"></span>
                </div>
              </td>
            </tr>
          ) : table.getRowModel()?.rows?.length > 0 ? (
            table?.getRowModel()?.rows?.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="px-1 transitions hover:bg-light-blue cursor-pointer h-[60px]"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-slate text-[15px] font-jakarta font-medium"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="">
              <td
                colSpan={columns.length}
                className="text-center text-gray-300"
              >
                <p className="md:text-[30px] text-[20px] flex flex-col items-center justify-center md:gap-[20px] gap-[10px] md:h-[35vh] h-[30vh]">
                  <svg
                    className="md:w-[80px] w-[60px]"
                    viewBox="0 0 100 100"
                    fill="#D1D5DB"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_2965_46532)">
                      <path d="M84.375 36.75C82.625 36.75 81.25 35.375 81.25 33.625V9.375C81.25 7.625 79.875 6.25 78.125 6.25H21.875C20.125 6.25 18.75 7.625 18.75 9.375V21.875C18.75 23.625 17.375 25 15.625 25C13.875 25 12.5 23.625 12.5 21.875V9.375C12.5 4.1875 16.6875 0 21.875 0H78.125C83.3125 0 87.5 4.1875 87.5 9.375V33.625C87.5 35.375 86.125 36.75 84.375 36.75Z" />
                      <path d="M90.625 100H9.375C4.1875 100 0 95.8125 0 90.625V28.125C0 22.9375 4.1875 18.75 9.375 18.75H39.0625C40.0625 18.75 41 19.1875 41.5625 20L50 31.25H90.625C95.8125 31.25 100 35.4375 100 40.625V90.625C100 95.8125 95.8125 100 90.625 100ZM9.375 25C7.625 25 6.25 26.375 6.25 28.125V90.625C6.25 92.375 7.625 93.75 9.375 93.75H90.625C92.375 93.75 93.75 92.375 93.75 90.625V40.625C93.75 38.875 92.375 37.5 90.625 37.5H48.4375C47.9506 37.5102 47.4686 37.4017 47.033 37.1839C46.5975 36.9662 46.2215 36.6456 45.9375 36.25L37.5 25H9.375Z" />
                      <rect x="18.75" y="75" width="50" height="6.25" rx="2" />
                      <rect
                        x="18.75"
                        y="62.5"
                        width="31.25"
                        height="6.25"
                        rx="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2965_46532">
                        <rect width="100" height="100" />
                      </clipPath>
                    </defs>
                  </svg>
                  No data to display
                </p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {/* pagination */}
    </div>
  );
}
export default DataTable;
