import { Link } from "react-router-dom";

// links
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

interface ILinks {
  name: string;
  path: string;
}

const Footer = () => {
  const links: ILinks[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Jobs", path: "/jobs" },
    { name: "Service", path: "/service" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full text-white bg-light-blue padding-inline">
      {/* First section */}
      <div className="md:flex items-center justify-between md:py-[40px] py-[30px] border-b border-b-color">
        <img
          src="/image/logo-light.png"
          className="mx-auto mb-4 md:ms-0 md:mb-0"
          alt=""
        />
        <div className="flex flex-wrap items-center justify-center md:justify-start md:items-end gap-x-4 gap-y-1">
          {links.map((link: ILinks, index: number) => (
            <Link
              key={index}
              className="text-sm transitions hover:text-green"
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Second section */}
      <div className="sm:py-[30px] py-[20px] md:flex items-center justify-between">
        <p className="mb-3 text-sm text-center text-slate md:mb-0 md:text-start">
          © 2024 Jobstack. All Rights Reserved By.{" "}
          <a
            className="underline text-green"
            target="_blank"
            href="https://adnandev.netlify.app/"
          >
            Adnan Tariq
          </a>
          .
        </p>
        {/* Social links */}
        <div className="flex items-center justify-center md:justify-end gap-x-2">
          {[
            <FaFacebookF />,
            <FaInstagram />,
            <FaLinkedinIn />,
            <FaTwitter />,
          ].map((element, index: number) => {
            return (
              <button
                key={index}
                className="w-[30px] h-[30px] rounded-md border-2 border-color bg-transparent grid place-items-center text-sm text-white transitions hover:bg-green hover:border-green"
              >
                {element}
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
