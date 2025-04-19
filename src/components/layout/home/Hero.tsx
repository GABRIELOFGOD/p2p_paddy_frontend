"use client";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/hero";
import { HeroDataType } from "@/types/heroTypes"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const [heroContent, setHeroContent] = useState<HeroDataType>(heroData[0]);

  const router = useRouter();
  
  return (
    <div className="h-[90vh] bg-secondary flex flex-col flex-row px-3 items-center justify-center gap-4 md:px-52">
      <div>
        <h1 className="text-4xl font-bold ">{heroContent.title}</h1>
        <p className="text-lg text-gray-700 mt-2">{heroContent.description}</p>
        <Button
          onClick={() => router.push(heroContent.buttonLink || "/products")}
          size={"lg"}
        >{heroContent.buttonText}</Button>
      </div>
      <div>
        <Image
          src={heroContent.image}
          alt={heroContent.title}
          width={500}
          height={500}
          className="rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  )
}
export default Hero