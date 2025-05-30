"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import UseMounted from "../hooks/UseMounted";


const PhotoHolder = () => {
  const { theme } = useTheme();
  const isMounted = UseMounted();
  if (!isMounted)
    return (
      <div className="aspect-square w-[200px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 2xl:h-[650px] 2xl:w-[650px] relative">
        {/* <div className="lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px] absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 animate-pulse grid place-items-center"> */}
        <div className="lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px] absolute inset-0  bg-gradient-to-br from-blue-100/10 to-blue-200/10 rounded-full  grid place-items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
          </div>
        </div>
      </div>
    );

  return (
    <div className="aspect-square w-[200px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 2xl:h-[650px] 2xl:w-[650px] relative">
      <Image
        className="lg:my-5 z-10 h-[200px] w-[200px] 2xl:h-[650px] 2xl:w-[650px]"
        src={theme == "dark" ? "/photo_dark.png" : "/photo_light.png"}
        alt="Prabin's photo"
        fill
      />
    </div>
  );
};

export default PhotoHolder;
