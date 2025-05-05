import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

const SellFast = () => {
  const promotionSteps = [
    "Upload your market",
    "Add promotion on top",
    "Observe us do the magic",
    "Dey pack money steady"
  ]
  
  return (
    <div className="bg-muted">
      <div className="container mx-auto py-10 md:py-20 px-3">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-2xl md:text-4xl font-bold text-shadow-md">You fit <span className="text-primary">BOOST</span> your market!</p>
              <p className="text-lg md:text-xl font-light">No need to do wahala to dey find customer, just upload am and observe us run the sells.</p>
            </div>
            <div className="flex flex-col gap-3 px-3">
              {promotionSteps.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3"
                >
                  <div className="flex justify-center items-center text-lg rounded-full shadow-md bg-secondary h-8 w-8 font-bold">
                    <Check size={20} />
                  </div>
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
            <Button
              size={"lg"}
              className="w-fit cursor-pointer mt-5 text-white shadow-sm"
            >
              Run promotion for me
            </Button>
          </div>
          <div className="my-auto md:h-full h-[400px] w-full relative rounded-md overflow-hidden">
            <Image
              src={"/assets/sales.jpg"}
              alt="sales"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default SellFast