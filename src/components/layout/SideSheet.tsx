
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerLinks } from "@/data/links";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const SideSheet = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={20} className="my-auto cursor-pointer" />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <div className="w-fit h-fit bg-black my-auto">
                <Image
                  src={"/brand/p2p_logo.png"}
                  alt="Logo"
                  color="#0361f0"
                  width={150}
                  height={150}
                />
              </div>
              <p className="text-lg font-medium pt-3">Your padding for anything buyable 😋✔</p>
            </SheetTitle>
            <SheetDescription>
              <div className="w-full justify-center flex flex-col items-center mt-5">
                {headerLinks.map((link) => (
                  <Link href={link.url} key={link.title} className={cn("py-2 w-full text-center text-lg font-medium hover:bg-primary hover:text-background transition-colors duration-300 ease-in-out rounded-md", isActive(link.url) && "text-primary")}>
                    {link.title}
                  </Link>
                ))}
              </div>
              <div className="px-5 mt-5">
                <Button
                  variant="outline"
                  className="w-full border-2 border-primary text-primary text-lg font-medium cursor-pointer"
                  size={"lg"}
                >
                  Login
                </Button>
                <Button
                  variant="default"
                  className="w-full mt-3 text-lg font-medium cursor-pointer"
                  size={"lg"}
                >
                  Register
                </Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
export default SideSheet