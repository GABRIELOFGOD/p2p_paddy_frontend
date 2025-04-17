"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchModal = ({ closeSearch }: { closeSearch: () => void }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-background/30 backdrop-blur-3xl px-3 py-20 justify-center flex z-50">
      <div className="h-fit shadow-md w-full md:w-[400px] bg-background p-4 border border-gray-500/50 rounded-md">
        <Button
          variant="outline"
          className="justify-end flex w-fit ml-auto mb-2 font-semibold cursor-pointer"
          onClick={closeSearch}
          type="button"
        >
          Commot
        </Button>
        <form onSubmit={e=>e.preventDefault()}>
          <Input
            type="search"
            className="w-full"
            placeholder="Wetin you dey find?"
          />
          <Button
            type="submit"
            className="w-full mt-2 bg-primary text-white hover:bg-primary/80 font-semibold text-lg disabled:cursor-not-allowed"
            size={"lg"}
            disabled={loading || !searchInput}
          >Chek am for me!</Button>
        </form>
      </div>
    </div>
  )
}
export default SearchModal