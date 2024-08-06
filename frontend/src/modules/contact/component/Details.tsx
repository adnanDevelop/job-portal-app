import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

// interface
interface IDetailsProps {
  icon: React.ReactElement;
  title: string;
  content: string;
  value: string;
}
const Details = () => {
  const detailContent: IDetailsProps[] = [
    {
      icon: <FaPhone />,
      title: "Phone",
      content:
        "The phrasal sequence of the is now so that many campaign and benefit",
      value: "+123 456 789",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content:
        "The phrasal sequence of the is now so that many campaign and benefit",
      value: "contact@gmail.com",
    },
    {
      icon: <FaLocationArrow />,
      title: "Location",
      content: "Pakland City Center I-8 Markaz, Islamabad",
      value: "View on google map",
    },
  ];

  return (
    <section className="grid grid-cols-12 md:mb-[100px] mb-[70px] gap-6">
      {detailContent.map((element, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center lg:col-span-4 sm:col-span-6 col-span-full"
          >
            <div className="w-[60px] h-[65px] rounded-md bg-[#0596681e] text-green transitions group-hover:bg-green group-hover:text-white text-[28px] flex items-center justify-center shadow-gray-700 shadow">
              {element.icon}
            </div>

            <h4 className="my-4 text-lg font-semibold text-white font-jakarta">
              {element.title}
            </h4>

            <p className="text-sm text-center text-slate font-jakarta max-w-[250px] mx-auto">
              {element.content}
            </p>
            <a
              href="#"
              className="relative mt-3 text-sm font-medium text-green font-jakarta transitions before:absolute before:w-0 before:h-[1px] before:bg-green before:bottom-[-5px] before:left-0 before:transitions hover:before:w-full"
            >
              {element.value}
            </a>
          </div>
        );
      })}
    </section>
  );
};

export default Details;
