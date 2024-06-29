import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import img1 from "../../../assets/image-1.jpeg";
export default function Slider() {
  return (
    <div className="bg-cyan-400 h-[450px] relative">
      <img src={img1} alt="" className="h-full w-full" />
      <div className="absolute top-1/2 flex justify-between w-full px-5">
        <button className="text-3xl p-1 text-white bg-black rounded-full">
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button className="text-3xl p-1 text-white bg-black rounded-full">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  );
}
