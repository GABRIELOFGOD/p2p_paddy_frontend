"use client";

import { StoryType } from "@/types/story.types";
import Image from "next/image";

const StoryBall = ({ story }: { story: StoryType }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="rounded-full p-1 border-3 border-primary w-20 h-20 overflow-hidden items-center justify-center">
        <Image
          src={story.data?.image}
          alt="story"
          width={100}
          height={100}
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="text-xs font-semibold">{story.data?.title}</div>
    </div>
  )
}
export default StoryBall