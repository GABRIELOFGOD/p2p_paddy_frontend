"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { stories } from "@/data/story";
import StoryBall from "./StoryBall";

const Story = () => {
  
  return (
    <div className="w-full py-5 flex flex-col gap-5 z-20">
      <p className="text-gray-500 text-xs font-semibold">Some people too do oo!</p>
      <Carousel className="z-20">
        <CarouselContent className="-ml-2 md:-ml-4">
          {stories.map((story, index) => (
            <CarouselItem
              className="pl-2 md:pl-4 cursor-pointer basis-1/4 md:basis-1/8"
              key={index}
            >
              <StoryBall story={story} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
export default Story