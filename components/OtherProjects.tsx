import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import {motion} from "framer-motion";

const OtherProjects = () => {
    const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
        <div className="w-full flex flex-col items-center">
            <h2 className="text-3xl font-titleFont font-semibold">
                Otros Proyectos
            </h2>
            <p className="text-sm font-titleFont text-textGreen">
                Ver los proyectos
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
            <ProjectCard 
                title="Diseño Web"
                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                link="https://www.google.com/"
            />
            <ProjectCard 
                title="Diseño Web"
                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                link="https://www.google.com/"
            />
            <ProjectCard 
                title="Diseño Web"
                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                link="https://www.google.com/"
            />
            {showMore && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <ProjectCard 
                                title="Diseño Web"
                                des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsum corporis cupiditate incidunt omnis perferendis ullam."
                                listItem={["Nexrt Js", "Tailwind", "Responsive"]}
                                link="https://www.google.com/"
                            />
                        </motion.div>
                    </>
                )
            }
        </div>
        <div className="mt-12 flex items-center justify-center">
        {
            showMore ? <button 
                onClick={() => setShowMore(false)}
                className=" w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
                Mostrar menos
            </button> : <button 
                onClick={() => setShowMore(true)}
                className=" w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
                Mostrar más
            </button>
        }    
            
        </div>
    </div>
  )
}

export default OtherProjects