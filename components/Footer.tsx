import {PiTiktokLogo} from "react-icons/pi";
import {BsWhatsapp} from "react-icons/bs";
import { SlSocialYoutube, SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className=" inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
        <a href="https://wa.me/+59175923339" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <BsWhatsapp />
            </span>
        </a>
        <a href="https://wa.me/+59175923339" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialYoutube />
            </span>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100094527550396" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialFacebook />
            </span>
        </a>
        <a href="https://wa.me/+59175923339" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
            </span>
        </a>
        <a href="https://wa.me/+59175923339" target="_blank">
            <span className="w-10 h-10 text-xl bg-hoverColor border-[1px] border-zinc-700 hover:border-textGreen text-zinc-200 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <PiTiktokLogo />
            </span>
        </a>
    </div>
  )
}

export default Footer