import CourseSlider from "./components/CourseSlider";
import Greeting from "./components/Greeting";
import Header from "../common/Header";
import IntroSlider from "./components/IntroSlider";
import LetsStartSlider from "./components/LetsStartSlider";
import Footer from "../common/Footer";
import RecommendedTopics from "./components/RecommendedTopics";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="px-80 my-10">
        <Greeting />
        <IntroSlider />
        <LetsStartSlider />
        <CourseSlider />
        <RecommendedTopics />
      </div>
      <Footer />
    </div>
  );
}
