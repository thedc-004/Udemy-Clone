import { Outlet } from "react-router-dom";
import Header from "./common Components/Header";
import Footer from "./common Components/Footer";

export default function Pages() {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
