// Components
import Hero from "./component/Hero";
import PopularJob from "./component/PopularJob";
import PopularCategory from "./component/PopularCategory";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularCategory />
      <PopularJob />
    </>
  );
};

export default Home;
