import React, { useEffect, useRef, useState } from "react";


function ReadyEyes() {
  const [rotateLeft, setRotateLeft] = useState(0);
  const [rotateRight, setRotateRight] = useState(0);

  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const getAngle = (eyeRef) => {
        const rect = eyeRef.current.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = mouseX - eyeCenterX;
        const dy = mouseY - eyeCenterY;

        return (Math.atan2(dy, dx) * (180 / Math.PI) - 180);
      };

      if (leftEyeRef.current && rightEyeRef.current) {
        setRotateLeft(getAngle(leftEyeRef));
        setRotateRight(getAngle(rightEyeRef));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.35" className='w-full bg-[#D1ED76] h-[140vh] rounded-2xl'>
      <div id="ready-wrapper" className="relative pt-[2vw] px-[8vw]">
        <div data-scroll
          data-scroll-sticky
          data-scroll-target="#ready-wrapper"
          data-scroll-call="progress"
          data-scroll-repeat className='heading'>
          <h1 className='uppercase text-[15vw] text-zinc-800 font-[grotesk] -mb-[10vw] text-center'>ready</h1>
          <h1 className='uppercase text-[15vw] text-zinc-800 font-[grotesk] -mb-[10vw] text-center'>to start</h1>
          <h1 className='uppercase text-[15vw] text-zinc-800 font-[grotesk] -mb-[10vw] text-center'>the project?</h1>
          <div className="flex flex-col buttons mt-[8vw] items-center">
            <button className='flex gap-10 items-center px-10 py-6 bg-zinc-800 hover:bg-black rounded-full text-white uppercase'>Start The project
              <div className='w-2 h-2 bg-white rounded-full'></div>
            </button>
            <div className="text-zinc-800 uppercase py-[1vw]">Or</div>
            <button className='flex gap-10 items-center px-10 py-6 bg-transparent rounded-full border-2 border-zinc-800 text-zinc-800 uppercase'>hello@ochi.design
              <div className='w-2 h-2 bg-zinc-800 rounded-full'></div>
            </button>
          </div>
        </div>
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className="eyes z-10 flex gap-10 absolute top-2/5 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white">
            <div
              ref={leftEyeRef}
              className="relative w-2/3 h-2/3 bg-zinc-800 rounded-full">
              <div
                className="line absolute top-1/2 left-1/2 w-full h-8"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateLeft}deg)`
                }}>
                <div className="w-8 h-8 rounded-full bg-white" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-white">
            <div
              ref={rightEyeRef}
              className="relative flex items-center justify-center w-2/3 h-2/3 bg-zinc-800 rounded-full">
              <div
                className="line absolute top-1/2 left-1/2 w-full h-8"
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotateRight}deg)`
                }}>
                <div className="w-8 h-8 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ReadyEyes