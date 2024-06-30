export default function LeftProfilePage({ handleClick, selectedItem }) {
  const sidebarItems = [
    "View public profile",
    "Profile",
    "Photo",
    "Account Security",
    "Subscription",
    "Payment method",
    "Privacy",
    "Notifications",
    "API clients",
    "Close account",
  ];
  return (
    <div className="w-1/5 pt-5 border-r-slate-500 border-r">
      <div className="text-4xl text-white bg-black w-16 h-16 flex justify-center items-center rounded-full mx-auto">
        DC
      </div>
      <div className="font-semibold text-xl mt-3 mb-6 mx-auto w-fit">
        Dipanshu Choksi
      </div>
      <div>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={
              index === selectedItem
                ? "p-2 bg-slate-900 text-white w-full hover:bg-slate-600 cursor-pointer"
                : "bg-white p-2 hover:bg-slate-600 cursor-pointer hover:text-white"
            }
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
