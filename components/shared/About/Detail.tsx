import { logoDetails } from "@/constants/About/Detail"
import Image from "next/image"

export default function LogoDetail() {
  return (
    <div className="bg-gradient-to-b from-[#061431] to-[#001F5C] px-4 py-10">
      <h1 className="text-center text-4xl font-bold text-white">LOGO DETAILS</h1>

      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {logoDetails.map((item) => (
          <div
            key={item.index}
            className="flex w-[250px] flex-col items-center rounded-xl bg-[#1F3D76] px-6 py-8 text-white"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={52}
              height={52}
              className="mb-4"
            />
            <h2 className="text-lg font-bold mb-2">{item.name}</h2>
            <p className="text-sm text-center">{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}