import CourseSlider from "./components/CourseSlider";
import Greeting from "./components/Greeting";
import SubHeader from "./components/SubHeader";
import IntroSlider from "./components/IntroSlider";
import LetsStartSlider from "./components/LetsStartSlider";
import RecommendedTopics from "./components/RecommendedTopics";

export default function Homepage() {
  return (
    <>
      <SubHeader />
      <div className="px-80 my-10">
        <Greeting />
        <IntroSlider />
        <LetsStartSlider />
        <CourseSlider />
        <RecommendedTopics />
      </div>
    </>
  );
}
