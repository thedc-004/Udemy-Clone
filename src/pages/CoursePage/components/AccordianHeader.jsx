/* eslint-disable react/prop-types */

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Header({
  title,
  numberOfLectures,
  numberOfMinutes,
  showDescription,
}) {
  return (
    <div className="flex items-center justify-between px-3 py-5">
      <h4 className="flex items-center font-semibold">
        {showDescription ? (
          <IoIosArrowUp className="mr-3" />
        ) : (
          <IoIosArrowDown className="mr-3" />
        )}
        {title}
      </h4>
      <div className="text-sm">
        {numberOfLectures} Lectures • {numberOfMinutes} min
      </div>
    </div>
  );
}
