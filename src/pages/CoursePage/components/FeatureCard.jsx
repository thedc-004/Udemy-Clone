import { PiTelevisionSimpleBold } from "react-icons/pi";
import {
  IoNewspaperOutline,
  IoInfinite,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdOutlineCloudDownload, MdOutlineArticle } from "react-icons/md";
import { GoTrophy } from "react-icons/go";

export default function FeatureCard() {
  const featureArr = [
    {
      icon: <PiTelevisionSimpleBold />,
      description: "54 hours on-demand video",
    },
    {
      icon: <IoNewspaperOutline />,
      description: "Assignments",
    },
    {
      icon: <MdOutlineArticle />,
      description: "226 articles",
    },
    {
      icon: <MdOutlineCloudDownload />,
      description: "147 downloadable resources",
    },
    {
      icon: <IoPhonePortraitOutline />,
      description: "Access on mobile and TV",
    },
    {
      icon: <IoInfinite />,
      description: "Full lifetime access",
    },
    {
      icon: <GoTrophy />,
      description: "Certificate of completion",
    },
  ];
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-3">This course includes:</h2>
      <div className="flex flex-wrap">
        {featureArr.map((feature) => (
          <div className="w-1/2 flex items-center gap-2 mt-2">
            <span className="text-xl">{feature.icon}</span>
            {feature.description}
          </div>
        ))}
      </div>
    </div>
  );
}
