import React from 'react'
import PhotoHolder from './PhotoHolder'
import ResumeButton from './ResumeButton'

const HomePage = () => {
    return (
        <div id='Home' className='flex flex-col-reverse gap-10 lg:gap-5 xl:gap-0 xl:flex-row h-[calc(100vh-80px)] items-center justify-end pt-14 sm:pt-0 sm:justify-center font-[Inter]'>
            <div className=' max-w-[650px]'>
                <div className='lg:ml-10 flex gap-2 items-center justify-center lg:justify-start'>
                    <p className='text-[2rem] sm:text-[3rem] lg:text-[3.8rem] text-[#0F1035] dark:text-white transition-colors tracking-[10px] font-bold leading-tight'>PRABIN</p>
                    <div>
                        <div className='h-2 my-1 w-24 sm:w-48 bg-[var(--complete-dark)]' />
                        <div className='h-2 my-1 w-24 sm:w-48 bg-[#7FC7D9] dark:bg-white duration-300' />
                    </div>
                </div>
                <div className='lg:ml-10 flex gap-3 items-center justify-center lg:justify-start'>
                    <div>
                        <div className='h-2 my-1 w-16 sm:w-28 bg-[var(--complete-dark)]' />
                        <div className='h-2 my-1 w-16 sm:w-28 bg-[#7FC7D9] dark:bg-white duration-300' />
                    </div>
                    <p className='text-[2rem] sm:text-[3rem] lg:text-[3.8rem] tracking-[10px] text-[#0F1035] dark:text-white transition-colors font-bold leading-tight'>ACHARYA</p>
                </div>
                <div className='mt-5 sm:mt-0 tracking-wide sm:tracking-widest text-sm md:text-base px-4 sm:px-0 sm:font-semibold text-center text-[#0F1035] dark:text-white duration-300'>A Web Development enthusiast with silly hobby of creating game on the way. Always ready for some fun :)</div>
                <ResumeButton />
            </div>
            <PhotoHolder />
        </div>
    )
}

export default HomePage