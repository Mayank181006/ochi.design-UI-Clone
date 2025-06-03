import React, { useEffect, useRef, useState } from "react";

function Eyes() {
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
        <div className="eyes w-full h-screen overflow-hidden">
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div data-scroll data-scroll-section data-scroll-speed="0.1" className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white transition-all duration-300">
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
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
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
    );
}

export default Eyes;
