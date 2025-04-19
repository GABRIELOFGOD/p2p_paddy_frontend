import { earnCardData } from "@/data/earnCard"
import EarnCard from "./EarnCard"

const Earn = () => {
  return (
    <div className="px-3 md:px-20 lg:px-24 bg-secondary py-10 md:py-20 flex flex-col gap-5 h-full">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-2xl ">As Sodiki wey you be, you go dey reason another way wey you fit make money from us. You fit call me <span className="font-bold">The plug</span> cuz I get better update for you 😋</p>
        <p className="text-lg font-semibold text-gray-500">We get something wey we dey call <span className="font-semibold text-primary">PADDY POINT</span>, with <span className="font-semibold text-primary">PADDY POINTS</span> money na water!</p>
      </div>
      <div className="flex justify-between gap-5 flex-col justify-center items-center md:flex-row mt-10 items-stretch">
        {earnCardData.map((item, index) => (
          <EarnCard
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}
export default Earn