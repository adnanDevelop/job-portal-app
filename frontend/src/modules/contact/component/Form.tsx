const Form = () => {
  return (
    <section className="grid grid-cols-12 gap-4 padding-block">
      <div className=" md:col-span-6 col-span-full lg:col-span-7">
        <img src="/image/contact-img.svg" alt="" />
      </div>
      <div className="flex items-center justify-center md:col-span-6 col-span-full lg:col-span-5">
        <form className="w-full p-5 border border-gray-700 rounded-md shadow shadow-gray-700">
          <h3 className="text-white font-semibold font-jakarta md:text-[25px] text-[20px]">
            Get in touch !
          </h3>
          <div className="grid grid-cols-12 gap-4 mt-6">
            {/* Name input */}
            <div className="sm:col-span-6 col-span-full md:col-span-full lg:col-span-6">
              <label className="text-base block font-medium text-white font-poppin mb-1.5">
                Your Name:
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 text-xs text-white bg-transparent border border-gray-700 rounded-md focus:outline-none transitions hover:border-green placeholder:text-xs placeholder:text-slate"
                placeholder="Name:"
              />
            </div>

            {/*  Email input */}
            <div className="sm:col-span-6 col-span-full md:col-span-full lg:col-span-6">
              <label className="text-base block font-medium text-white font-poppin mb-1.5">
                Your Email:
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 text-xs text-white bg-transparent border border-gray-700 rounded-md focus:outline-none transitions hover:border-green placeholder:text-xs placeholder:text-slate"
                placeholder="Email:"
              />
            </div>

            {/*  Question input */}
            <div className="mt-3 col-span-full">
              <label className="text-base block font-medium text-white font-poppin mb-1.5">
                Your Question:
              </label>
              <input
                type="text"
                className="w-full px-3 py-3 text-xs text-white bg-transparent border border-gray-700 rounded-md focus:outline-none transitions hover:border-green placeholder:text-xs placeholder:text-slate"
                placeholder="Subject:"
              />
            </div>

            {/*  Message input */}
            <div className="mt-3 col-span-full">
              <label className="text-base block font-medium text-white font-poppin mb-1.5">
                Your comment:
              </label>
              <textarea
                className="w-full p-3 h-[150px] resize-none text-xs text-white bg-transparent border border-gray-700 rounded-md focus:outline-none transitions hover:border-green placeholder:text-xs placeholder:text-slate"
                placeholder="Message:"
              />
            </div>

            {/* Button section */}
            <div className="mt-4 col-span-full">
              <button className="w-full text-base !h-[45px] primary-btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
