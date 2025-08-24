import { mascots } from "@/constants/About/Mascots";
import Panflora from "@/public/icons/Mascot/PANFLORA.png";
import Daiko from "@/public/icons/Mascot/DAIKO.png";
import Image from "next/image";

export default function OurMascot() {
  return (
    <main className="bg-gradient-to-b from-[#1B1368] to-[#000022] from-0% to-100%">
      <div className="pt-10 pb-1 max-w-7xl mx-auto px-4">
        <div className="relative w-fit mx-auto">
          <div className="relative top-4 flex justify-between items-center px-6">
            <Image
              src={Panflora}
              alt="Panflora"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src={Daiko}
              alt="Daiko"
              width={60}
              height={60}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold w-fit mx-auto px-12 py-4 bg-white/10 rounded-full uppercase">
            the mascots
          </h1>
        </div>

        {/* isi */}
        <div className="mt-3 md:mt-5 lg:mt-3 xl:-mt-10 flex flex-col -gap-y-5">
          {mascots.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.index}
                className={`flex flex-col items-center justify-between gap-x-10 md:flex-row ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={380}
                  height={400}
                  className="object-contain"
                />

                <div className="flex flex-col gap-y-1 mt-1 md:mt-0">
                  <h1
                    className={`text-5xl font-bold uppercase text-center md:text-left ${
                      isReversed ? "md:text-right" : ""
                    }`}
                  >
                    {item.name}
                  </h1>
                  <p className="text-justify [text-justify:inter-word] [word-spacing:-0.1em] text-md md:text-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
