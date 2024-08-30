import { useState } from "react";
import CreateBlogModal from "../component/CreateBlogModal";
import DeleteBlogModal from "../component/DeleteBlogModal";
import UpdateBlogModal from "../component/UpdateBlogModal";

// Redux
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useListBlogsQuery } from "../../../../redux/features/blogApi";

// Icons
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const RecruitorBlog = () => {
  const [cardId, setCardId] = useState<string>("");
  const [updateCardId, setUpdateCardId] = useState<string>("");

  // Calling Apis
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: blogData, isLoading } = useListBlogsQuery({});

  const filterBlogs = blogData?.data?.filter(
    (element: { createdBy: { _id: string } }) => {
      return element?.createdBy?._id === user?._id;
    }
  );

  console.log(filterBlogs);

  const deleteBlogFunction = (id: string) => {
    setCardId(id);
    const deleteModalElement = document.getElementById(id);
    if (deleteModalElement) {
      (deleteModalElement as HTMLDialogElement).showModal();
    }
  };

  // console.log(filterBlogs);

  return (
    <main className={` ${filterBlogs?.length <= 4 ? "h-[80vh]" : null}`}>
      {/* Blog Search section */}
      <section className="my-[40px] flex items-center justify-between w-full">
        {/* Search bar */}
        <div>
          <div>
            <label className="text-sm font-medium text-start text-white font-poppin mb-1.5 block">
              Search Blog
            </label>
            <div className="sm:w-[280px] w-full rounded-md border-color border h-[40px] relative">
              <input
                type="text"
                className="sm:w-[280px] w-full  h-full text-xs text-white bg-transparent border border-transparent rounded-md placeholder:text-xs placeholder:text-white ps-3 pe-8 focus:outline-none focus:border-green"
                placeholder="Search..."
              />
              <span className="absolute text-white right-2 top-[50%] translate-y-[-50%] text-xl cursor-pointer">
                <IoIosSearch />
              </span>
            </div>
          </div>
        </div>
        {/* Create Blog button */}
        <button
          className="primary-btn px-[20px]"
          onClick={() => {
            const element = document.getElementById(
              "createBlog"
            ) as HTMLDialogElement;
            if (element) {
              element.showModal();
            }
          }}
        >
          Create Blog
        </button>
      </section>

      {/* Job Card section */}
      {isLoading ? (
        <div className="w-full h-[60vh] flex items-center justify-center col-span-full">
          <span className="text-green loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <section className="mt-5">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {filterBlogs?.map(
              (
                element: {
                  blogImage: string;
                  title: string;
                  subTitle: string;
                  content: string;
                  _id: string;
                },
                index: number
              ) => {
                return (
                  <div
                    className="relative flex flex-col justify-between px-4 py-6 rounded-md sm:items-center sm:flex-row col-span-full md:col-span-6 bg-light-blue"
                    key={index}
                  >
                    <div className="absolute flex justify-end gap-2 mb-4 right-2 top-2">
                      {/* Update button */}
                      <button
                        onClick={() => {
                          setUpdateCardId(element._id);
                          const updateModalElement = document.getElementById(
                            element?._id
                          );
                          if (updateModalElement) {
                            (
                              updateModalElement as HTMLDialogElement
                            ).showModal();
                          }
                        }}
                        className="w-[30px] h-[30px] rounded-md bg-green focus:bg-[#23755b] text-white flex items-center justify-center"
                      >
                        {" "}
                        <HiOutlinePencilSquare className="text-base text-white" />
                      </button>
                      {/* Delete button */}
                      <button
                        onClick={() => deleteBlogFunction(element._id)}
                        className="w-[30px] h-[30px] rounded-md bg-red-500 focus:bg-red-700 text-white flex items-center justify-center"
                      >
                        {" "}
                        <RiDeleteBinLine className="text-white" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <img
                        src={element.blogImage}
                        className="w-[100px] h-[100px] object-cover rounded-md"
                        alt=""
                      />
                      <div>
                        <h3 className="text-base font-medium text-white font-poppin">
                          {element?.title.length > 50
                            ? element?.title.slice(0, 50) + "..."
                            : element?.title}
                        </h3>
                        <p className="text-sm text-slate font-jakarta">
                          {element?.subTitle}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>
      )}
      {/* Pagniation */}
      {blogData?.data.length > 9 && (
        <div className="flex items-center justify-center mt-10 col-span-full">
          <div className="flex items-center justify-center">
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tl-full rounded-bl-full border border-color text-sm text-slate  transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              <FaChevronLeft />
            </button>
            {[1, 2, 3, 4, 5].map((element: number, index: number) => {
              return (
                <button
                  key={index}
                  className="w-[40px] h-[40px] flex items-center justify-center  border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green"
                >
                  {element}
                </button>
              );
            })}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-tr-full rounded-br-full border border-color text-sm text-slate transitions hover:bg-green hover:border-green hover:text-white focus:bg-green focus:text-white focus:border-green">
              {" "}
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      <DeleteBlogModal id={cardId} />
      <CreateBlogModal id="createBlog" />
      <UpdateBlogModal id={updateCardId} />
    </main>
  );
};

export default RecruitorBlog;
