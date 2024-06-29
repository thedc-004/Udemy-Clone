import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoSrc from "../../assets/logo-udemy.svg";
import SubHeader from "../Homepage/components/SubHeader";
export default function Header() {
  return (
    <>
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
        <div className="text-lg">
          <FaRegHeart />
        </div>
        <div className="text-lg">
          <FiShoppingCart />
        </div>
        <div className="text-lg">
          <IoIosNotificationsOutline />
        </div>
        <div className="text-lg">
          <Link to={"/profile"}>
            <FaCircle />
          </Link>
        </div>
      </div>
      <hr />
    </>
  );
}
