import { HERO_CONTENT } from "../constants"
import LaptopComponent from "./LaptopComponent"
import { motion } from "framer-motion"

const container = (delay,x) => ({
  hidden: {
    x:x,
    opacity:0
  },
  visible: {
    x:0,
    opacity:1,
    transition: {
      delay: delay,
      duration: 0.5
    }
  }
})

const Hero = () => {
  const randomDelay = Math.random() * (1 - 0.5) + 0.5;
  return (
    <div className="border-b border-neutral-900 pb-4 mb-18">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
              variants={container(0.5,-100)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                Aadithya Jayakaran
            </motion.h1>
            <motion.span 
              variants={container(0.75,-100)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                Full Stack Developer
            </motion.span>
            <motion.p 
              variants={container(1,-100)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
                {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2">
          <motion.div 
            variants={container(randomDelay,100)}
            initial="hidden"
            animate="visible"
            className="flex justify-center"> 
              <LaptopComponent />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero