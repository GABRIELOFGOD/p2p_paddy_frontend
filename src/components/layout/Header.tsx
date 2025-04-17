"use client";

import { Search } from "lucide-react"
import Image from "next/image"
import ThemeToggle from "../ui/ToggleTheme";
import SideSheet from "./SideSheet";
import { useState } from "react";
import SearchModal from "./search/Search";

const Header = () => {
  const [triggerSearch, setTriggerSearch] = useState(false);
  
  return (
    <div className="flex justify-between gap-5 bg-background backdrop-blur-lg shadow-sm px-3 py-2 w-full">
      <div className="w-fit h-fit bg-black my-auto z-50">
        <Image
          src={"/brand/p2p_logo.png"}
          alt="Logo"
          color="#0361f0"
          width={150}
          height={150}
        />
      </div>
      <div className="flex gap-3 my-auto">
        <Search size={20} className="my-auto cursor-pointer" onClick={() => setTriggerSearch(true)} />
        <ThemeToggle />
        {/* <div className="w-[300px]"> */}
          <SideSheet />
        {/* </div> */}
      </div>
      {triggerSearch && (<SearchModal closeSearch={() => setTriggerSearch(false)} />)}
    </div>
  )
}
export default Header