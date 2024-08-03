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
    <footer className="w-full text-white bg-black padding-inline">
      {/* First section */}
      <div className="flex items-center justify-between py-[40px] border-b border-b-color">
        <img src="/image/logo-light.png" alt="" />
        <div className="flex gap-x-4">
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
      <div className="py-[20px] flex items-center justify-between">
        <p className="text-slate">
          © 2024 Jobstack. All Rights Reserved.{" "}
          <a
            className="text-green"
            target="_blank"
            href="https://adnandev.netlify.app/"
          >
            Adnan Tariq
          </a>
          .
        </p>
        {/* Social links */}
        <div className="flex items-center gap-x-2">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map(
            (element: any, index: number) => {
              return (
                <button
                  key={index}
                  className="w-[30px] h-[30px] rounded-md border-2 border-color bg-transparent grid place-items-center text-lg text-white transitions hover:bg-green hover:border-green"
                >
                  {<element />}
                </button>
              );
            }
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
