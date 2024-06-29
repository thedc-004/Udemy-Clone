export default function SubHeader() {
  const subMenu = [
    "Development",
    "Business",
    "Finance & Accounting",
    "IT & Software",
    "Office Productivity",
    "Personal Development",
    "Design",
    "Marketing",
    "Health & Fitness",
    "Music",
  ];
  return (
    <div className="flex gap-3 justify-center shadow-slate-300 shadow-lg">
      {subMenu.map((item) => (
        <div className="p-3">{item}</div>
      ))}
    </div>
  );
}
