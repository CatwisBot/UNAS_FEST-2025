import { mascots } from "@/constants/About/Mascots";
import Image from "next/image";

export default function ourMascot() {
  return (
    <div className="pt-10 pb-1 bg-gradient-to-b from-[#001E5B] via-[#010552] to-[#004479] max-w-screen px-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase">
          our mascots
        </h1>
      </div>

      <div className="mt-3 md:mt-5 lg:mt-3 xl:-mt-10 flex flex-col -gap-y-5">
        {mascots.map((item, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={item.index}
              className={`flex flex-col items-center justify-between gap-x-10 md:flex-row ${
                isReversed ? 'md:flex-row-reverse' : ''
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
                    isReversed ? 'md:text-right' : ''
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
  );
}