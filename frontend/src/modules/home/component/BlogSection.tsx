import BlogCard from "../../blog/component/BlogCard";
import SectionHeader from "../../../components/global/SectionHeader";

// Apis
import { useListBlogsQuery } from "../../../redux/features/blogApi";

// Interface
interface DataProps {
  data: {
    blogImage: string;
    category: string;
    title: string;
    createdAt: string;
    createdBy: { fullName: string };
  };
}

const BlogSection = () => {
  const { data: blogData } = useListBlogsQuery({});

  return (
    <main className="padding-inline padding-block bg-light-blue group transitions">
      {/* Title section */}
      <section>
        <SectionHeader
          title="Latest Blog or News"
          content="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
        />
      </section>

      {/* Blog Card section */}
      <section className="grid grid-cols-12 gap-4 mt-[60px]">
        {blogData?.data
          ?.slice(0, 4)
          .map((element: DataProps, index: number) => {
            return (
              <div
                key={index}
                className="lg:col-span-4 sm:col-span-6 col-span-full xl:col-span-3"
              >
                <BlogCard data={element} />
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default BlogSection;
