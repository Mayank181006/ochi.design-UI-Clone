import React from 'react'

function Cards() {
  return (
    <div className='sticky top-0 w-full h-[140vh] bg-zinc-800 text-black pt-[1vw] pb-[12vw] px-[50px]'>
      <div className="w-full h-[54vh] flex gap-5">
        <div className='relative w-1/2 h-full bg-[#F15025] rounded-xl flex flex-col-reverse'>
            <div className='image absolute w-2/5 h-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <img className='bg-cover scale-150' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="ochi" />
            </div>
            <a href=''
                className="m-4 relative w-fit justify-center flex border border-[#CDEA68] text-[#CDEA68] font-medium rounded-full overflow-hidden px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase">
                  &copy;2019-2020
                </p>
                
              </a>
          </div>
        <div className="w-1/2 h-full flex gap-5">
          <div className='relative w-full h-full bg-[#212121] rounded-xl flex flex-col-reverse'>
            <div className='image absolute w-2/5 h-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="clutch" />
            </div>
            <a href=''
                className="m-4 relative w-fit justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  rating 5.0 on clutch
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
          </div>
          <div className='relative w-full h-full bg-[#212121] rounded-xl flex flex-col-reverse'>
            <div className='image absolute w-2/5 h-2/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center'>
              <img className='bg-cover ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="futur academy" />
            </div>
            <a href=''
                className="m-4 relative w-fit justify-center flex border border-white text-white font-medium rounded-full overflow-hidden group px-3 py-2"
              >
                <p className="z-10 leading-[1.2] uppercase group-hover:text-black transition-colors duration-300 ease-in-out">
                  business bootcamp alumni
                </p>
                <span
                  className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-300 ease-in-out z-0"
                />
              </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards