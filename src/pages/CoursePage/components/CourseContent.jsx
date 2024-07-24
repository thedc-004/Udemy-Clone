import Accordian from "./Accordian";
import { courseContentArr } from "../../../const/constants";

export default function CourseContent() {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">CourseContent</h2>
      <div className="flex justify-between">
        <p className="text-sm">
          44 sections • 373 lectures • 61h 44m total length
        </p>
        <button type="button" className="text-sm font-bold text-[#3b198f]">
          Expand All Section
        </button>
      </div>
      <div className="mt-5 border-b border-gray-500">
        {courseContentArr.map((courseContent) => (
          <Accordian courseContent={courseContent} />
        ))}
      </div>
    </div>
  );
}

// TODO: Have to add the max limit of showing the accordians
