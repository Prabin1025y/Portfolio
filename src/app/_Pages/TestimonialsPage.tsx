import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSpacing() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#3AA6A6] dark:bg-[#0E1A21] lg:-translate-y-16 xl:-translate-y-24">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-4 sm:py-6 tracking">TESTIMONIALS</h2>
      </div>
      <Carousel className="w-[90%] max-w-6xl px-4">
        <CarouselContent className="-ml-1 gap-2 md:gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-4 sm:pl-6 md:pl-8 basis-full md:basis-1/2 lg:basis-1/3 py-4 sm:py-6 md:py-10">
              <div className="p-1 bg-white dark:bg-[#255676] rounded-lg w-full flex flex-col gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 pt-8 sm:pt-10 pb-6 sm:pb-8 font-[Inter] relative shadow-md sm:shadow-lg md:shadow-[10px_10px_27px_-6px_#255676]">
                <Image 
                  className="border-2 sm:border-4 shadow-md sm:shadow-lg md:shadow-[13px_13px_25px_-6px_#255676] dark:shadow-[10px_10px_10px_-6px_#0E1A21] border-[#3AA6A6] dark:border-[#0E1A21] rounded-full absolute -left-4 sm:-left-6 md:-left-8 -top-4 sm:-top-6 md:-top-8 bg-[#255676]" 
                  src="/pp.jpg" 
                  width={60} 
                  height={60}
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 100px, 100px"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100px',
                    maxHeight: '100px',
                  }}
                  alt="profile picture"
                />
                <div className="text-base sm:text-lg font-semibold tracking-wide pl-20 sm:px-16 md:px-14">
                  Prabin Acharya
                  <div>stars</div>
                </div>
                <div className="text-xs sm:text-sm">something good about me i guess. He is a very handsome and funny guy who wants to have fun and play chess maybe. I dont know him very well. just making these up as testimonials are supposed to be good.</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex -left-2 sm:-left-5" />
        <CarouselNext className="hidden sm:flex -right-2 sm:-right-5 " />
      </Carousel>
    </div>
  )
}