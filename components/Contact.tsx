import React from "react"
import {BsWhatsapp} from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center">
        <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
            04. Contactanos
        </p>
        <h2 className="font-titleFont text-5xl text-center font-semibold">Ponte en contacto</h2>
        <p className=" max-w-[600px] text-center text-textDark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam distinctio fugiat minus esse nulla nemo fugit est modi magni? Quos nisi ab veniam est provident incidunt, repellat voluptate vero beatae.
        </p>
        <a href="https://wa.me/+59175923339" target="_blank">
            <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-lg text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
                <span className="w-10 h-10 text-xl inline-flex items-center justify-center">
                    <BsWhatsapp />
                </span>
                WhatsApp
            </button>
        </a>
    </section>
  )
}

export default Contact