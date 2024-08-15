import { useForm } from "react-hook-form";
import { RootState } from "../../../redux/store";

// Types
import { IUpdateUser } from "../type";
import DeleteModal from "./DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { userApiEndPoint } from "../../../utils/apiEndPoints";
import { setLoading } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../../../redux/slices/authSlice";

const UserUpdateForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: RootState) => state.auth);
  // console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUser>();

  //   Update profile function
  const onSubmit = async (data: IUpdateUser) => {
    const formData = new FormData();

    // Append string fields
    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("bio", data.bio);
    formData.append("experience", data.experience);
    formData.append("dateOfBirth", data.dateOfBirth);
    formData.append("address", data.address);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("resumeOriginalName", data.resumeOriginalName);
    formData.append("linkedinLink", data.linkedinLink);
    formData.append("portfolioLink", data.portfolioLink);

    formData.append("skills", JSON.stringify(data.skills));

    if (data.resume) {
      formData.append("resume", data.resume[0]);
    }

    try {
      dispatch(setLoading(true));
      const response = await fetch(`${userApiEndPoint}/profile/update`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData?.data);
        dispatch(setUser(responseData.data));
        navigate("/user-profile");
        toast.success(responseData.message);
      } else {
        const errorData = await response.json();
        toast.error(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.log("Error while updating user", error);
      toast.error("An error occurred while updating user.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const openDeleteAccountModal = () => {
    const modal = document.getElementById(
      "DeleteAccountModal"
    ) as HTMLDialogElement | null;
    if (modal) modal.showModal();
  };

  return (
    <section className="padding-inline md:py-[60px] pb-[60px]">
      {/* Update inputs */}
      <div className="p-5 border border-gray-700 rounded-md shadow shadow-gray-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Personal information */}
          <h3 className="text-white font-jakarta text-[20px]">
            Personal Detail:
          </h3>

          <div className="grid w-full grid-cols-12 gap-5 mt-6">
            {/* FullName input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user?.fullName}
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue={user?.email}
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

            {/* bio input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Bio: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user?.profile?.bio}
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Fullstack Developer"
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Skills: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Html, Css, Javascript, Typescript"
                defaultValue={user?.profile?.skills?.map(
                  (element: string) => element
                )}
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
            <div className="sm:col-span-6 col-span-full">
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
                defaultValue={user?.profile?.experience}
              />
              {errors.experience && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.experience.message}
                </p>
              )}
            </div>

            {/* Date of birth input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Date of Birth: <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="2002-07-15"
                defaultValue={user?.profile?.dateOfBirth}
                {...register("dateOfBirth", {
                  required: "Date of birth is required",
                })}
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
              />
              {errors.dateOfBirth && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            {/* Address input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Address: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="shamshabad, Rawalpindi"
                defaultValue={user?.profile?.address}
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                City: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Islamad"
                defaultValue={user?.profile?.city}
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Country: <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="Pakistan"
                defaultValue={user?.profile?.country}
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Phone: <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                placeholder="0323-1234567"
                defaultValue={user?.profile?.phoneNumber}
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
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Upload Resume: <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="application/pdf"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                {...register("resume", {
                  required: "Resume is required",
                })}
                // onChange={(e) => console.log(e)}
              />
              {errors.resume && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.resume.message}
                </p>
              )}
            </div>

            {/* Linkedin profile link input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Linkedin Profile link:
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                {...register("linkedinLink")}
                placeholder="https://www.linkedin.com/in/adnandev"
                defaultValue={user?.profile?.socialLinks?.linkedinLink}
              />
            </div>

            {/* Portfolio link input */}
            <div className="sm:col-span-6 col-span-full">
              <label className="block mb-1 text-sm text-white font-jakarta ">
                Portfolio Link:
              </label>
              <input
                type="text"
                className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
                {...register("portfolioLink")}
                placeholder="https://adnandev.netlify.app"
                defaultValue={user?.profile?.socialLinks?.portfolioLink}
              />
            </div>

            <div className="mt-5  col-span-full">
              <button
                type="submit"
                className="px-[20px] primary-btn"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Update Profile"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Delete account button */}
      <div className="p-5 mt-8 border border-gray-700 rounded-md shadow shadow-gray-800">
        <h3 className="text-red-500 font-jakarta text-[20px] leading-none">
          Delete Account:
        </h3>
        <p className="my-5 text-sm text-white font-jakarta">
          Do you want to delete the account? Please press below "Delete" button
        </p>

        <button
          className="px-[20px] primary-btn bg-red-700"
          onClick={openDeleteAccountModal}
        >
          Delete Account
        </button>
      </div>

      {/* Modal */}
      <DeleteModal id="DeleteAccountModal" />
    </section>
  );
};

export default UserUpdateForm;
