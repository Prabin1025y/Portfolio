import * as React from "react"
import Rating from '@mui/material/Rating';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Testimonials } from "@/utils/Utilities";

export function CarouselSpacing() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#3AA6A6] dark:bg-[#0E1A21] xl:-translate-y-[125px]">
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center py-4 sm:py-6 tracking">TESTIMONIALS</h2>
      </div>
      <Carousel className="w-[90%] 2xl:w-[80%] px-4">
        <CarouselContent className="-ml-1 gap-2 md:gap-4">
          {Testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 sm:pl-6 md:pl-8 basis-full md:basis-1/2 xl:basis-1/3 py-4 sm:py-6 md:py-10">
              <div className="p-1 h-full bg-white dark:bg-[#255676] rounded-lg w-full flex flex-col gap-2 sm:gap-3 px-3 sm:px-4 md:px-6 pt-8 sm:pt-10 pb-6 sm:pb-8 font-[Inter] relative shadow-md sm:shadow-lg md:shadow-[10px_10px_27px_-6px_#255676]">
                <Image 
                  className="border-4 aspect-square object-cover shadow-md sm:shadow-lg md:shadow-[13px_13px_25px_-6px_#255676] dark:shadow-[10px_10px_10px_-6px_#0E1A21] border-[#3AA6A6] dark:border-[#0E1A21] rounded-full absolute -left-4 sm:-left-6 md:-left-8 -top-4 sm:-top-6 md:-top-8 bg-[#255676]" 
                  src={testimonial.imageUrl} 
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
                  {testimonial.userName}
                  <div><Rating size="small" name="read-only" precision={0.5} value={testimonial.stars} readOnly /></div>
                </div>
                <div className="text-xs sm:text-sm text-justify">{testimonial.content}</div>
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