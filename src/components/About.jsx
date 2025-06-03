import { motion, scale, useAnimation } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function About() {
    const imgRef = useRef(null);
    const controls = useAnimation();

    const handleHoverStart = () => {
        controls.start("hover");
    };

    const handleHoverEnd = () => {
        controls.start("rest");
    };

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.05" className='w-full px-[50px] py-20 bg-[#ff9841] rounded-2xl text-black'>
            <h1 className='text-[4vw] leading-[4.5vw] tracking-tight pr-[6vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full border-t-[1px] border-[#8f6441] mt-20'>
                <div className='w-full mt-3 justify-center grid grid-cols-12 gap-6 '>
                    <div className='capitalize w-full col-span-6 grid-flow-row-dense'>
                        what can you expect:
                    </div>
                    <div className='col-span-3'>
                        <p className='mb-8'>We partner with the companies and startups who make the world go round — they drive the net-zero economy, revolutionize crypto treasury management, build photonic chips, and open Michelin-starred restaurants</p>
                        <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                    </div>
                    <div className='col-span-1'></div>
                    <div className='s flex flex-col'>
                        <div className='mt-10 mb-6'>S:</div>
                        {["Instagram", "facebook", "behance", "Linkedin"].map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    className="relative w-fit cursor-pointer overflow-hidden"
                                    whileHover="hover"
                                    initial="initial"
                                    animate="initial"
                                >
                                    <a href='' className='relative z-10'>{item}</a>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[1px] bg-black"
                                        variants={{
                                            initial: { scaleX: 1, originX: 1 },
                                            hover: { scaleX: 0, originX: 1, transition: { duration: 0.3 } }
                                        }}
                                        style={{ width: '100%' }}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[1px] bg-black"
                                        variants={{
                                            initial: { scaleX: 0, originX: 0 },
                                            hover: { scaleX: 1, originX: 0, transition: { delay: 0.3, duration: 0.3 } }
                                        }}
                                        style={{ width: '100%' }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className='w-full h-fit border-t-[1px] border-[#8f6441] mt-[8rem] pt-[2rem] flex'>
                <div className='w-1/2'>
                    <h1 className='text-[4vw] mb-4 leading-none'>Our approach:</h1>
                    <button onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd} className="relative w-52 h-16 bg-zinc-800 rounded-full text-white flex items-center justify-between pl-6 pr-2 group overflow-hidden ">
                        <span className="z-10 text-white tracking-wide font-medium">READ MORE</span>
                        <div className="w-12 h-12 z-10 flex items-center justify-center">
                            <div className="w-3 h-3  bg-white rounded-full transform scale-100 group-hover:scale-400 transition-transform duration-300 ease-in-out flex items-center justify-center">
                                <FaArrowUpLong className="text-black text-[4px] opacity-0 rotate-45 group-hover:opacity-100 transition-all duration-300" />
                            </div>
                        </div>
                        <span
                            className=" absolute left-0 bottom-0 w-full h-0 bg-zinc-950 rounded-full group-hover:h-full transition-all duration-300 ease-in-out z-0" />
                    </button>
                </div>
                <motion.div
                    className='w-1/2 h-[70vh] rounded-2xl overflow-hidden'
                    variants={{
                        rest: { scale: 1 },
                        hover: { scale: 0.95 },
                    }}
                    initial="rest"
                    animate={controls}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <motion.div
                        className='w-full h-full bg-cover bg-center'
                        style={{
                            backgroundImage: "url(https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg)"
                        }}
                        variants={{
                            rest: { scale: 1 },
                            hover: { scale: 1.08 },
                        }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default About