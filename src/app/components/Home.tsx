import Image from 'next/image'
import React from 'react'

const HomePage = () => {
    return (
        <div className='flex h-[calc(100vh-80px)] items-center justify-center font-[Inter]'>
            <div className=' max-w-[650px]'>
                <div className='ml-10 flex gap-2 items-center'>
                    <p className='text-[3.8rem] tracking-[10px] font-bold leading-tight'>PRABIN</p>
                    <div>
                        <div className='h-2 my-1 w-48 bg-[var(--complete-dark)]'/>
                        <div className='h-2 my-1 w-48 bg-[var(--text-secondary)]'/>
                    </div>
                </div>
                <div className='ml-10 flex gap-3 items-center'>
                    <div>
                        <div className='h-2 my-1 w-28 bg-[var(--complete-dark)]'/>
                        <div className='h-2 my-1 w-28 bg-[var(--text-secondary)]'/>
                    </div>
                    <p className='text-[3.8rem] tracking-[10px] font-bold leading-tight'>ACHARYA</p>
                </div>
                <div className='tracking-widest font-semibold text-center'>A Web Development enthusiast with silly hobby of creating game on the way. Always ready for some fun :)</div>
                <div className='grid place-items-center my-3'>Resume</div>
            </div>
            <div>
                <Image  src="/photo.png" alt="Prabin's photo" height={650} width={650} />
            </div>
        </div>
    )
}

export default HomePage