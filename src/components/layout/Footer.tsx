import Image from "next/image"

const Footer = () => {
  return (
    <div>
      <div className="container py-20 px-3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-5">
            <div className="w-fit h-fit not-dark:bg-black my-auto z-50">
              <Image
                src={"/brand/p2p_logo.png"}
                alt="Logo"
                color="#0361f0"
                width={150}
                height={150}
              />
            </div>
            <p className="text-lg font-light">Your number one unshakable, unstopable, incomparable market place with the best feelings and vibe 💯✅.</p>
          </div>
          <div>
            <p className="font-bold text-xl ">Primary links</p>
          </div>
          <div>
            <p className="font-bold text-xl ">Other links</p>
          </div>
        </div>
        <p>&copy; P2PPADDY {new Date().getFullYear()} all rights reserved</p>
      </div>
    </div>
  )
}
export default Footer