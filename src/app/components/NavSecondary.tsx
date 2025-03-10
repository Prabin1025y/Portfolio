'use client'
import { FolderCode, Home, Newspaper, Phone, SquareUserRound } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'



const NavSecondary = () => {
    const [bgPos, setBgPos] = useState(0);
    const OlElement = useRef<HTMLOListElement>(null)

    useEffect(() => {
        const liElement = OlElement.current?.querySelector('li');
        if (liElement) {
            liElement.style.color = 'black'
            const rect = liElement.getBoundingClientRect();
            setBgPos(rect.left - 62);
        }
    }, [])



    const OnClickHandler = (event: React.MouseEvent<HTMLLIElement>) => {
        Array.from(OlElement.current?.children || []).forEach(element => {
            (element as HTMLElement).style.color = 'white'
        });
        
        const liElement = (event.target as HTMLElement).closest('li');
        if (liElement) {
            liElement.style.color = 'black'
            const rect = liElement.getBoundingClientRect();
            setBgPos(rect.left - 62);
        }
    }
    return (
        <div className='fixed z-20 bottom-0 w-screen h-12 bg-emerald-900 dark:bg-cyan-600 lg:hidden'>
            <ol ref={OlElement} className='relative flex justify-around h-full items-center text-white'>
                <div style={{ transform: `translateX(${bgPos}px)` }} className='h-full left-0 top-0 z-20 bg-white transition-all absolute origin-center flex'>
                    <div className='h-full aspect-square bg-emerald-900 dark:bg-cyan-600 rounded-tr-[24px]' />
                    <div className='h-full aspect-square bg-emerald-900 dark:bg-cyan-600'>
                        <div className='h-full aspect-square bg-white rounded-b-full' />
                    </div>
                    <div className='h-full aspect-square bg-emerald-900 dark:bg-cyan-600 rounded-tl-[24px]' />
                </div>
                <li  onClick={(e) => OnClickHandler(e)} className='z-30'><Link href="#Home"><Home size={20} /></Link></li>
                <li onClick={(e) => OnClickHandler(e)} className='z-30'><Link href="#Projects"><FolderCode size={20} /></Link></li>
                <li onClick={(e) => OnClickHandler(e)} className='z-30'><Link href="#Home"><Newspaper size={20} /></Link></li>
                <li onClick={(e) => OnClickHandler(e)} className='z-30'><Link href="#AboutMe"><SquareUserRound size={20} /></Link></li>
                <li onClick={(e) => OnClickHandler(e)} className='z-30'><Link href="#Contact"><Phone size={20} /></Link></li>
            </ol>
        </div>
    )
}

export default NavSecondary


// return (
//     <div className='bg-transparent h-screen w-screen backdrop-blur-md z-20 fixed left-0 top-0 animate-in fade-in-0 duration-200'>
//         <div className='bg-cyan-600 h-full w-[350px] absolute top-0 right-0 pl-5 flex flex-col gap-10 pt-10 animate-in slide-in-from-right-96 duration-500'>
//             <div className='z-30' onClick={() => setSidebarOpen(false)}><X /></div>
//             <ol className='flex flex-col gap-8 font-[Inter] font-semibold text-black'>
//                 <div style={{transform: `translateY(calc(41px + ${bgPos} * 52px))`}} className={`absolute top-0 transition-all left-0 flex flex-col bg-gradient-to-r from-white to-cyan-600 z-20`}>
//                     <div className='bg-cyan-600 w-40 h-12 rounded-bl-[24px]' />
//                     <div className='bg-white w-40 h-12 rounded-r-full' />
//                     <div className='bg-cyan-600 w-40 h-12 rounded-tl-[24px]' />
//                 </div>
//                 <Link className='z-30' href="#Home"><li onClick={() => clickEventHandler(0)} className='flex items-center gap-3 text-sm'><Home size={16} />HOME</li></Link>
//                 <Link className='z-30' href="#Projects"><li onClick={() => clickEventHandler(1)} className='flex items-center gap-3 text-sm'><FolderCode size={16} />PROJECTS</li></Link>
//                 <Link className='z-30' href="#"><li onClick={() => clickEventHandler(2)} className='flex items-center gap-3 text-sm'><Newspaper size={16} />BLOGS</li></Link>
//                 <Link className='z-30' href="#AboutMe"><li onClick={() => clickEventHandler(3)} className='flex items-center gap-3 text-sm'><SquareUserRound size={16} />ABOUT</li></Link>
//                 <Link className='z-30' href="#Contact"><li onClick={() => clickEventHandler(4)} className='flex items-center gap-3 text-sm'><Phone size={16} />CONTACT</li></Link>
//             </ol>
//         </div>
//     </div>
// )