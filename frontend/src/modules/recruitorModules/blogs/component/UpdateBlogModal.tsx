import { useForm } from "react-hook-form";
import { ICreateBlogProp } from "../type";
import Modal from "../../../../components/ui/toast/Modal";

// Apis
import {
  useUpdateBlogMutation,
  useGetBlogByIdQuery,
} from "../../../../redux/features/blogApi";
import { toast } from "react-toastify";

const UpdateCompanyModal = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateBlogProp>();

  const [updateBlog, loading] = useUpdateBlogMutation();
  const { data: blogData } = useGetBlogByIdQuery({ id });

  const submitData = async (data: ICreateBlogProp) => {
    try {
      console.log(data);
      await updateBlog({ id, body: data })
        .unwrap()
        .then((response) => {
          toast.success(response.message);
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
              Title:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Company name"
              defaultValue={blogData?.data?.title}
              {...register("title", {
                required: "Company name is required",
              })}
            />
            {errors.title && (
              <p className="mt-1 text-xs text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* SubTitle input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              SubTitle:
            </label>
            <input
              type="text"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="SubTitle.."
              defaultValue={blogData?.data?.subTitle}
              {...register("subTitle", {
                required: "SubTitle is required",
              })}
            />
            {errors.subTitle && (
              <p className="mt-1 text-xs text-red-500">
                {errors.subTitle.message}
              </p>
            )}
          </div>

          {/* Category input */}
          <div className="mb-2">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Category:
            </label>
            <select
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              defaultValue={blogData?.data?.category}
              {...register("category", {
                required: "Category is required",
              })}
            >
              {[
                "Graphic Design",
                "Web Developer",
                "App Developer",
                "UI / UX Designer",
                "Video Editor",
                "Content Creator",
                "Blockchain Developer",
              ].map((element: string, index: number) => (
                <option key={index} className="text-black" value={element}>
                  {element}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Content section */}
          <div className="mb-2"></div>

          {/* Image input */}
          <div className="mb-2 col-span-full">
            <label className="text-xs text-white xl:text-sm font-poppin">
              Image:
            </label>
            <input
              type="file"
              className="mt-1 w-full h-[40px] placeholder:text-slate text-slate rounded-md px-2 border text-xs focus:outline-none border-[#94a3b857] bg-transparent focus:border-green"
              placeholder="Image"
              defaultValue={blogData?.data?.blogImage}
              {...register("blogImage", {
                required: "Image is required",
              })}
            />
            {errors.blogImage && (
              <p className="mt-1 text-xs text-red-500">
                {errors.blogImage.message}
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
                "Update Blog"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateCompanyModal;
