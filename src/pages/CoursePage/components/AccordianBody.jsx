/* eslint-disable react/prop-types */
import { LuMonitorPlay } from "react-icons/lu";

export default function AccordianBody({ contentBodyData }) {
  return (
    <div className="bg-white">
      {contentBodyData.map((data) => (
        <div>
          <div className="flex items-center gap-3 p-2 text-sm">
            <span>
              <LuMonitorPlay />
            </span>
            {data.type === "link" ? (
              data.title
            ) : (
              <a href={data.url} className="underline text-[#5123c3]">
                {data.title}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
