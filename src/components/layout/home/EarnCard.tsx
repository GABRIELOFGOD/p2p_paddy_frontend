"use client";

import { Button } from "@/components/ui/button";
import { EarnCardProps } from "@/types/earnCard.types";
import { useRouter } from "next/navigation";

const EarnCard = ({ item }: { item: EarnCardProps }) => {
  const router = useRouter();
  
  return (
    <div className="bg-background rounded-md shadow-md p-10 flex flex-col gap-5 md:w-[400px] w-full h-full min-h-[520px]">
      <div className="flex flex-col gap-2">
        <p className="text-primary font-bold text-lg">{item.topic}</p>
        <h1 className="text-2xl font-bold">{item.title}</h1>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <Button
          variant="outline"
          className="text-primary border-primary hover:bg-primary/10 transition font-bold cursor-pointer shadow-md"
          size={"lg"}
          onClick={() => router.push("/paddy-points")}
        >
          I wan see more
        </Button>
        <Button
          size={"lg"}
          className="text-white shadow-md font-bold cursor-pointer"
        >
          I wan start to dey earn PADDY POINTS
        </Button>
      </div>
    </div>
  )
}
export default EarnCard