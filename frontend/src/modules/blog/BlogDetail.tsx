import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/global/PageHeader";

// Icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

// Api
import { useGetBlogByIdQuery } from "../../redux/features/blogApi";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blogData, isLoading } = useGetBlogByIdQuery({ id: id });

  return (
    <div>
      {/* Page header section */}
      <section>
        <PageHeader title="Blog Detail" breadCrumb="Blog" />
      </section>

      {/* Blog Detail */}
      <section className="my-[80px] padding-inline">
        {isLoading ? (
          <div className="flex items-center justify-center w-full h-full">
            <span className="loading loading-dots loading-lg text-green"></span>
          </div>
        ) : (
          <div className="grid w-full grid-cols-12 lg:gap-10">
            {/* Blog Detail section */}
            <div className=" col-span-full lg:col-span-8">
              <div className="blog_section">
                <img
                  src={blogData?.data?.blogImage}
                  className="w-full h-[300px] object-cover rounded-md"
                  alt=""
                />

                <div className="text-justify text-white blog_content mt-[40px]">
                  {parse(blogData?.data?.content)}
                </div>
              </div>
            </div>
            {/* Recruitor Detail section */}
            <div className=" col-span-full lg:col-span-4">
              <div className="w-full rounded-md h-[50px] bg-light-blue text-white grid place-items-center border border-gray-800">
                <h3 className="text-lg font-medium font-jakarta">Author</h3>
              </div>
              <div className="flex flex-col items-center justify-center my-8">
                <img
                  src={blogData?.data?.createdBy?.profile?.profilePhoto}
                  className="w-[80px] rounded-full"
                  alt=""
                />
                <h3 className="mt-2 text-xl font-medium text-white font-jakarta">
                  {blogData?.data?.createdBy?.fullName}
                </h3>
                <p className="text-sm text-slate">Recruitor</p>
              </div>
              <div className="w-full rounded-md h-[50px] bg-light-blue text-white grid place-items-center border border-gray-800">
                <h3 className="text-lg font-medium font-jakarta">
                  Social sites
                </h3>
              </div>
              <div className="flex items-center justify-center gap-2 mt-8">
                {[
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaTwitter />,
                  <FaLinkedin />,
                ].map((element, index) => {
                  return (
                    <button
                      key={index}
                      className="w-[30px] h-[30px] flex items-center justify-center border border-gray-800 text-gray-700 rounded-md transitions hover:bg-green hover:text-white hover:border-green shadow shadow-gray-800"
                    >
                      {element}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default BlogDetail;
