"use client";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/hero";
import { HeroDataType } from "@/types/heroTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [heroContent, setHeroContent] = useState<HeroDataType>(heroData[0]);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % heroData.length;
      setIndex(nextIndex);
      setHeroContent(heroData[nextIndex]);
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="h-fit w-full bg-secondary">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full my-auto md:py-20">
        {/* Image Section */}
        <div className="relative w-full z-20 h-[300px] sm:h-[400px] md:h-[100%] order-first md:order-last">
          <Image
            src={heroContent.image}
            alt={heroContent.title}
            fill
            className="object-cover md:rounded-xl md:shadow-xl"
            priority
          />
        </div>

        {/* Text Content */}
        <div className="px-5 py-10 md:px-16 lg:px-24 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0">
            {heroContent.description}
          </p>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 transition text-white font-semibold cursor-pointer"
              onClick={() => router.push(heroContent.buttonLink || "/market")}
            >
              {heroContent.buttonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer font-semibold transition"
              onClick={() => router.push("/register")}
            >
              Open Account
            </Button>
          </div>
        </div>
      </div>

      {/* === Dot Pagination Indicator === */}
      <div className="flex justify-center items-center gap-2 py-6">
        {heroData.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === i
                ? "w-6 bg-primary"
                : "w-2 bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
