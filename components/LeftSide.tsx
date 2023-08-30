import {PiTiktokLogo} from "react-icons/pi";
import {BsWhatsapp} from "react-icons/bs";
import { SlSocialYoutube, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";


const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
        <div className="flex flex-col gap-4">
            <a href="https://wa.me/+59175923339" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <BsWhatsapp />
                </span>
            </a>
            <a href="https://www.youtube.com/@deyvirodriguezterceros262/featured" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialYoutube />
                </span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100094527550396" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialFacebook />
                </span>
            </a>
            <a href="#" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <SlSocialInstagram />
                </span>
            </a>
            <a href="https://github.com/Deyvi777" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                    <PiTiktokLogo />
                </span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
}

export default LeftSide