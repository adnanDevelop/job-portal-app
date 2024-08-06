// Components
import CandidateCard from "./component/CandidateCard";
import ExploreJob from "../home/component/ExploreJob";
import PageHeader from "../../components/global/PageHeader";

// Icons
import { IoIosSearch } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Candidate = () => {
  const candidateData = [
    {
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Steven Townsend",
      bio: "Frontend Developer",
      skills: ["React", "Next", "TS"],
      salary: "50k - 100k",
      experience: "2 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Emily Johnson",
      bio: "UI/UX Designer",
      skills: ["Figma", "Sketch", "PS"],
      salary: "60k - 90k",
      experience: "3 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Michael Smith",
      bio: "Full Stack Developer",
      skills: ["JS", "Node", "Exp"],
      salary: "70k - 120k",
      experience: "5 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Sophia Williams",
      bio: "Backend Developer",
      skills: ["Python", "Django", "PostgreSQL"],
      salary: "65k - 110k",
      experience: "4 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "James Brown",
      bio: "DevOps Engineer",
      skills: ["AWS", "Docker", "CI/CD"],
      salary: "80k - 130k",
      experience: "6 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Olivia Davis",
      bio: "Mobile App Developer",
      skills: ["RN", "Flutter", "Firebase"],
      salary: "55k - 105k",
      experience: "3 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Daniel Martinez",
      bio: "Data Scientist",
      skills: ["Python", "Pandas", "ML"],
      salary: "90k - 140k",
      experience: "4 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Isabella Garcia",
      bio: "Software Engineer",
      skills: ["Java", "Spring", "MySQL"],
      salary: "75k - 125k",
      experience: "5 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Ethan Wilson",
      bio: "Cybersecurity Analyst",
      skills: ["NetSec", "EthHack", "SIEM"],
      salary: "85k - 130k",
      experience: "3 Years",
    },
    {
      img: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Ava Taylor",
      bio: "Systems Analyst",
      skills: ["SQL", "SysDesign", "ReqGather"],
      salary: "70k - 115k",
      experience: "4 Years",
    },
  ];

  return (
    <main>
      <PageHeader title="Candidates" breadCrumb="Candidates" />
      <section className="padding-inline md:pt-[100px] pt-[70px] ">
        {/* Search bar */}
        <div className=" items-end justify-end w-full md:flex sm:mb-[50px] mb-[40px]">
          <div className="">
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Candidate
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>

        {/* Blog card section */}
        <section className="grid grid-cols-12 gap-5">
          {candidateData.map((data: any, index) => {
            return (
              <div
                key={index}
                className="lg:col-span-3 sm:col-span-6 col-span-full"
              >
                <CandidateCard data={data} />
              </div>
            );
          })}
        </section>

        {/* Pagniation */}
        <div className="flex items-center justify-center mt-8 col-span-full">
          <div className="flex items-center justify-center">
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate  transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              <FaChevronLeft />
            </button>
            {[1, 2, 3, 4, 5].map((element: number, index: number) => {
              return (
                <button
                  key={index}
                  className="w-[40px] h-[40px] flex items-center justify-center  border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
                >
                  {element}
                </button>
              );
            })}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              {" "}
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
      {/* Explore job section */}
      <ExploreJob />
    </main>
  );
};

export default Candidate;
