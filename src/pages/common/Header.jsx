import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import logoSrc from "../../assets/logo-udemy.svg";
export default function Header() {
  const icons = [
    <FaRegHeart />,
    <FiShoppingCart />,
    <IoIosNotificationsOutline />,
    <FaCircle />,
  ];
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
    <div>
      {/* Header Top */}
      <div className="flex w-full justify-between  items-center p-4">
        <img src={logoSrc} alt="Udemy Logo" width="100" height="100" />
        <div>Categories</div>
        <div className="flex items-center justify-start gap-3 border border-slate-800 px-3 py-2 w-6/12 rounded-3xl">
          <FaSearch />
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="Search anything..."
            className="outline-none w-full"
          />
        </div>
        <div>Udemy Business</div>
        <div>Teach on Udemy</div>
        <div>My Learning</div>
        {icons.map((icon) => (
          <div className="text-lg">{icon}</div>
        ))}
      </div>
      <hr />
      {/* Header Bottom */}
      <div className="flex gap-3 justify-center shadow-slate-300 shadow-lg">
        {subMenu.map((item) => (
          <div className="p-3">{item}</div>
        ))}
      </div>
    </div>
  );
}
