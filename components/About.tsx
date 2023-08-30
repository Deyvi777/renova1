import { aboutImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle"
import { BsCheck2Square } from "react-icons/bs";

const About = () => {
  return (
    <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="Sobre Nosotros" titleNo="02" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                    Bienvenido/a a <span className="text-textGreen">Renova</span>: Tu aliado creativo para el éxito empresarial.
                </p>
                <p>
                En Renova, creemos en el poder de la creatividad y la innovación para transformar marcas y negocios. Somos una agencia de diseño y marketing dedicada a impulsar el crecimiento de nuestros clientes mediante estrategias vanguardistas y soluciones visuales impactantes.
                </p>
                <p>
                <span className="text-textGreen">Nuestra misión es simple:</span> Reinventar y revitalizar la presencia en línea y fuera de línea de las empresas, llevándolas al siguiente nivel de competitividad y éxito. Con un equipo de profesionales apasionados y talentosos, nos esforzamos por convertir ideas en realidades tangibles que dejen una huella perdurable en la mente de su audiencia.
                </p>
            </div>
            <div className="w-full lgl:w-1/3 h-60 relative group">
                <div className="absolute w-96 h-60 -left-6 -top-6 rounded-lg">
                    <Image 
                    className="rounded-lg h-full object-cover" 
                    src={aboutImg}
                    alt="aboutImg"
                    />
                </div>
            </div>
        </div>
        <p><span className="text-textGreen">¿Qué nos hace diferentes?</span></p>
        <ul className="w-full text-base text-textDark font-medium flex flex-col gap-4">
            <li className="flex items-center gap-8">
                <span className="text-textGreen">
                    <BsCheck2Square />
                </span>
                <p>
                    <span className="text-textGreen">Enfoque centrado en el cliente: </span>
                    Cada proyecto que emprendemos comienza con una profunda comprensión de las necesidades y objetivos específicos de nuestros clientes. Escuchamos atentamente y colaboramos estrechamente para proporcionar soluciones a medida que generen resultados reales y medibles.
                </p>
            </li>
            <li className="flex items-center gap-8">
                <span className="text-textGreen">
                    <BsCheck2Square />
                </span>
                <p>
                    <span className="text-textGreen">Creatividad sin límites: </span>
                    Nuestro equipo de diseñadores gráficos, expertos en marketing y estrategas creativos piensan más allá de lo convencional. Creamos experiencias visuales cautivadoras y mensajes persuasivos que conectan emocionalmente con el público y generan un impacto duradero.
                </p>
            </li>
            <li className="flex items-center gap-8">
                <span className="text-textGreen">
                    <BsCheck2Square />
                </span>
                <p>
                    <span className="text-textGreen">Innovación constante: </span>
                    Estamos al tanto de las últimas tendencias y tecnologías en diseño y marketing. Nos esforzamos por estar a la vanguardia del cambio, adoptando herramientas y enfoques innovadores que garanticen el éxito de nuestros clientes en un entorno empresarial en constante evolución.
                </p>
            </li>
            <li className="flex items-center gap-8">
                <span className="text-textGreen">
                    <BsCheck2Square />
                </span>
                <p>
                    <span className="text-textGreen">Resultados impulsados por datos: </span>
                    La creatividad es esencial, pero también sabemos que los números no mienten. Utilizamos datos y análisis para evaluar el rendimiento de nuestras estrategias y tomar decisiones informadas que optimicen el retorno de la inversión de nuestros clientes.
                </p>
            </li>
            <li className="flex items-center gap-8">
                <span className="text-textGreen">
                    <BsCheck2Square />
                </span>
                <p>
                    <span className="text-textGreen">Pasión por el éxito de nuestros clientes: </span>
                    Consideramos el éxito de nuestros clientes como nuestro propio éxito. Nuestro compromiso inquebrantable con la excelencia y la entrega oportuna nos ha permitido forjar relaciones duraderas y fructíferas con empresas de diversos sectores y tamaños.
                </p>
            </li>
            <li className="flex items-center gap-8">
            </li>
            <p>En Renova, nos apasiona lo que hacemos y nos sentimos honrados de ser parte del viaje de crecimiento y transformación de nuestros clientes. Si buscas una agencia creativa que te ayude a destacar en un mundo cada vez más competitivo, estás en el lugar correcto.</p>
            <p>Permítenos ser tu socio confiable en el camino hacia el éxito. ¡Juntos, daremos vida a tus ideas y haremos brillar tu marca!</p>
        </ul>
    </section>
  )
}

export default About