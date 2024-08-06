const ProfileInfo = () => {
  const details = {
    skills: [
      { name: "Html", percentage: "90%" },
      { name: "Css", percentage: "85%" },
      { name: "Javascript", percentage: "80%" },
      { name: "Reactjs", percentage: "85%" },
      { name: "Nextjs", percentage: "70%" },
      { name: "Tailwindcss", percentage: "90%" },
    ],
    experience: [
      {
        title: "Frontend Developer",
        bio: "Adnan Tariq - Pindigheb",
        content:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        date: "2019 - 2020",
      },
      {
        title: "Fullstack Developer",
        bio: "Adnan Tariq - Pindigheb",
        content:
          "It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text.",
        date: "2020 - 2022",
      },
    ],
  };

  return (
    <div>
      {/* Info section */}
      <div className="mb-8">
        <h3 className="text-[25px] mb-3.5 text-white font-medium font-jakarta">
          Adnan Tariq
        </h3>
        <p className="text-base text-justify text-slate font-jakarta mb-3.5">
          Obviously I'M Web Developer. Web Developer with over 3 years of
          experience. Experienced with all stages of the development cycle for
          dynamic web projects. The as opposed to using 'Content here, content
          here', making it look like readable English.
        </p>
        <p className="text-base text-justify text-slate font-jakarta mb-3.5">
          Data Structures and Algorithms are the heart of programming. Initially
          most of the developers do not realize its importance but when you will
          start your career in software development, you will find your code is
          either taking too much time or taking too much space.
        </p>
      </div>

      {/* Skills section */}
      <div>
        <h3 className="text-[25px] mb-4 text-white font-medium font-jakarta">
          Skills:
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {details.skills.map((element: any, index: number) => {
            return (
              <div key={index} className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-base text-white font-jakarta mb-1.5">
                    {element.name}
                  </p>
                  <p className="text-base text-white font-jakarta mb-1.5">
                    {element.percentage}
                  </p>
                </div>

                {/* Progressbar */}
                <div className="w-full h-[5px] rounded-full bg-[#05966834] ">
                  <div
                    className={` h-full bg-green rounded-full`}
                    style={{ width: `${element.percentage}` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Experience section */}
      <div className="mt-8">
        <h3 className="text-[25px] mb-4 text-white font-medium font-jakarta">
          Experience:
        </h3>

        <div className="w-full">
          {details.experience.map((element: any, index: number) => {
            return (
              <div
                className="flex flex-wrap items-center gap-4 mb-5"
                key={index}
              >
                <div className="w-[200px]">
                  <img
                    src="/image/user/company-logo.png"
                    className="w-[70px] h-[70px] object-cover"
                    alt=""
                  />
                  <p className="mt-2 text-sm text-slate font-jakarta">
                    {element.date}
                  </p>
                </div>
                <div className="">
                  <h3 className="text-[20px] text-white font-jakarta">
                    {element.title}
                  </h3>
                  <p className="text-sm text-slate font-jakarta">
                    {element.bio}
                  </p>

                  <p className="pt-3 text-base text-justify text-slate font-jakarta">
                    {element.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
