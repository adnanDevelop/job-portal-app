import { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
// Text Editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { ICreateBlogProp } from "../type";
import Modal from "../../../../components/ui/toast/Modal";

// Apis
import {
  useUpdateBlogMutation,
  useGetBlogByIdQuery,
} from "../../../../redux/features/blogApi";

const UpdateBlogModal = ({ id }: { id: string }) => {
  const [contentValue, setContentValue] = useState("");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateBlogProp>();

  const [updateBlog, loading] = useUpdateBlogMutation();
  const { data: blogData } = useGetBlogByIdQuery({ id });
  console.log(blogData?.data, "blog data");

  const submitData = async (data: ICreateBlogProp) => {
    // Create a new FormData object
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("subTitle", data.subTitle);
    formData.append("content", contentValue);
    formData.append("category", data.category);

    if (data.blogImage?.[0]) {
      formData.append("blogImage", data.blogImage[0]);
    }

    // Send formData to the registerCompany function
    await updateBlog({ id, body: formData })
      .unwrap()
      .then((response) => {
        toast.success(response.message);
        reset();
        const element = document.getElementById(id) as HTMLDialogElement;
        if (element) {
          element.close();
        }
      })
      .catch((e) => {
        console.log(e, "error while updating blog");
        toast.error(e.data.message);
      });
  };

  return (
    <Modal id={id}>
      <div className="modal-box max-w-[600px] bg-light-blue">
        <h3 className="font-jakarta text-white font-bold text-center text-[25px] text-heading-color ">
          Update <span className="text-green">Blog</span>
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
              placeholder="Title"
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
          {/* Image input */}
          <div className="mb-2 ">
            <label
              htmlFor="blogImage"
              className="text-xs text-white xl:text-sm font-poppin"
            >
              Image:
            </label>
            <input
              type="file"
              id="blogImage"
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

          {/* Content section */}
          <div className="mb-10 col-span-full">
            <ReactQuill
              theme="snow"
              value={contentValue}
              onChange={setContentValue}
              className="h-[200px] text-white "
              defaultValue={blogData?.data?.content}
            />
          </div>

          {/* Submit button */}
          <div className="flex items-center justify-center w-full modal-action col-span-full">
            <button
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
              disabled={loading.isLoading}
            >
              {loading.isLoading ? (
                <span className="loading loading-dots loading-md"></span>
              ) : (
                "Update"
              )}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdateBlogModal;
