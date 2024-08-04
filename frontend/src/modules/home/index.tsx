// Components
import Hero from "./component/Hero";
import JobStack from "./component/JobStack";
import ExploreJob from "./component/ExploreJob";
import PopularJob from "./component/PopularJob";
import BlogSection from "./component/BlogSection";
import PopularCategory from "./component/PopularCategory";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCategory />
      <PopularJob />
      <JobStack />
      <BlogSection />
      <ExploreJob />
    </>
  );
};

export default Home;
