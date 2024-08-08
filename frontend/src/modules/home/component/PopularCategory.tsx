import Card from "../../../components/global/Card";
import SectionHeader from "../../../components/global/SectionHeader";

// Icons
import { SiSolidity } from "react-icons/si";
import { SiTaichigraphics } from "react-icons/si";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { FaCode, FaFigma } from "react-icons/fa6";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Interfaces
interface IProps {
  title: string;
  jobs: string;
  icon: JSX.Element;
}

const PopularCategory = () => {
  const categoryContent: IProps[] = [
    { title: "Graphic Design", jobs: "10 jobs", icon: <SiTaichigraphics /> },
    { title: "Blockchain Developer", jobs: "10 jobs", icon: <SiSolidity /> },
    {
      title: "Content Creator",
      jobs: "10 jobs",
      icon: <HiOutlinePresentationChartLine />,
    },
    {
      title: "Video Editor",
      jobs: "10 jobs",
      icon: <MdOutlineVideoCameraFront />,
    },
    { title: "UI / UX Designer", jobs: "10 jobs", icon: <FaFigma /> },
    {
      title: "Web Developer",
      jobs: "10 jobs",
      icon: <FaCode />,
    },
    { title: "Graphic Design", jobs: "10 jobs", icon: <SiTaichigraphics /> },
    { title: "Blockchain Developer", jobs: "10 jobs", icon: <SiSolidity /> },
    {
      title: "Content Creator",
      jobs: "10 jobs",
      icon: <HiOutlinePresentationChartLine />,
    },
    {
      title: "Video Editor",
      jobs: "10 jobs",
      icon: <MdOutlineVideoCameraFront />,
    },
    { title: "UI / UX Designer", jobs: "10 jobs", icon: <FaFigma /> },
    {
      title: "Web Developer",
      jobs: "10 jobs",
      icon: <FaCode />,
    },
  ];

  return (
    <main className="padding-inline padding-block">
      <SectionHeader
        title="Popular Categories"
        content="Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide."
      />

      {/* Card section */}
      <section className="mt-[40px] ">
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          loop={true}
          // navigation={true}
          // grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1250: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {categoryContent.map((item, index) => (
            <SwiperSlide key={index} className="px-[20px]">
              <div>
                <Card
                  key={index}
                  title={item.title}
                  jobs={item.jobs}
                  icon={item.icon}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default PopularCategory;
