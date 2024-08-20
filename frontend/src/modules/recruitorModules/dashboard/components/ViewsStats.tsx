const ViewsStats = () => {
  return (
    <section className="grid w-full grid-cols-2 p-4 rounded-md gap- bg-light-blue">
      {/* Interview section */}
      <div className="flex items-center justify-between pb-3 border-b border-r border-gray-700 ">
        {/* Graph */}
        <div>
          <h3 className="text-white font-poppin text-[30px] font-semibold flex items-center gap-x-4">
            342{" "}
            <span className="px-2 py-1 text-[10px] rounded-lg bg-[#2adb7a79]">
              +0.5%
            </span>
          </h3>
          <p className="text-sm font-poppin text-slate">Interview Schedules</p>
        </div>
        {/* Graph */}
        <div></div>
      </div>

      {/* Application section */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-700 ps-3 ">
        {/* Graph */}
        <div>
          <h3 className="text-white font-poppin text-[30px] font-semibold">
            984{" "}
          </h3>
          <p className="text-sm font-poppin text-slate">Application Received</p>
        </div>
        {/* Graph */}
        <div></div>
      </div>

      {/* Profile viewd section */}
      <div className="flex items-center justify-between pt-3 border-r border-gray-700 ">
        {/* Graph */}
        <div>
          <h3 className="text-white font-poppin text-[30px] font-semibold">
            2000k{" "}
          </h3>
          <p className="text-sm font-poppin text-slate">Profile viewed</p>
        </div>
        {/* Graph */}
        <div></div>
      </div>

      {/* Unread section */}
      <div className="flex items-center justify-between pt-3 ps-3">
        {/* Graph */}
        <div>
          <h3 className="text-white font-poppin text-[30px] font-semibold">
            437
          </h3>
          <p className="text-sm font-poppin text-slate">Unread Messages</p>
        </div>
        {/* Graph */}
        <div></div>
      </div>
    </section>
  );
};

export default ViewsStats;
