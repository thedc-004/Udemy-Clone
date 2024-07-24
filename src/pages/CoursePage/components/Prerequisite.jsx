import { prerequisiteArr } from "../../../const/constants";

export default function Prerequisite() {
  return (
    <div>
      <h2 className="text-xl font-bold mt-5 mb-3">Requirements</h2>
      <ul className="list-disc pl-5">
        {prerequisiteArr.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
