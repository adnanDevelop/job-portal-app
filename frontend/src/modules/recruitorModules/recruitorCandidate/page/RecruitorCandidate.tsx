import RecruitorCandidateCard from "../component/RecruitorCandidateCard";

// Icons
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const RecruitorCandidates = () => {
  const isLoading = false;

  const data = [
    {
      _id: "1",
      fullName: "John Doe",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        salary: "20,000",
        experience: "2 years",
        bio: "Frontend Developer",
        skills: ["Html", "Css", "Javascript"],
      },
    },
    {
      _id: "2",
      fullName: "Jane Smith",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
        salary: "25,000",
        experience: "3 years",
        bio: "UI/UX Designer",
        skills: ["Sketch", "Figma", "Adobe XD"],
      },
    },
    {
      _id: "3",
      fullName: "Michael Johnson",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/3.jpg",
        salary: "30,000",
        experience: "4 years",
        bio: "Backend Developer",
        skills: ["Node.js", "Express", "MongoDB"],
      },
    },
    {
      _id: "4",
      fullName: "Emily Davis",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/4.jpg",
        salary: "35,000",
        experience: "5 years",
        bio: "Full Stack Developer",
        skills: ["React", "Node.js", "MongoDB", "Express"],
      },
    },
    {
      _id: "5",
      fullName: "William Brown",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/5.jpg",
        salary: "28,000",
        experience: "3 years",
        bio: "DevOps Engineer",
        skills: ["AWS", "Docker", "Kubernetes"],
      },
    },
    {
      _id: "6",
      fullName: "Olivia Wilson",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/6.jpg",
        salary: "22,000",
        experience: "2 years",
        bio: "Frontend Developer",
        skills: ["React", "Vue.js", "CSS"],
      },
    },
    {
      _id: "7",
      fullName: "James Moore",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/7.jpg",
        salary: "32,000",
        experience: "4 years",
        bio: "Data Scientist",
        skills: ["Python", "TensorFlow", "Pandas"],
      },
    },
    {
      _id: "8",
      fullName: "Sophia Taylor",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/8.jpg",
        salary: "27,000",
        experience: "3 years",
        bio: "Mobile Developer",
        skills: ["Swift", "Kotlin", "React Native"],
      },
    },
    {
      _id: "9",
      fullName: "Benjamin Anderson",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/9.jpg",
        salary: "24,000",
        experience: "2 years",
        bio: "QA Engineer",
        skills: ["Selenium", "Cypress", "Postman"],
      },
    },
    {
      _id: "10",
      fullName: "Isabella Thomas",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/10.jpg",
        salary: "29,000",
        experience: "4 years",
        bio: "Project Manager",
        skills: ["Scrum", "Kanban", "JIRA"],
      },
    },
    {
      _id: "16",
      fullName: "John Doe",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/men/1.jpg",
        salary: "20,000",
        experience: "2 years",
        bio: "Frontend Developer",
        skills: ["Html", "Css", "Javascript"],
      },
    },
    {
      _id: "92",
      fullName: "Jane Smith",
      profile: {
        profilePhoto: "https://randomuser.me/api/portraits/women/2.jpg",
        salary: "25,000",
        experience: "3 years",
        bio: "UI/UX Designer",
        skills: ["Sketch", "Figma", "Adobe XD"],
      },
    },
  ];

  return (
    <main>
      {/* Searchbar section */}
      <section className="mt-[20px]">
        <div className="max-w-[300px] h-[40px] relative rounded-full bg-light-blue text-slate ms-auto">
          <input
            type="text"
            className="w-full h-[40px] placeholder:text-xs focus:outline-none rounded-full bg-light-blue ps-4 pe-11 text-xs"
            placeholder="Search here..."
          />

          <button className="w-[30px] h-[30px] rounded-full bg-green absolute top-[50%] translate-y-[-50%] right-1.5 flex items-center justify-center text-[13px] text-white">
            <FaSearch />
          </button>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-5 mt-[20px]">
        <p className="text-lg text-white col-span-full font-poppin">
          Total {data?.length} candidates
        </p>
        {data?.map((element, index: number) => {
          return (
            <div
              key={index}
              className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-full"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <span className="loading loading-dots loading-md"></span>
                </div>
              ) : (
                <RecruitorCandidateCard data={element} />
              )}
            </div>
          );
        })}
      </section>

      {/* Pagniation */}
      <div className="flex items-center justify-center mt-10 col-span-full">
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
    </main>
  );
};

export default RecruitorCandidates;
