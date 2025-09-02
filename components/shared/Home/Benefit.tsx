import Image from "next/image";
import React from "react";
import Medal from "@/public/icons/Home/Medal2.png"
import BenefitCard from "@/components/ui/Benefit";

const Benefit = () => {
  return (
    <main className="bg-gradient-to-b from-[#243688] to-[#561C86] from-32% to-100%">
      <div className="flex items-center justify-center pt-25">
        <div className="inline-flex items-center gap-2 bg-[#4D258E] text-white font-bold px-6 py-2 rounded-full">
          <Image
            src={Medal}
            alt="Medal Icon"
            width={32}
            height={32}
            className="lg:w-8 lg:h-8 md:w-6 md:h-6 w-4 h-4"
          />
          <span className="text-[9px] lg:text-sm">Rewards & Benefits</span>
        </div>
      </div>

      <div className="text-center mt-5 pb-1 sm:pb-2">
        <h2 className="uppercase font-bold text-2xl sm:text-4xl">get <span className="bg-gradient-to-r from-[#A14CF3] from-38% to-[#345CEB] to-100% bg-clip-text text-transparent">exciting rewards</span></h2>
      </div>

      <div className="text-center">
        <p className="font-semibold text-[8px] sm:text-[10px] md:text-sm">All your participation and achievements will be rewarded with various <br /> forms of valuable and memorable appreciation</p>
      </div>

      <BenefitCard />

      <div className="pb-10 px-4">
        <div className="shine-wrap relative overflow-hidden max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#9233EA] to-[#2761EA] p-8 text-center text-white">

          <p className="text-xs sm:text-sm font-semibold mb-2">
            Total prize value and appreciation for all categories
          </p>
          <h2 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-4">
            Total Benefit Value
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-[#FDE047] mb-8">
            Rp 75.000.000+
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {["Sertifikat", "Trophy", "Plaque", "Merch"].map((label, i) => (
              <div key={i} className="bg-gradient-to-r from-[#5368EC] to-[#3F71ED] font-bold rounded-lg p-4 shadow-xl">
                <p className="text-md sm:text-xl mb-1 text-[#FDE047]">
                  {i === 0 ? "1000+"
                    : i === 1 ? "50+"
                      : i === 2 ? "25+"
                        : "500+"}
                </p>
                <p className="text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Benefit;