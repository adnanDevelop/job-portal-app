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
      content: "Pakland City Center, Islamabad",
      value: "View on google map",
    },
  ];

  return (
    <section className="grid grid-cols-12">
      <div className="flex flex-col items-center justify-center lg:col-span-4 sm:col-span-6 col-span-full"></div>
    </section>
  );
};

export default Details;
