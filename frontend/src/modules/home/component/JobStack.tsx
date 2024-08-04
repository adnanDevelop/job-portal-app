import SectionHeader from "../../../components/global/SectionHeader";

// Icons
import { GiDuration } from "react-icons/gi";
import { FaPhone, FaReact, FaUsers } from "react-icons/fa";
import Card from "../../../components/global/Card";

// interface
interface ISupportContentProps {
  title: string;
  content: string;
  icon: JSX.Element;
  btnTitle: string;
}
const JobStack = () => {
  const supportContent: ISupportContentProps[] = [
    {
      title: "24/7 Support",
      content: "Many desktop publishing now use and a search for job.",
      icon: <FaPhone />,
      btnTitle: "Read More",
    },
    {
      title: "Teach & Startup Jobs",
      content: "Many desktop publishing now use and a search for job.",
      icon: <FaReact />,
      btnTitle: "Read More",
    },
    {
      title: "Quick & Easy",
      content: "Many desktop publishing now use and a search for job.",
      icon: <FaUsers />,
      btnTitle: "Read More",
    },
    {
      title: "Save Time",
      content: "Many desktop publishing now use and a search for job.",
      icon: <GiDuration />,
      btnTitle: "Read More",
    },
  ];

  return (
    <main className="padding-inline padding-block ">
      <SectionHeader
        title="Here's why you'll love it Jobstack"
        content="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
      />

      <section className="mt-[60px] grid grid-cols-12 gap-4">
        {supportContent.map((element: ISupportContentProps, index: number) => {
          return (
            <div
              key={index}
              className="xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6 col-span-full"
            >
              <Card
                title={element.title}
                jobs={element.content}
                icon={element.icon}
                btnTitle={element.btnTitle}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default JobStack;
