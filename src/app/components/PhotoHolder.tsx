'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'
import UseMounted from '../hooks/UseMounted';
import styles from './PhotoHolder.module.css'

/* HTML: <div class="loader"></div> */

const PhotoHolder = () => {
    const { theme } = useTheme()
    const isMounted = UseMounted();
    if (!isMounted)
        return <div className='aspect-square w-[200px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 2xl:h-[650px] 2xl:w-[650px] relative'>
            <div className='lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px] absolute inset-0 bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-gray-700/80 dark:to-gray-800/80 rounded-full animate-pulse grid place-items-center'>
                <div className={`${styles.loader} dark:invert`} />
            </div>
        </div>

    return (
        <div className='aspect-square w-[200px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 2xl:h-[650px] 2xl:w-[650px] relative'>
            <Image className='lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px]' src={theme == 'dark' ? "/photo_dark.png" : "/photo_light.png"} alt="Prabin's photo" fill />
        </div>
    )
}

export default PhotoHolder