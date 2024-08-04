// Components
import Hero from "./component/Hero";
import JobStack from "./component/JobStack";
import PopularJob from "./component/PopularJob";
import PopularCategory from "./component/PopularCategory";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCategory />
      <PopularJob />
      <JobStack />
    </>
  );
};

export default Home;
