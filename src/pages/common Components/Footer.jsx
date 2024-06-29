import logo from "../../assets/logo-udemy.svg";
export default function Footer() {
  return (
    <div className="flex justify-between bg-gray-700 px-12 py-6 text-slate-200">
      <div className="flex gap-10 mb-10">
        <ul>
          <li>Udemy Business</li>
          <li>Teach on Udemy</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Blog</li>
          <li>Help and Support</li>
          <li>Affiliate</li>
          <li>Investors</li>
        </ul>
        <ul>
          <li>Terms</li>
          <li>Privacy policy</li>
          <li>Cookies Settings</li>
          <li>Sitemap</li>
          <li>Accessibility Statement</li>
        </ul>
      </div>
      <div className="h-10">
        <img src={logo} alt="" className="h-full" />
      </div>
    </div>
  );
}
