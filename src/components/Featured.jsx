import { easeInOut, motion, useAnimation } from 'framer-motion'
import React, { useRef } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Featured() {
  const textAnimation = [useAnimation(), useAnimation()]
  const imageRefs = [useRef(null), useRef(null)]

  const handleHover = (index) => {
    textAnimation[index].start({ y: "0" })
    if (imageRefs[index].current) {
      imageRefs[index].current.style.transform = 'scale(0.95)'
      imageRefs[index].current.style.zIndex = '100'
    }
  }

  const handleHoverEnd = (index) => {
    textAnimation[index].start({ y: "100%" })
    if (imageRefs[index].current) {
      imageRefs[index].current.style.transform = 'scale(1)'
      imageRefs[index].current.style.zIndex = '20'
    }
  }

  const controls = useAnimation()

  const buttonHoverStart = () => {
    controls.start("hover")
  }

  const buttonHoverEnd = () => {
    controls.start("rest")
  }

  return (
    <div className='w-full bg-zinc-800 py-[15vh] rounded-tr-3xl rounded-tl-3xl'>
      <div className='border-b-2 border-zinc-700 text-[8vh]'>
        <div className='mb-6 px-[50px]'>Featured projects</div>
      </div>
      <div className='w-full px-[50px] py-[8vh]'>
        <div className='h-screen w-full flex gap-5'>

          <div className='w-1/2 h-full'>
            <div className='flex items-center'>
              <div className='rounded-full bg-white h-2 w-2 m-1'></div>
              <div className='uppercase font-extralight'>salience labs</div>
            </div>
            <motion.div
              ref={imageRefs[0]}
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              initial={{ scale: 1 }}
              transition={{ ease: easeInOut, duration: 1 }}
              className='relative transition-transform duration-500 ease-in-out overflow-visible bg-[url(https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png)] bg-cover h-[80vh] w-full my-5 rounded-2xl'
            >
              <h1 className='absolute flex text-9xl overflow-hidden text-[#f15025] leading-none font-[grotesk] left-full -translate-y-1/2 -translate-x-1/2 z-10 top-1/2 uppercase w-[150vh] justify-center'>
                {"salience labs".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    className='inline-block'
                    initial={{ y: "100%" }}
                    animate={textAnimation[0]}
                    transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.01 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            <div className='flex gap-3'>
              <a href=''
                className="relative justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  brand identity
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
              <a href=''
                className="relative justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  pitch deck
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
            </div>
          </div>

          <div className='w-1/2 h-full'>
            <div className='flex items-center'>
              <div className='rounded-full bg-white h-2 w-2 m-1'></div>
              <div className='uppercase font-extralight'>cardboard spaceship</div>
            </div>
            <motion.div
              ref={imageRefs[1]}
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              initial={{ scale: 1 }}
              transition={{ ease: easeInOut, duration: 1 }}
              className='relative transition-transform duration-500 ease-in-out overflow-visible bg-[url(https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png)] bg-cover h-[80vh] w-full my-5 rounded-2xl'
            >
              <h1 className='absolute flex text-9xl overflow-hidden text-[#f15025] leading-none font-[grotesk] right-full -translate-y-1/2 translate-x-1/2 z-10 top-1/2 uppercase w-[150vh] justify-center '>
                {"cardboard spaceship".split('').map((item, index) => (
                  <motion.span
                    key={index}
                    className='inline-block'
                    initial={{ y: "100%" }}
                    animate={textAnimation[1]}
                    transition={{ ease: [0.64, 0, 0.78, 0], delay: index * 0.01 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </motion.div>
            <div className='flex gap-3'>
              <a href=''
                className="relative justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  branded template
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
              <a href=''
                className="relative justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  sales deck
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
              <a href=''
                className="relative justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  social media template
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
            </div>
          </div>

        </div>

        <div className='w-full flex justify-center items-center'>
          <button onMouseEnter={buttonHoverStart} onMouseLeave={buttonHoverEnd} className="relative w-70 h-16 bg-zinc-800 border-2 border-white rounded-full text-white flex items-center justify-between pl-6 pr-2 group overflow-hidden ">
            <span className="z-10 text-white text-[2vh] tracking-wide uppercase group-hover:text-black">View All Case Studies</span>
            <div className="w-12 h-12 z-10 flex items-center justify-center">
              <div className="w-3 h-3  bg-white rounded-full transform scale-100 group-hover:scale-400 group-hover:bg-zinc-800 transition-transform duration-300 ease-in-out flex items-center justify-center">
                <FaArrowUpLong className="text-black text-[4px] opacity-0 rotate-45 group-hover:opacity-100 group-hover:text-white transition-all duration-300" />
              </div>
            </div>
            <span
              className=" absolute left-0 bottom-0 w-full h-0 bg-white rounded-full group-hover:h-full transition-all duration-300 ease-in-out z-0" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
