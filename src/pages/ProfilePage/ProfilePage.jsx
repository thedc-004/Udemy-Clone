import { useState } from "react";
import ProfileDiv from "./components/ProfileDiv";
import ProfileNav from "./components/ProfilePageNav";
import PublicProfile from "./components/PublicProfile";
import PhotoDiv from "./components/PhotoDiv";
import CloseAccount from "./components/CloseAccount";
import ApiClients from "./components/ApiClients";
import Notification from "./components/Notification";
import Privacy from "./components/Privacy";
import PaymentMethod from "./components/PaymentMethod";
import Subscription from "./components/Subscription";
import AccountSecurity from "./components/AccountSecurity";

export default function ProfilePage() {
  const [selectedItem, setSelectedItem] = useState(1);
  const itemObj = {
    0: <PublicProfile />,
    1: <ProfileDiv />,
    2: <PhotoDiv />,
    3: <AccountSecurity />,
    4: <Subscription />,
    5: <PaymentMethod />,
    6: <Privacy />,
    7: <Notification />,
    8: <ApiClients />,
    9: <CloseAccount />,
  };
  function handleClick(index) {
    setSelectedItem(index);
  }
  return (
    <div className="my-5">
      <div className="min-h-[80vh] mx-auto w-3/5 border border-slate-500 flex">
        <ProfileNav handleClick={handleClick} selectedItem={selectedItem} />
        <div className="w-full">{itemObj[selectedItem]}</div>
      </div>
    </div>
  );
}
