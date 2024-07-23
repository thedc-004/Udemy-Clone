import TopicCard from "./components/SkillsCard";
import HeadCard from "./components/HeadCard";

export default function CoursePage() {
  return (
    <div>
      <HeadCard />
      <div className="pl-[20%] pr-[40%] mt-6 mb-10">
        <TopicCard />
      </div>
    </div>
  );
}
