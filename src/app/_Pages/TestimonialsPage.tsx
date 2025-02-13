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
    <div className="w-screen flex justify-center bg-[#3AA6A6] dark:bg-[#0E1A21] -translate-y-[125px]">
      <Carousel className="w-[85%]">
        <CarouselContent className="-ml-1 gap-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3 py-10">
              <div className="p-1 bg-white dark:bg-[#255676] rounded-lg w-[450px] flex flex-col gap-3 px-6 pt-10 pb-8 font-[Inter] relative shadow-[10px_10px_27px_-6px_#255676]">
                <Image className="border-4 shadow-[13px_13px_25px_-6px_#255676] dark:shadow-[10px_10px_10px_-6px_#0E1A21] border-[#3AA6A6] dark:border-[#0E1A21] rounded-full absolute -left-8 -top-8 bg-[#255676]" src="/pp.jpg" width={100} height={100} alt="pp"/>
                <div className="text-lg font-semibold tracking-wide px-14">Prabin Acharya
                  <div>stars</div>
                </div>
                <div className="text-xs">something good about me i guess. He is a very handsome and funny guy who wants to have fun and play chess maybe. I dont know him very well. just making these up as testimonials are supposed to be good.</div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
