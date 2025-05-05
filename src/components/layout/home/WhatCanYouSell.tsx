"use client";

import { whatCanYouSell } from "@/data/whatToSell";
import WhatCanYouSellCard from "./WhatCanYouSellCard";

const WhatCanYouSell = () => {
  return (
    <div>
      <div className="py-20 container mx-auto px-3 mt-10">
        <p className="text-2xl md:text-4xl font-bold">Shey you dey wonder which kind thing you fit <span className="text-primary">Sell</span> or <span className="text-primary">Buy</span> for our platform?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {whatCanYouSell.map((item, i) => (
            <WhatCanYouSellCard
              key={i}
              icon={item.icon}
              link={item.link}
              text={item.text}
              topic={item.topic}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default WhatCanYouSell