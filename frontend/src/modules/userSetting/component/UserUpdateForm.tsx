import { useForm } from "react-hook-form";

// Types
import { IUpdateUser } from "../type";

const UserUpdateForm = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>();

  return (
    <section className="padding-inline  py-[60px]">
      <div className="p-5 border border-gray-700 rounded-md shadow shadow-gray-800 ">
        <form>
          {/* Personal information */}
          <h3 className="text-white font-jakarta text-[20px]">
            Personal Detail:
          </h3>

          <div className="grid w-full grid-cols-12 gap-5 mt-6">
            {/* FullName input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Adnan Tariq"
                {...register("fullName", {
                  required: "Name is required",
                })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* E-mail input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Adnan Tariq"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* studentName input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Student Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Testing@gmail.com"
                {...register("fullName", {
                  required: "Name is required",
                })}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* bio input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Bio: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Testing@gmail.com"
                {...register("bio", {
                  required: "Bio is required",
                })}
              />
              {errors.bio && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.bio.message}
                </p>
              )}
            </div>

            {/* Skills input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Skills: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Html, Css, Javascript, Typescript"
                {...register("skills", {
                  required: "Skills are required",
                })}
              />
              {errors.skills && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.skills.message}
                </p>
              )}
            </div>

            {/* Experience input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Experience: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="1.5 years"
                {...register("experience", {
                  required: "Experience is required",
                })}
              />
              {errors.experience && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Skills input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Date of Birth: <span className="text-red-500">*</span>
              </label>
              <input
                type="birthdate"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Date of birth"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            {/* Date of birth input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Date of Birth: <span className="text-red-500">*</span>
              </label>
              <input
                type="birthdate"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Date of birth"
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            {/* Address input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Address: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Islamabad Pakistan"
                {...register("address", {
                  required: "Address is required",
                })}
              />
              {errors.address && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* City input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                City: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Islamad"
                {...register("city", {
                  required: "City name is required",
                })}
              />
              {errors.city && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.city.message}
                </p>
              )}
            </div>

            {/* Country input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Country: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Pakistan"
                {...register("country", {
                  required: "Country name is required",
                })}
              />
              {errors.country && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.country.message}
                </p>
              )}
            </div>

            {/* Phone number input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Phone: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="0323-1234567"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
              />
              {errors.phoneNumber && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Resume input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Upload Resume: <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept=".pdf"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                {...register("resume", {
                  required: "Resume is required",
                })}
              />
              {errors.resume && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.resume.message}
                </p>
              )}
            </div>

            {/* Profile Image input */}
            <div className="col-span-6">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Profile Image: <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                {...register("profilePhoto", {
                  required: "Profile Image is required",
                })}
              />
              {errors.profilePhoto && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.profilePhoto.message}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserUpdateForm;
