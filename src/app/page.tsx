import Hero from "@/components/layout/home/Hero";
import Support from "@/components/layout/home/Support";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <div className="container">
        <Support />
      </div>
    </div>
  );
}
