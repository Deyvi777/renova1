import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { tarjeta1, tarjeta2 } from '@/public/assets'
import {ImWhatsapp} from "react-icons/im"
import {SlSocialFacebook} from "react-icons/sl"

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Realizamos los siguientes trabajos' titleNo='03' />
        <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
            {/* Project1 */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="" target='_blank'>
                        <div>
                            <Image
                                className='w-full h-full object-contain'
                                src={tarjeta1}
                                alt="tarjeta1"
                            />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-xl tracking-wide'>
                            Tarjetas Personales
                        </p>
                        <h3 className='text-2xl font-bold'>Mate</h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            Incluye diseño, plastificado mate, impresión doble cara, full color, papel cocuche de 300 gr, entrega a domicilio{" "}
                            <span className='text-textGreen'>Realiza tu pedido</span>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>1.000 unidades</li>
                            <li>por</li>
                            <li>150 Bs.</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a 
                                href="https://www.facebook.com/profile.php?id=100094527550396"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <SlSocialFacebook />
                            </a>
                            <a 
                                href="https://wa.me/+59175923339"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <ImWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project2  */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col md:flex-row-reverse gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="" target='_blank'>
                        <div>
                            <Image
                                className='w-full h-full object-contain'
                                src={tarjeta2}
                                alt="tarjeta2"
                            />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10'>
                        <p className='font-titleFont text-textGreen text-xl tracking-wide'>
                            Tarjetas Personales
                        </p>
                        <h3 className='text-2xl font-bold'>Sectorizado</h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                            Incluye diseño, sectorizado, impresión doble cara, full color, papel cocuche de 300 gr, entrega a domicilio{" "}
                            <span className='text-textGreen'>Realiza tu pedido</span>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>1.000 unidades</li>
                            <li>por</li>
                            <li>250 Bs.</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a 
                                href="https://www.facebook.com/profile.php?id=100094527550396"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <SlSocialFacebook />
                            </a>
                            <a 
                                href="https://wa.me/+59175923339"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <ImWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project3 */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col md:flex-row gap-6'>
                    <a className='w-full xl:w-1/2 h-auto relative group' href="" target='_blank'>
                        <div>
                            <Image
                                className='w-full h-full object-contain'
                                src={tarjeta1}
                                alt="tarjeta1"
                            />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-xl tracking-wide'>
                            Tarjetas Personales
                        </p>
                        <h3 className='text-2xl font-bold'>Mate</h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            Incluye diseño, plastificado mate, impresión doble cara, full color, papel cocuche de 300 gr, entrega a domicilio{" "}
                            <span className='text-textGreen'>Realiza tu pedido</span>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>1.000 unidades</li>
                            <li>por</li>
                            <li>150 Bs.</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a 
                                href="https://www.facebook.com/profile.php?id=100094527550396"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <SlSocialFacebook />
                            </a>
                            <a 
                                href="https://wa.me/+59175923339"
                                className='hover:text-textGreen duration-300'
                                target='_blank'
                            >
                                <ImWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects