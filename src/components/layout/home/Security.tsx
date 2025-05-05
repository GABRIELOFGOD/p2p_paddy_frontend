import { whyUs } from "@/data/story"
import Image from "next/image"

const Security = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary/70 to-primary/10 w-full">
        <div className="container mx-auto px-3 py-20 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="my-auto w-full">
            <Image
              src={"/assets/security.svg"}
              alt="security"
              height={100}
              width={100}
              className="w-lg h-fit"
            />
          </div>
          <div className="my-auto w-full md:ml-10">
            <p className="text-2xl md:text-4xl font-bold text-shadow-sm">Why make you try us?</p>
            <div className="flex flex-col gap-5 mt-10">
              {whyUs.map(({ text, icon: Icon }, i) => (
                <div
                  className="flex gap-3"
                  key={i}
                >
                  <div className="bg-foreground text-secondary rounded-full w-10 h-10 justify-center items-center flex">
                    <Icon />
                  </div>
                  <p className="text-lg font-semibold my-auto">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Security;