import { BiDotsVerticalRounded } from "react-icons/bi";
const ViewsStats = () => {
  const content = [
    { title: "Total Applications", value: 1250, progressValue: 70 },
    { title: "Shortlisted Candidates", value: 200, progressValue: 60 },
    { title: "Rejected Candidates", value: 450, progressValue: 35 },
  ];

  return (
    <section className="grid w-full grid-cols-12 gap-6">
      {content?.map((element, index) => {
        return (
          <div
            key={index}
            className="p-4 rounded-md md:col-span-6 col-span-full lg:col-span-4 bg-light-blue"
          >
            <div className="flex justify-end text-[20px] text-slate cursor-pointer">
              <BiDotsVerticalRounded />
            </div>
            <div className="flex items-center justify-between mt-3">
              {/* Content */}
              <div>
                <p className="text-sm text-slate font-jakarta">
                  {element?.title}
                </p>
                <h3 className="text-white text-[30px] font-bold font-jakarta">
                  {element.value}
                </h3>
              </div>
              {/* Progress bar */}
              <div
                className={`radial-progress text-green ${
                  element.progressValue > 60
                    ? "text-green"
                    : element.progressValue > 50
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
                style={{ "--value": element.progressValue } as never}
                role="progressbar"
              >
                {element.progressValue}%
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ViewsStats;
