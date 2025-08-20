import { main } from 'framer-motion/client';
import React from 'react';

const PartnershipSection: React.FC = () => {
  return (
    <main className="bg-[#0A0B30]">
      <div className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto text-white p-10 pt-10 sm:pt-20 text-center">
        <h1 className="text-4xl font-bold mb-5">
          BUILDING THE <strong className="bg-gradient-to-r from-[#904EF1] from-28% to-[#6155EE] to-100% bg-clip-text text-transparent">FUTURE</strong> TOGETHER
        </h1>
        <p className="text-sm sm:text-base font-bold leading-relaxed mb-7">
          There are 4 branches of competition in this activity, namely Scientific Paper Competition (SPC), <br /> English Debate Competition (EDC), Kompetisi Debat Bahasa Indonesia (KDBI)<br /> and Digital Content Competition (DCC)
        </p>
        <div className="flex justify-center space-x-20 sm:space-x-55 mb-7">
          <div className="text-center">
            <span className="text-3xl font-bold block bg-clip-text text-transparent bg-gradient-to-br from-[#904EF1] to-[#6055EE] from-0% to-100%">
              50+
            </span>
            <span className="text-xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#8F4DF0] to-[#6155EE] from-0% to-100%">
              All Time Partners
            </span>
          </div>
          <div className="text-center">
            <span className="text-3xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904EF1] to-[#6055EE] from-0% to-100%">
              3
            </span>
            <span className="text-xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904EF1] to-[#6055EE] from-0% to-100%">
              Years Experience
            </span>
          </div>
        </div>
        <div className="flex justify-center space-x-5">
          <button className="py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#904EF1] to-[#6155EE] from-38% to-100% hover:bg-white hover:bg-none hover:text-black cursor-pointer">
            Become a Partner
          </button>
          <button className="py-3 px-4 rounded-xl font-bold text-white border border-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black cursor-pointer">
            View Partner
          </button>
        </div>
      </div>
    </main>
  );
};

export default PartnershipSection;