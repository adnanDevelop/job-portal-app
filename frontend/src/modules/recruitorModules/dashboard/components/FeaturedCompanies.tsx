import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaSnapchat,
  FaTiktok,
  FaReddit,
  FaGithub,
} from "react-icons/fa";

const FeaturedCompanies = () => {
  const content = [
    { icon: <FaFacebook />, title: "Facebook", content: "Design Team Agency" },
    { icon: <FaTwitter />, title: "Twitter", content: "Design Team Agency" },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      content: "Design Team Agency",
    },
    { icon: <FaLinkedin />, title: "LinkedIn", content: "Design Team Agency" },
    { icon: <FaYoutube />, title: "YouTube", content: "Design Team Agency" },
    {
      icon: <FaPinterest />,
      title: "Pinterest",
      content: "Design Team Agency",
    },
    { icon: <FaSnapchat />, title: "Snapchat", content: "Design Team Agency" },
    { icon: <FaTiktok />, title: "TikTok", content: "Design Team Agency" },
    { icon: <FaReddit />, title: "Reddit", content: "Design Team Agency" },
    { icon: <FaGithub />, title: "GitHub", content: "Design Team Agency" },
  ];

  return (
    <section className="p-4 rounded-md bg-light-blue">
      <div className="flex justify-between text-[20px] text-slate cursor-pointer mb-10">
        <h3 className="text-lg font-medium text-white font-poppin">
          Featured Companies
        </h3>
        <BiDotsVerticalRounded className="cusor-pointer" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {content.map((element, index) => {
          return (
            <div
              key={index}
              className="flex items-center gap-2 pb-4 border-b border-b-gray-700"
            >
              <div className="w-[50px] h-[50px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
                {element.icon}
              </div>
              <div>
                <h4 className="text-lg font-medium text-white capitalize font-jakarta">
                  {element.title}
                </h4>
                <p className="text-xs text-slate font-jakarta">
                  {element.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
