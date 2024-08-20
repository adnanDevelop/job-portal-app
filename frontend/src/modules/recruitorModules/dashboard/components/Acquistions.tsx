const Acquistions = () => {
  return (
    <section className="p-4 rounded-md bg-light-blue">
      <h3 className="text-lg font-medium text-white font-poppin">
        Acquistions
      </h3>

      {/* Progress bar */}
      <div className="pb-2 mt-8 ">
        {/* application Progress */}
        <div className="flex items-center justify-between pb-4 border-b border-b-gray-700">
          <h4 className="flex items-center gap-2 text-sm text-[#94a3b8] font-poppin">
            <span className="w-[10px] h-[10px] rounded-full bg-purple-700 block"></span>
            Applications
          </h4>
          <div className="flex items-center gap-2">
            <div className="w-[90px] h-[5px] bg-slate rounded-full">
              <div className="w-[80%] h-full bg-purple-700 rounded-full"></div>
            </div>
            <p className="text-[11px] font-jakarta text-slate">80%</p>
          </div>
        </div>

        {/* On hold Progress */}
        <div className="flex items-center justify-between py-4 border-b border-b-gray-700">
          <h4 className="flex items-center gap-2 text-sm text-[#94a3b8] font-poppin">
            <span className="w-[10px] h-[10px] rounded-full bg-slate block"></span>
            On Hold
          </h4>
          <div className="flex items-center gap-2">
            <div className="w-[90px] h-[5px] bg-[#94a3b83f] rounded-full">
              <div className="w-[95%] h-full bg-[#94a3b8] rounded-full"></div>
            </div>
            <p className="text-[11px] font-jakarta text-slate">95%</p>
          </div>
        </div>

        {/* Shortlisted Progress */}
        <div className="flex items-center justify-between py-4 border-b border-b-gray-700">
          <h4 className="flex items-center gap-2 text-sm text-[#94a3b8] font-poppin">
            <span className="w-[10px] h-[10px] rounded-full bg-yellow-500 block"></span>
            Shortlisted
          </h4>
          <div className="flex items-center gap-2">
            <div className="w-[90px] h-[5px] bg-[#94a3b83f] rounded-full">
              <div className="w-[55%] h-full bg-yellow-500 rounded-full"></div>
            </div>
            <p className="text-[11px] font-jakarta text-slate">55%</p>
          </div>
        </div>

        {/* Accepted Progress */}
        <div className="flex items-center justify-between py-4 border-b border-b-gray-700">
          <h4 className="flex items-center gap-2 text-sm text-slate font-poppin">
            <span className="w-[10px] h-[10px] rounded-full bg-green block"></span>
            Accepted
          </h4>
          <div className="flex items-center gap-2">
            <div className="w-[90px] h-[5px] bg-[#94a3b8] rounded-full">
              <div className="w-[33%] h-full bg-green rounded-full"></div>
            </div>
            <p className="text-[11px] font-jakarta text-slate">33%</p>
          </div>
        </div>

        {/* Rejected Progress */}
        <div className="flex items-center justify-between py-4">
          <h4 className="flex items-center gap-2 text-sm text-slate font-poppin">
            <span className="w-[10px] h-[10px] rounded-full bg-red-500 block"></span>
            Rejected
          </h4>
          <div className="flex items-center gap-2">
            <div className="w-[90px] h-[5px] bg-[#94a3b8] rounded-full">
              <div className="w-[70%] h-full bg-red-500 rounded-full"></div>
            </div>
            <p className="text-[11px] font-jakarta text-slate">70%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Acquistions;
