"use client";

import { Button } from "@/components/ui/button";
import { WhatCanYouSellType } from "@/data/whatToSell";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const WhatCanYouSellCard = ({ 
  icon: Icon,
  link, text, topic
 }: WhatCanYouSellType) => {
  const router = useRouter();
  
  return (
    <div>
      <div className="w-full rounded-lg h-full shadow-md md:p-8 p-5 border border-border/50 flex flex-col gap-5 hover:shadow-lg ease-linear duration-200 hover:scale-3d">
        <div className="flex justify-between">
          <div className="flex items-center justify-center w-16 rounded-full h-16 bg-primary/30 text-primary">
            <Icon size={30} />
          </div>
          <Button
            variant={"ghost"}
            className="rounded-full"
            onClick={() => router.push(link)}
          >
            <ArrowUpRight size={30} />
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-bold capitalize">{topic}</p>
          <p className="text-xl font-light">{text}</p>
        </div>
      </div>
    </div>
  )
}
export default WhatCanYouSellCard;