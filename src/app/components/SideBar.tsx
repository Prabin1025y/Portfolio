import { FolderCode, Home, Newspaper, Phone, SquareUserRound, X } from 'lucide-react'
import Link from 'next/link';
import React, { useState } from 'react'

interface SideBarProps {
    setSidebarOpen: (open: boolean) => void;
}



const SideBar: React.FC<SideBarProps> = ({ setSidebarOpen }) => {
    const [bgPos, setBgPos] = useState(0);
    const clickEventHandler = (value: number) => {
        setBgPos(value);
        setSidebarOpen(false);
    }
    return (
        <div className='bg-transparent h-screen w-screen backdrop-blur-md z-20 fixed left-0 top-0 animate-in fade-in-0 duration-200'>
            <div className='bg-cyan-600 h-full w-[350px] absolute top-0 right-0 pl-5 flex flex-col gap-10 pt-10 animate-in slide-in-from-right-96 duration-500'>
                <div className='z-30' onClick={() => setSidebarOpen(false)}><X /></div>
                <ol className='flex flex-col gap-8 font-[Inter] font-semibold text-black'>
                    <div className={`absolute top-0 translate-y-[calc(41px+(${bgPos}*52px))] transition-all left-0 flex flex-col bg-gradient-to-r from-white to-cyan-600 z-20`}>
                        <div className='bg-cyan-600 w-40 h-12 rounded-bl-[24px]' />
                        <div className='bg-white w-40 h-12 rounded-r-full' />
                        <div className='bg-cyan-600 w-40 h-12 rounded-tl-[24px]' />
                    </div>
                    <Link className='z-30' href="#Home"><li onClick={() => clickEventHandler(0)} className='flex items-center gap-3 text-sm'><Home size={16} />HOME</li></Link>
                    <Link className='z-30' href="#Projects"><li onClick={() => clickEventHandler(1)} className='flex items-center gap-3 text-sm'><FolderCode size={16} />PROJECTS</li></Link>
                    <Link className='z-30' href="#"><li onClick={() => clickEventHandler(2)} className='flex items-center gap-3 text-sm'><Newspaper size={16} />BLOGS</li></Link>
                    <Link className='z-30' href="#AboutMe"><li onClick={() => clickEventHandler(3)} className='flex items-center gap-3 text-sm'><SquareUserRound size={16} />ABOUT</li></Link>
                    <Link className='z-30' href="#Contact"><li onClick={() => clickEventHandler(4)} className='flex items-center gap-3 text-sm'><Phone size={16} />CONTACT</li></Link>
                </ol>
            </div>
        </div>
    )
}

export default SideBar