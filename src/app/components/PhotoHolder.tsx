'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react'
import UseMounted from '../hooks/UseMounted';

const PhotoHolder = () => {
    const {theme} = useTheme()
    const isMounted = UseMounted();
    if(!isMounted)
        return <div>loading...</div>

    return (
        <div className='aspect-square w-[200px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 2xl:h-[650px] 2xl:w-[650px] relative'>
            <Image className='lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px]' src={theme == 'dark' ? "/photo_dark.png" : "/photo_light.png"} alt="Prabin's photo" fill />
        </div>
    )
}

export default PhotoHolder