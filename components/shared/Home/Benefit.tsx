import React from 'react';

const Benefit = () => {
  return (
    <div className="bg-gradient-to-br from-[#452587] to-[#551d86] py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto rounded-2xl bg-gradient-to-r from-[#8838ea] to-blue-500 p-8 text-center text-white">
        <p className="text-sm font-light mb-2">Total prize value and appreciation for all categories</p>
        <h2 className="text-2xl font-bold mb-4">Total Benefit Value</h2>
        <p className="text-4xl font-extrabold text-yellow-300 mb-8">Rp 75.000.000+</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xl font-bold mb-1 text-yellow-300">1000+</p>
            <p className="text-sm">Sertifikat</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xl font-bold mb-1 text-yellow-300">50+</p>
            <p className="text-sm">Trophy</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xl font-bold mb-1 text-yellow-300">25+</p>
            <p className="text-sm">Plaque</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-xl font-bold mb-1 text-yellow-300">500+</p>
            <p className="text-sm">Merch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;