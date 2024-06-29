import img1 from "../../../assets/image-1.jpeg";
import { CiPlay1 } from "react-icons/ci";

export default function LetsStarSlider() {
  const tempArr = new Array(10).fill(0);
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-semibold mb-5">Let's start learning</h2>
      {/* Slider Item */}
      <div className="flex overflow-x-scroll gap-4 pb-2">
        {tempArr.map(() => {
          return (
            <div className="w-[400px] h-[150px] border-slate-500 border flex shrink-0">
              <div className="w-1/3 h-full relative">
                <img src={img1} alt="" className="h-full w-full object-cover" />
                <div className="absolute top-0 h-full w-full flex justify-center items-center">
                  <button className="p-3 bg-slate-300 rounded-full text-black h-max">
                    <CiPlay1 />
                  </button>
                </div>
              </div>
              <div className="w-full h-full p-2 flex flex-col justify-between">
                <div>
                  <p className="text-slate-500">
                    JavaScript Algorithms and Data Stuct...
                  </p>
                  <h4 className="text-xl font-semibold ">
                    175. Depth first Algorithm
                  </h4>
                </div>
                <div className="flex text-slate-500">
                  <h6 className="font-semibold">Lecture :</h6>
                  <p> 5m</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
