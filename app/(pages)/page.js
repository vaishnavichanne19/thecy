

import Design from "./HomePages/Design";
import Feedback from "./HomePages/Feedback";
import HeroSection from "./HomePages/HeroSection";
import Provide from "./HomePages/Provide";
import WhyChooseUs from "./HomePages/WhyChooseUs";

const Home = () => {


  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <Design />
      <Provide />
      <Feedback />
    </main>
  );
};

export default Home;
