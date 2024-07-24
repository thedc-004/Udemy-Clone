/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import AccordianBody from "./AccordianBody";
import AccordianHeader from "./AccordianHeader";

export default function Accordian({ courseContent }) {
  const { title, numberOfLectures, numberOfMinutes, body } = courseContent;
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="w-full border border-gray-500 border-b-0 bg-[#eceef0]">
      <button
        type="button"
        onClick={() => setShowDescription(!showDescription)}
        className="w-full h-full"
      >
        <div>
          <AccordianHeader
            title={title}
            numberOfLectures={numberOfLectures}
            numberOfMinutes={numberOfMinutes}
            showDescription={showDescription}
          />
        </div>
      </button>
      {showDescription && <AccordianBody contentBodyData={body} />}
    </div>
  );
}
