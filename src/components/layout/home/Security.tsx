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
          <div className="my-auto w-full">
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Security