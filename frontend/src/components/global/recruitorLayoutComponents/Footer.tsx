const Footer = ({ isSidebarActive }: { isSidebarActive: boolean }) => {
  return (
    <div
      className={`w-full h-[40px] bg-light-blue text-center flex items-center justify-center  fixed bottom-0 transitions ${
        isSidebarActive ? "lg:w-[calc(100%-220px)] w-full right-0 " : "w-full"
      }`}
    >
      <p className="text-sm text-slate">
        Copyright © Designed & Developed by{" "}
        <a
          href="https://adnandev.netlify.app/"
          className="underline text-green"
        >
          Adnan Tariq
        </a>{" "}
        2023
      </p>
    </div>
  );
};

export default Footer;
