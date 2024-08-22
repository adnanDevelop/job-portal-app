import { Link } from "react-router-dom";

const RecruitorProfile = () => {
  return (
    <main className="">
      {/* BreadCrumbs */}
      <section className="flex items-center w-full gap-2 p-3 rounded-md bg-light-blue">
        <Link
          to="/recruitor/dashboard"
          className="text-sm text-slate font-poppin"
        >
          Dashboard
        </Link>
        <p className="text-sm text-green font-poppin">
          {" "}
          <span className="pe-1">/</span>Edit Profile
        </p>
      </section>

      <section className="grid grid-cols-12 gap-6 mt-4">
        {/* Left Profile section */}
        <div className="px-4 py-10 rounded-md col-span-full lg:col-span-4 xl:col-span-3 bg-light-blue">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/image/avator.jpg"
              className="sm:w-[130px] w-[100px] rounded-full border-2 border-green"
              alt=""
            />
            <h3 className="mt-3 text-xl font-medium leading-none text-white font-poppin">
              Adnan Tariq
            </h3>
            <p className="text-sm text-slate font-jakarta">Recruitor</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-center gap-4 lg:justify-between">
              <p className="text-sm text-white font-jakarta">
                Total Jobs Posted:{" "}
              </p>
              <p className="text-sm text-slate font-jakarta">12</p>
            </div>
            <div className="flex items-center justify-center gap-4 mt-2 lg:justify-between">
              <p className="text-sm text-white font-jakarta">Website Link:</p>
              <p className="text-sm text-slate font-jakarta">GoMarkho.com</p>
            </div>
          </div>
        </div>

        {/* Profile update section */}
        <div className="p-4 rounded-md col-span-full lg:col-span-8 xl:col-span-9 bg-light-blue">
          <h3 className="pb-4 text-lg font-medium text-white border-b font-poppin border-b-gray-700">
            Profile Setup
          </h3>

          <div className="grid grid-cols-12 gap-4 pb-4 mt-6">
            {/* Name input */}
            <div className="sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Name</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Name..."
              />
            </div>

            {/* Email */}
            <div className="mt-2 sm:col-span-6 col-span-full sm:mt-0">
              <p className="mb-1.5 text-xs text-white font-jakarta">Email</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Name..."
              />
            </div>

            {/* Phone number input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Phone</p>
              <input
                type="tel"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Number..."
              />
            </div>

            {/* Address input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Address</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Address..."
              />
            </div>

            {/* Country input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">Country</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Country..."
              />
            </div>

            {/* City input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">City</p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="City..."
              />
            </div>

            {/* CompanyName input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">
                Company Name
              </p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Company name..."
              />
            </div>

            {/* Website input */}
            <div className="mt-2 sm:col-span-6 col-span-full">
              <p className="mb-1.5 text-xs text-white font-jakarta">
                Website link
              </p>
              <input
                type="text"
                className="w-full border border-gray-700 rounded-md h-[40px] bg-transparent focus:outline-none focus:border-green placeholder:text-xs flex items-center px-2 text-xs text-slate"
                placeholder="Website link..."
              />
            </div>

            <div className="pt-4 mt-4 border-t md:pt-8 md:mt-8 col-span-full border-t-gray-700">
              <button className="primary-btn px-[20px]">Update</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecruitorProfile;
