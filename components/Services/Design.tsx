import {motion} from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Design = () => {
  return (
    <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4}}
        className="w-full"
    >
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Diseños personalizados acorde a tu marca
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Tipos de diseño
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Diseño de logos y logotipos.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Diseño de letreros
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Edición de imagenes
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Otros.
            </li>
        </ul>
    </motion.div>
  )
}

export default Design