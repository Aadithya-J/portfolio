import { RiReactjsLine } from "react-icons/ri"
import { RiNextjsLine } from "react-icons/ri"
import { RiNodejsLine } from "react-icons/ri"
import { DiMongodb } from "react-icons/di"
import { SiExpress } from "react-icons/si"
import { FaGolang } from "react-icons/fa6"
import { SiPostgresql } from "react-icons/si"
import { motion } from "framer-motion"



const iconVariants = (duration) => ({
  initial: {
    y: Math.random() > 0.5 ? 10 : -10,
  },
  animate: {
    y: Math.random() > 0.5 ? [10,-10] : [-10,10],
    transition:{
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800">
      <motion.h2 
        whileInView= {{opacity: 1, y: 0}}
        initial= {{opacity: 0,y: -80}}
        viewport={{ once: true }}
        transition= {{duration: 0.5}}
        className="my-20 text-center text-4xl">
          Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.35)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.35)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-7xl" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-700" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.65)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.45)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostgresql className="text-7xl text-cyan-600" />
        </motion.div>
        <motion.div 
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGolang className="text-7xl text-cyan-700" />
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies