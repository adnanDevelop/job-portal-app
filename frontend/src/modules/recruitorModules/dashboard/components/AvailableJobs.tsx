import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import { useListJobsByAdminQuery } from "../../../../redux/features/jobApi";

import { BiDotsVerticalRounded } from "react-icons/bi";

const AvailableJobs = () => {
  const { data: jobData } = useListJobsByAdminQuery({});

  return (
    <section className="p-4 rounded-md bg-light-blue">
      <div className="flex justify-between text-[20px] text-slate cursor-pointer mb-10">
        <h3 className="text-lg font-medium text-white font-poppin">
          Featured Jobs
        </h3>
        <BiDotsVerticalRounded className="cusor-pointer" />
      </div>
      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            572: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {jobData?.data?.map(
            (
              element: {
                title: string;
                companyName: string;
                company: { logo: string };
              },
              index: number
            ) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-3 p-4 border border-gray-700 rounded-md py-7 basis-1/4"
                  >
                    <div>
                      <div className="w-[50px] h-[50px] rounded-md bg-dark-blue text-white text-[16px] flex items-center justify-center">
                        <img
                          src={element?.company?.logo}
                          className="w-[30px]"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="text-[13px] font-medium text-white capitalize font-jakarta">
                        {element.title}
                      </h4>
                      <p className="text-xs text-red-500 font-jakarta">
                        {element.companyName}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default AvailableJobs;
