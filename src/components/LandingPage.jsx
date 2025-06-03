import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => setIsHovered(true);
  const handleHoverEnd = () => setIsHovered(false);

  const Button = ({ children }) => (
    <motion.div
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      className="relative overflow-hidden px-5 py-2 border-[2px] border-zinc-700 rounded-full font-light text-md uppercase cursor-pointer"
      animate={{
        backgroundColor: isHovered ? "#ffffff" : "",
        color: isHovered ? "" : "#ffffff",
      }}
      transition={{ duration: 0.6 }}
    >
      <span className="relative z-10 mix-blend-difference">{children}</span>
    </motion.div>
  );

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.8" className="w-full h-screen bg-zinc-800 pt-1">
      <div className="textstructure mt-40 px-[50px]">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="w-fit flex">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                  }}
                  className="relative top-[1vw] w-[9vw] h-[6vw] rounded-xl overflow-hidden mr-2 bg-[url(https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg)] bg-cover"
                />
              )}
              <h1 className='font-["grotesk"] leading-[7vw] font-semibold uppercase text-[9vw]'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-[50px]">
        {["For public and private companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}

        <div className="group flex justify-between items-center gap-5">
          <Button>start the project</Button>
          <motion.div
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
            className="relative w-10 h-10 flex justify-center items-center rounded-full border-[2px] border-zinc-700 cursor-pointer overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
            />
            <FaArrowUpLong
              className={`relative z-10 transition-colors duration-300 rotate-45 ${
                isHovered ? "text-black" : "text-white"
              }`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
