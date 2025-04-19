import Earn from "@/components/layout/home/Earn";
import Hero from "@/components/layout/home/Hero";
import SheyYouKnow from "@/components/layout/home/SheyYouKnow";
import Support from "@/components/layout/home/Support";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Support />
      <SheyYouKnow />
      <Earn />
    </div>
  );
}
