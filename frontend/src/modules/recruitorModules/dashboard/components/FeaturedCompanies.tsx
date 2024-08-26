import { motion } from "framer-motion";
import { BiDotsVerticalRounded } from "react-icons/bi";

// Apis
import { useListCompaniesQuery } from "../../../../redux/features/companyApi";

const FeaturedCompanies = () => {
  const { data: getData } = useListCompaniesQuery({});

  return (
    <section className="p-4 rounded-md bg-light-blue">
      <div className="flex justify-between text-[20px] text-slate cursor-pointer mb-10">
        <h3 className="text-lg font-medium text-white font-poppin">
          Featured Companies
        </h3>
        <BiDotsVerticalRounded className="cusor-pointer" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {getData?.data?.map(
          (element: { companyName: string; logo: string }, index: number) => {
            return (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                key={index}
                className="flex items-center gap-2 pb-4 border-b border-b-gray-700"
              >
                <div className="w-[50px] h-[50px] rounded-md bg-dark-blue text-white text-[20px] flex items-center justify-center">
                  <img
                    src={element.logo}
                    className="w-[35px] rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="text-base font-medium text-white capitalize font-jakarta">
                    {element?.companyName}
                  </h4>
                  {/* <p className="text-xs text-slate font-jakarta">{element.bio}</p> */}
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default FeaturedCompanies;
