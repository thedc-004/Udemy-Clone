import TopicCard from "./components/SkillsCard";
import HeadCard from "./components/HeadCard";
import FeatureCard from "./components/FeatureCard";
import CourseContent from "./components/CourseContent";
import Prerequisite from "./components/Prerequisite";
import Description from "./components/Description";

export default function CoursePage() {
  return (
    <div>
      <HeadCard />
      <div className="pl-[20%] pr-[40%] mt-6 mb-10">
        <TopicCard />
        <FeatureCard />
        <CourseContent />
        <Prerequisite />
        <Description />
      </div>
    </div>
  );
}

// TODO:  1) To Create Instructor section
//        2) to create Buy Card
