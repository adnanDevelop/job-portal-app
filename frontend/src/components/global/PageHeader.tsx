import { Link } from "react-router-dom";

interface IProps {
  title: string;
  breadCrumb: string;
}

const PageHeader = ({ title, breadCrumb }: IProps) => {
  return (
    <main className=" padding-inline  overflow-hidden z-[1] w-full py-[200px] relative  bg-[url('/image/header-img.jpg')] bg-no-repeat bg-center bg-cover clip-path">
      <div className="absolute z-[-1] top-0 left-0 w-full h-full  bg-[#064E3BE6]" />
      <h1 className="text-3xl font-bold text-center text-white font-jakarta">
        {title}
      </h1>

      <div className="mt-4 text-sm text-white absolute bottom-10 left-[50%] translate-x-[-50%]">
        <Link
          to="/"
          className="font-semibold text-white font-poppin transitions hover:text-green"
        >
          Home
        </Link>{" "}
        <span className="mx-1"> {" > "}</span>
        <a className="font-semibold text-green font-poppin">
          {breadCrumb}
        </a>{" "}
      </div>
    </main>
  );
};

export default PageHeader;
