"use client";

import { Menu, Search } from "lucide-react"
import Image from "next/image"
import ThemeToggle from "../ui/ToggleTheme";

const Header = () => {
  
  return (
    <div className="flex justify-between gap-5 bg-background backdrop-blur-lg shadow-sm px-3 py-2">
      <div className="w-fit h-fit bg-black my-auto">
        <Image
          src={"/brand/p2p_logo.png"}
          alt="Logo"
          color="#0361f0"
          width={150}
          height={150}
        />
      </div>
      <div className="flex gap-3 my-auto">
        <Search size={20} className="my-auto" />
        <ThemeToggle />
        <Menu size={20} className="my-auto" />
      </div>
    </div>
  )
}
export default Header