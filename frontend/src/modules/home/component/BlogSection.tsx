import BlogCard from "../../blog/component/BlogCard";
import SectionHeader from "../../../components/global/SectionHeader";

// Interface
interface IblogProps {
  image: string;
  badge: string;
  title: string;
  date: string;
  time: string;
  company: string;
}

const BlogSection = () => {
  const blogContent: IblogProps[] = [
    {
      image: "/image/blog/img-1.jpg",
      badge: "Arts",
      title: "11 Tips to Help You Get New Clients Through Cold Calling",
      date: "20th February, 2023",
      time: "5 min read",
      company: "Xeven Solution",
    },
    {
      image: "/image/blog/img-2.jpg",
      badge: "Illustration",
      title: "DigitalOcean launches first Canadian data centre in Toronto",
      date: "20th February, 2023",
      time: "5 min read",
      company: "Programmer Force",
    },
    {
      image: "/image/blog/img-3.jpg",
      badge: "Design",
      title: "Using Banner Stands To Increase Trade Show Traffic",
      date: "20th February, 2023",
      time: "5 min read",
      company: "System Limited",
    },
  ];

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
        {blogContent.map((element: IblogProps, index: number) => {
          return (
            <div
              key={index}
              className="lg:col-span-4 sm:col-span-6 col-span-full"
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
