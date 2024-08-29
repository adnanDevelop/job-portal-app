import { motion } from "framer-motion";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";

// Icons
import { BsEye } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { ImStopwatch } from "react-icons/im";
import { MdOutlineDateRange } from "react-icons/md";
import { FaPhone, FaRegFileAlt } from "react-icons/fa";

// Apis
import { useListAllApplyJobsQuery } from "../../../../redux/features/applyJobApi";

const ViewsStats = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const { data: applicationData } = useListAllApplyJobsQuery({});

  const acceptecApplications = applicationData?.data?.filter(
    (element: { status: string }) => element.status === "accepted"
  );

  const rejectedApplications = applicationData?.data?.filter(
    (element: { status: string }) => element.status === "rejected"
  );
  const pendingApplications = applicationData?.data?.filter(
    (element: { status: string }) => element.status === "pending"
  );

  const content = [
    { title: "Profile Viewed", value: user?.totalViews || 0, icon: <BsEye /> },
    {
      title: "Unread Message",
      value: pendingApplications?.length || 0,
      icon: <BiChat />,
    },
    {
      title: "Application Submitted",
      value: applicationData?.data?.length || 0,
      icon: <FaRegFileAlt />,
    },
    {
      title: "Answered",
      value: acceptecApplications?.length || 0,
      icon: <MdOutlineDateRange />,
    },
    {
      title: "Rejected",
      value: rejectedApplications?.length || 0,
      icon: <ImStopwatch />,
    },
    {
      title: "Accepted",
      value: acceptecApplications?.length || 0,
      icon: <FaPhone />,
    },
  ];

  return (
    <section className="grid w-full grid-cols-12 gap-4">
      {content?.map((element, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 * index }}
            whileInView={{ opacity: 1, scale: 1 }}
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-md md:col-span-4 sm:col-span-6 col-span-full xl:col-span-2 bg-light-blue"
          >
            <div className="w-[50px] h-[50px] flex items-center justify-center mb-3 mx-auto rounded-full bg-[#0596683e] text-green text-[20px]">
              {element?.icon}
            </div>
            <h3 className="text-white text-[25px] font-bold font-jakarta leading-none mb-1">
              {element.value}
            </h3>
            <p className="text-sm text-slate font-jakarta">{element?.title}</p>
          </motion.div>
        );
      })}
    </section>
  );
};

export default ViewsStats;
