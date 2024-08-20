import { BiDotsVerticalRounded } from "react-icons/bi";

const NetworkStat = () => {
  const content = [
    {
      title: "Designing",
      vacancy: 14,
      percentage: 60,
    },
    {
      title: "Web Development",
      vacancy: 8,
      percentage: 50,
    },
    {
      title: "App Development",
      vacancy: 5,
      percentage: 90,
    },
    {
      title: "UI / UX Design",
      vacancy: 15,
      percentage: 45,
    },
    {
      title: "Video Editor",
      vacancy: 4,
      percentage: 95,
    },
    {
      title: "Content Creator",
      vacancy: 9,
      percentage: 85,
    },
    {
      title: "Blockchain Development",
      vacancy: 12,
      percentage: 30,
    },
  ];

  return (
    <section className="p-4 pb-6 rounded-md bg-light-blue">
      <div className="flex justify-between text-[20px] text-slate cursor-pointer mb-10">
        <h3 className="text-lg font-medium text-white font-poppin">Network</h3>
        <BiDotsVerticalRounded className="cusor-pointer" />
      </div>

      <div className="flex items-center w-full gap-6 overflow-x-auto">
        {content?.map((element, index) => {
          return (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`radial-progress text-green mb-2 `}
                style={{ "--value": element.percentage } as never}
                role="progressbar"
              >
                {element.percentage}%
              </div>

              <p className="font-semibold text-white text-nowrap">
                {element.title}
              </p>
              <p className="text-xs text-slate text-nowrap">
                {element.vacancy} vacancies
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NetworkStat;
