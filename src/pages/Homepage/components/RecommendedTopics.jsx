export default function RecommendedTopics() {
  const topicsArr = [
    "Coding interview",
    "Data Structures",
    "Algorithms",
    "Software Engineering",
    "Java Algorithm",
    "Ruby on Rails",
    "Ruby(programming language)",
    "Web App Development",
    "RSpec",
    "CoffeeScript",
  ];
  return (
    <div>
      <h2 className="text-3xl font-bold mt-5 pb-5">
        Recommended Courses For You
      </h2>
      <div className="flex gap-5 flex-wrap">
        {topicsArr.map((item, index) => {
          return (
            <div
              className="w-1/6 h-16 p-5 bg-slate-300 flex items-center justify-center"
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
