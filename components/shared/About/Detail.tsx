import { logoDetails } from "@/constants/About/Detail"
import Image from "next/image"

export default function LogoDetail() {
  return (
    <main className="bg-[#1B1368]">
      <div className="max-w-7xl mx-auto px-4 pt-2 sm:pt-10 pb-30">
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {logoDetails.map((item) => (
            <div
              key={item.index}
              className="relative flex w-[250px] flex-col items-center rounded-none border border-[#B9B9B9]/20 bg-gradient-to-b from-[#FFFFFF]/20 from-0% to-[#474747]/20 to-67% px-6 pt-12 pb-8 text-white backdrop-blur-md"
            >
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex flex-col items-center py-2">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                  quality={100}
                  className="z-2"
                />
                <span className="relative -top-5 h-10 w-18 rounded-full blur-md z-1"
                style={{ backgroundColor: item.shadowColor }}
                ></span>
              </div>

              <h2 className="text-lg font-bold mb-2 mt-2">{item.name}</h2>
              <p className="text-sm text-center">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}