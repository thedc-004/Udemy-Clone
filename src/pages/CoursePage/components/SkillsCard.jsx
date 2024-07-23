import { TiTick } from "react-icons/ti";

export default function SkillsCard() {
  const skillsArr = [
    "Build 16 web development projects for your portfolio, ready to apply for junior developer jobs.",
    "After the course you will be able to build ANY website you want.",
    "Work as a freelance web developer.",
    "Master backend development with Node",
    "Learn the latest technologies, including Javascript, React, Node and even Web3 development.",
    "Build fully-fledged websites and web apps for your startup or business.",
    "Master frontend development with React",
    "Learn professional developer best practices.",
  ];
  return (
    <div className="border border-black p-4">
      <h2 className="text-xl font-semibold">What you&apos;ll learn</h2>
      <ul className="flex flex-wrap mt-5">
        {skillsArr.map((skill) => (
          <li className="flex gap-2 w-1/2 text-wrap">
            <span className="flex pt-1 ">
              <TiTick />
            </span>
            {"  "}
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
