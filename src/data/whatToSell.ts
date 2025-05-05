import { Bitcoin, House, LucideIcon, ShoppingBag, ShoppingCart, TreePalm, User } from "lucide-react";

export interface WhatCanYouSellType {
  topic: string;
  text: string;
  link: string;
  icon: LucideIcon;
}

export const whatCanYouSell: WhatCanYouSellType[] = [
  {
    topic: "New Products",
    text: "You get correct market wey fit enter person eye and you dey find buyer? Say no more, we dey here for you",
    link: "/vendor/market",
    icon: ShoppingBag
  },
  {
    topic: "Use products",
    text: "Turning use items to money na Odogwu move and we gat you covered, people dey interested for that thing, post am ASAP",
    link: "/vendor/market",
    icon: ShoppingCart
  },
  {
    topic: "Digital Assets",
    text: "Better one gidigba, you fit Buy and Sell your digital assets like GIFTCARDS, CRYPTO, NFTs and so on for here, we go connect you with direct buyer/seller with no wahala.",
    link: "#",
    icon: Bitcoin
  },
  {
    topic: "Properties",
    text: "You fit post your properties like Land, House and Cars and meet buyers wey no go stress",
    link: "/vendor/market",
    icon: House
  },
  {
    topic: "Lending",
    text: "Come post your available House or Farm land for rent as agent or individual wey wan make extra money",
    link: "/vendor/market",
    icon: TreePalm
  },
  {
    topic: "Services",
    text: "If you be professional or expert for anything, come post am asap make people hire you for better better jobs",
    link: "vendor/service",
    icon: User
  }
]