import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Marketing from './Services/Marketing'
import Design from './Services/Design'
import Branding from './Services/Branding'
import WebDev from './Services/WebDev'
import Other from './Services/Other'

const Services = () => {
    const [serviceBranding, setServiceBranding] = useState(false);
    const [serviceDesign, setServiceDesign] = useState(true);
    const [serviceMarketing, setServiceMarketing] = useState(false);
    const [serviceOther, setServiceOther] = useState(false);
    const [serviceWebDev, setServiceWebDev] = useState(false);

    const handleBranding = () =>{
        setServiceBranding(true);
        setServiceDesign(false);
        setServiceMarketing(false);
        setServiceOther(false);
        setServiceWebDev(false);
    }
    const handleDesign = () =>{
        setServiceBranding(false);
        setServiceDesign(true);
        setServiceMarketing(false);
        setServiceOther(false);
        setServiceWebDev(false);
    }
    const handleMarketing = () =>{
        setServiceBranding(false);
        setServiceDesign(false);
        setServiceMarketing(true);
        setServiceOther(false);
        setServiceWebDev(false);
    }
    const handleOther = () =>{
        setServiceBranding(false);
        setServiceDesign(false);
        setServiceMarketing(false);
        setServiceOther(true);
        setServiceWebDev(false);
    }
    const handleWebDev = () =>{
        setServiceBranding(false);
        setServiceDesign(false);
        setServiceMarketing(false);
        setServiceOther(false);
        setServiceWebDev(true);
    }
  return (
    <section
        id='services'
        className='max-w-containerSmall mx-auto py-10 lgl:py-32'
    >
        <SectionTitle title='Nuestros servicios' titleNo='01' />
        <div className='w-full mt-10 flex flex-col md:flex-row gap-16'>
            <ul className='md:w-32 flex flex-col'>
                <li 
                    onClick={handleDesign}
                    className={`${serviceDesign ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Diseño
                </li>
                <li 
                    onClick={handleBranding}
                    className={`${serviceBranding ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Branding
                </li>
                <li 
                    onClick={handleMarketing}
                    className={`${serviceMarketing ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Marketing
                </li>
                <li 
                    onClick={handleWebDev}
                    className={`${serviceWebDev ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Desarrollo Web
                </li>
                <li 
                    onClick={handleOther}
                    className={`${serviceOther ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
                >
                    Otros
                </li>
            </ul>
            {serviceDesign && <Design />}
            {serviceBranding && <Branding />}
            {serviceMarketing && <Marketing />}
            {serviceWebDev && <WebDev />}
            {serviceOther && <Other />}
        </div>
    </section>
  )
}

export default Services