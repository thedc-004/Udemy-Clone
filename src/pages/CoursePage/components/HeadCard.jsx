import { IoStarSharp } from "react-icons/io5";

export default function HeadCard() {
  return (
    <div className="pl-[20%] pr-[40%] py-9 w-full bg-[#2d2f31] text-white">
      <h2 className="text-3xl font-bold">
        100 Days of Code: The Complete Python Pro Bootcamp
      </h2>
      <p className="mt-5 mb-3">
        Master Python by building 100 projects in 100 days. Learn data science,
        automation, build websites, games and apps!
      </p>
      <p className="flex">
        <span>5</span>
        <span className="ml-1 mr-2 flex items-center">
          <IoStarSharp className="inline" />
          <IoStarSharp className="inline" />
          <IoStarSharp className="inline" />
          <IoStarSharp className="inline" />
          <IoStarSharp className="inline" />
        </span>
        <div>
          {
            // temporary added the google link to avoid the styling guide error
          }
          <a
            href="https://www.google.com"
            className="underline text-[#c0c4fc] mr-2"
          >
            10101 ratings
          </a>
          <span>1,330,168 students</span>
        </div>
      </p>
      <div className="mt-3">Created by Dr. Angela Yu</div>
    </div>
  );
}
