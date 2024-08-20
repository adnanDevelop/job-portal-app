const Footer = () => {
  return (
    <div
      className={`w-full h-[40px] bg-light-blue text-center flex items-center justify-center `}
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
