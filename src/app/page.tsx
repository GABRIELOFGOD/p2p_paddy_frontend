import Earn from "@/components/layout/home/Earn";
import Hero from "@/components/layout/home/Hero";
import Security from "@/components/layout/home/Security";
import SellFast from "@/components/layout/home/SellFast";
import SheyYouKnow from "@/components/layout/home/SheyYouKnow";
import Support from "@/components/layout/home/Support";
import WhatCanYouSell from "@/components/layout/home/WhatCanYouSell";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Support />
      <SheyYouKnow />
      <Earn />
      <SellFast />
      <WhatCanYouSell />
      <Security />
    </div>
  );
}
