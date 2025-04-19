

import { Button } from "@/components/ui/button";
import Image from "next/image";

const SheyYouKnow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center h-full my-auto py-10 md:py-20">
      {/* Image - full width on mobile */}
      <div className="relative w-full z-20 h-[300px] sm:h-[400px] md:rounded-xl md:shadow-xl overflow-hidden md:h-[100%] order-first md:order-last">
        <Image
          src={"/assets/trader.jpg"}
          alt={"trader"}
          fill
          className="object-cover md:rounded-xl md:shadow-xl"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="px-5 py-10 md:px-16 lg:px-24 space-y-6 text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          "For here, you fit sell anything and buy anything"
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
          Shey you know say we no get another work wey pass to bring your market come meet better people wey go buy am? and to bring market wey you go fit buy for shikini money? Na wetin we dey do for here be that! We dey connect you with people wey get market and people wey wan buy market. No wahala, no stress!
        </p>
        <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0">
          Shey you con know say even the item wey you don use, you fit post am for sell for here too? Na so we dey run am! We dey help you sell your used item wey still dey work well. No need to throway am, just post am gbam!
        </p>
      </div>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary/90 transition text-white font-bold w-fit cursor-pointer mx-5"
      >
        Sharp! 👉
      </Button>
    </div>
  )
}
export default SheyYouKnow