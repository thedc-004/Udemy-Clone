import img1 from "../../../assets/image-1.jpeg";

export default function CourseSlider() {
  const tempArr = new Array(10).fill(0);

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold pt-5 mb-5">Recommended for you</h2>
      {/* Course Slider Div */}
      <div className="flex h-[300px] gap-4 overflow-x-scroll pb-2">
        {/* Item div */}
        {tempArr.map(() => {
          return (
            <div className="h-full w-[275px] shrink-0 bg-slate-200">
              <div className="h-1/2 w-full">
                <img src={img1} alt="" className="object-cover h-full w-full" />
              </div>
              <div className="h-1/2 p-3">
                <h4 className="font-semibold text-lg">
                  Database Management Sys
                </h4>
                <p className="text-sm text-slate-500 mb-2">Vignesh Shekhar</p>
                <p className="font-medium mb-1">Rating : 4.6</p>
                <p className="font-medium">₹ 499</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
