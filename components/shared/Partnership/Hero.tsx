import React from 'react';

const PartnershipSection: React.FC = () => {
  return (
    <div className="bg-[#000138] text-white p-10 rounded-lg text-center font-poppins">
      <h1 className="text-4xl font-bold mb-5">
        BUILDING THE <strong className="text-[#8f56ff]">FUTURE</strong> TOGETHER
      </h1>
      <p className="text-base font-bold leading-relaxed mb-7">
        There are 4 branches of competition in this activity, namely Scientific Paper Competition (SPC), <br/> English Debate Competition (EDC), Kompetisi Debat Bahasa Indonesia (KDBI)<br/> and Digital Content Competition (DCC)
      </p>
      <div className="flex justify-center space-x-55 mb-7">
        <div className="text-center">
          <span className="text-3xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904ef1] to-[#6b55f0]">
            50+
          </span>
          <span className="text-xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904ef1] to-[#6b55f0]">
            All Time Partners
          </span>
        </div>
        <div className="text-center">
          <span className="text-3xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904ef1] to-[#6b55f0]">
            3
          </span>
          <span className="text-xl font-bold block bg-clip-text text-transparent bg-gradient-to-r from-[#904ef1] to-[#6b55f0]">
            Years Experience
          </span>
        </div>
      </div>
      <div className="flex justify-center space-x-5">
        <button className="py-3 px-3 rounded-2xl font-bold text-white bg-gradient-to-r from-[#af52ff] to-[#6555ef]">
          Become a Partner
        </button>
        <button className="py-3 px-6 rounded-2xl font-bold text-white border border-white bg-transparent">
          View Partner
        </button>
      </div>
    </div>
  );
};

export default PartnershipSection;