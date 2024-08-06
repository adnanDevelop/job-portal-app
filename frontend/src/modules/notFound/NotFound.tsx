import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen bg-dark-blue sm:py-[40px] py-[20px] padding-inline">
      {/* Logo section */}
      <section>
        <img src="/image/small-logo.png" alt="" />
      </section>

      {/* Main section */}
      <section className="text-center">
        <img src="/image/notfound-img.png" alt="" />
        <h2 className=" mb-3 md:text-[40px] text-[30px] text-white font-semibold font-poppin">
          Page Not Found?
        </h2>
        <p className="mb-1 text-sm text-slate font-jakarta ">
          Whoops, this is embarassing.
        </p>
        <p className="mb-8 text-sm text-slate font-jakarta">
          Looks like the page you were looking for wasn't found.
        </p>
        <Link to="/" className="primary-btn px-[20px] py-[15px]">
          Back To Home
        </Link>
      </section>
      <section>
        <p className="mb-3 text-xs text-center sm:text-sm text-slate md:mb-0 md:text-start">
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
      </section>
    </main>
  );
};

export default NotFound;
