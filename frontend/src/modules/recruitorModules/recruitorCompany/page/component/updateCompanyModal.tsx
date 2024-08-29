import Modal from "../../../../../components/ui/toast/Modal";
import { useForm } from "react-hook-form";
import { IUpdateCompany } from "../../type";

// Apis
import {
  useUpdateCompanyMutation,
  useGetCompanyByIdQuery,
} from "../../../../../redux/features/companyApi";

import { toast } from "react-toastify";

const UpdateCompanyModal = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateCompany>();

  const [updateCompany, loading] = useUpdateCompanyMutation();
  const { data: companyData } = useGetCompanyByIdQuery({ id });

  const submitData = async (data: IUpdateCompany) => {
    try {
      console.log(data);
      await updateCompany({ id, body: data })
        .unwrap()
        .then((response) => {
          toast.success(response.message);
          // Close accordion
          const element = document.getElementById(id) as HTMLDialogElement;
          if (element) {
            element.close();
          }
        })
        .catch((e) => {
          console.log(e, "error at record");
          toast.error(e.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal id={id}>
      <div className=" modal-box max-w-[600px] bg-light-blue">
        <h3 className="font-jakarta text-white font-bold text-center text-[25px] text-heading-color ">
          Update <span className="text-green">Job</span>
        </h3>

        <form
          className="grid w-full sm:grid-cols-2 grid-cols-1 gap-2.5 mt-4"
          onSubmit={handleSubmit(submitData)}
        >
          {/* title input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Name:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Company name"
              defaultValue={companyData?.data?.companyName}
              {...register("companyName", {
                required: "Company name is required",
              })}
            />
            {errors.companyName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.companyName.message}
              </p>
            )}
          </div>

          {/* Bio input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Bio:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Bio"
              defaultValue={companyData?.data?.bio}
              {...register("bio", {
                required: "Bio is required",
              })}
            />
            {errors.bio && (
              <p className="mt-1 text-xs text-red-500">{errors.bio.message}</p>
            )}
          </div>

          {/* City input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              City:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={companyData?.data?.city}
              {...register("city", {
                required: "City is required",
              })}
            >
              <option className="text-black" value="Islamabad">
                Islamabad
              </option>
              <option className="text-black" value="Lahore">
                Lahore
              </option>
              <option className="text-black" value="Karachi">
                Karachi
              </option>
              <option className="text-black" value="Peshawar">
                Peshawar
              </option>
              <option className="text-black" value="Faisalabad">
                Faisalabad
              </option>
              <option className="text-black" value="Rawalpindi">
                Rawalpindi
              </option>
            </select>
            {errors.city && (
              <p className="mt-1 text-xs text-red-500">{errors.city.message}</p>
            )}
          </div>

          {/* Address input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Address:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Address"
              defaultValue={companyData?.data?.address}
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

          {/* Founded input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Founded:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={companyData?.data?.founded}
              {...register("founded", {
                required: "founded Date is required",
              })}
            >
              {[
                2000, 2002, 2003, 2004, 2005, 2005, 2006, 2007, 2008, 2009,
                2012,
              ].map((element, index) => {
                return (
                  <option className="text-black" value={element} key={index}>
                    {element}
                  </option>
                );
              })}
            </select>
            {errors.founded && (
              <p className="mt-1 text-xs text-red-500">
                {errors.founded.message}
              </p>
            )}
          </div>

          {/* Founder input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Founder:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Founder Name"
              defaultValue={companyData?.data?.founder}
              {...register("founder", {
                required: "Founder name is required",
              })}
            />
            {errors.founder && (
              <p className="mt-1 text-xs text-red-500">
                {errors.founder.message}
              </p>
            )}
          </div>

          {/* HeadQuater input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              HeadQuater:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={companyData?.data?.headquater}
              {...register("headQuater", {
                required: "HeadQuater is required",
              })}
            >
              <option className="text-black" value="Islamabad">
                Islamabad
              </option>
              <option className="text-black" value="Lahore">
                Lahore
              </option>
              <option className="text-black" value="Karachi">
                Karachi
              </option>
              <option className="text-black" value="Peshawar">
                Peshawar
              </option>
              <option className="text-black" value="Faisalabad">
                Faisalabad
              </option>
              <option className="text-black" value="Rawalpindi">
                Rawalpindi
              </option>
            </select>
            {errors.headQuater && (
              <p className="mt-1 text-xs text-red-500">
                {errors.headQuater.message}
              </p>
            )}
          </div>

          {/* Website link input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Website link:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Website link"
              defaultValue={companyData?.data?.websiteLink}
              {...register("websiteLink", {
                required: "Website link is required",
              })}
            />
            {errors.websiteLink && (
              <p className="mt-1 text-xs text-red-500">
                {errors.websiteLink.message}
              </p>
            )}
          </div>

          {/* Description input */}
          <div className="mb-2 col-span-full">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Description:
            </label>

            <textarea
              className="resize-none mt-1 text-xs w-full h-[120px] p-1.5 text-slate rounded-md border border-[#94a3b857] bg-transparent focus:outline-none focus:border-green"
              defaultValue={companyData?.data?.description}
              {...register("description", {
                required: "Description is required",
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center w-full modal-action col-span-full">
            <button
              type="button"
              className="px-[30px] h-[40px] rounded-lg bg-gray-200 text-content-color font-medium transitions hover:scale-105 text-sm"
              onClick={() => {
                const element = document.getElementById(
                  id
                ) as HTMLDialogElement;
                if (element) {
                  element.close();
                }
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-[30px] h-[40px] rounded-lg bg-green text-white font-medium transitions hover:scale-105 text-sm"
            >
              {loading.isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Update Company"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateCompanyModal;
