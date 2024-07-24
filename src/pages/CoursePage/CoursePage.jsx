import TopicCard from "./components/SkillsCard";
import HeadCard from "./components/HeadCard";
import FeatureCard from "./components/FeatureCard";
import CourseContent from "./components/CourseContent";

export default function CoursePage() {
  return (
    <div>
      <HeadCard />
      <div className="pl-[20%] pr-[40%] mt-6 mb-10">
        <TopicCard />
        <FeatureCard />
        <CourseContent />
      </div>
    </div>
  );
}
