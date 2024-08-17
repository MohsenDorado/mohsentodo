import { IconType } from "react-icons";
import { BsFillLightningFill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaDollarSign, FaRegSmile } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { PiMaskHappyThin } from "react-icons/pi";
import { TbBrandOpenSource } from "react-icons/tb";

   type Feature = {
        name: string;
        url:string;
        description: string;
        icon: IconType; // Adjust the type according to your actual icon component type
      };
const getFeatures=():Feature[]=>{


const features:Feature[] = [
  {
    name: "Fast Auth",
    url:"no-auth-needed",
    description:
      "Earn a fast badge for a website needs a lot of effort and many things should be considered. In my todo app MohsenTodo you do not have to take many steps to start working with the actuall app. Actually if you do not need an account to save your progress you can immediately start working with MohsenTodo in no time...",
    icon: BsFillLightningFill 
  },
  {
    name: "Clean UI UX",
    url:"clean-ui-ux",

    description:"Maybe the MohsenTodo aint that kinna great looking one but you can find everything you need in no more than 2 clicks or 10 seconds. This alone makes us one of the best UI UX designed Todo apps in the galaxy ",
    icon: PiMaskHappyThin    

  },
  {
    name: "Phone app",
    url:"phone-app",

    description:"Is MohsenTodo has a phone app downloadable for IOS or Android? Well... think again. aint this website alone looks like a swift or maybe a kotlin native mobile app?",
    icon: CiMobile3  
  },
  
  {
    name: "Open Source",
    url:"open-source",

    description:"MohsenTodo is fully open source and the whole code base is available in my github account MohsenDorado which is owns by me Mohsen Khojasteh nejad! ",
    icon: TbBrandOpenSource  
  },
  
  {
    name: "Free",
    url:"free",

    description:"MohsenTodo is not cheap with budget friendlly plans of course... It is completely absolutely free! MohsenTodo is also opensource and copyright free so feel free to share and use the source code as well.",
    icon: FaDollarSign  
  }
];
return features;
}
export default getFeatures;