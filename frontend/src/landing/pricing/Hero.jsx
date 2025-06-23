import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="h-[130vh] w-full px-32">
      {/* Header Section */}
      <div className="flex h-[50vh] w-full flex-col items-center pt-7">
        <h1 className="mt-18 text-5xl font-medium tracking-normal text-[#424242]">Charges</h1>
        <p className="my-4 text-xl text-[#9b9b9b]">List of all charges and taxes </p>
      </div>

      {/* Cards Section */}
      <div className="flex h-[80vh] w-full justify-between pt-10">
        {/* Card 1 */}
        <div className="flex w-[30%] flex-col items-center text-center">
          <div className="flex h-[180px] w-full items-center justify-center">
            <img className="h-full object-contain" src="/media/images/pricingEquity.svg" alt="" />
          </div>
          <h1 className="mb-5 text-[28px] font-medium text-[#424242]">Free equity delivery</h1>
          <p className="mt-4 mb-[15px] leading-6 text-[#666666]">
            All equity delivery investments (NSE, BSE), <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex w-[30%] flex-col items-center text-center">
          <div className="flex h-[180px] w-full items-center justify-center">
            <img className="h-full object-contain" src="/media/images/intradayTrades.svg" alt="" />
          </div>
          <h1 className="mb-5 text-[28px] font-medium text-[#424242]">Intraday and F&O trades</h1>
          <p className="mt-4 mb-[15px] leading-6 text-[#666666]">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br />
            executed order on intraday trades across <br />
            equity, currency, and commodity trades. <br />
            Flat ₹20 on all option trades.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex w-[30%] flex-col items-center text-center">
          <div className="flex h-[180px] w-full items-center justify-center">
            <img className="h-full object-contain" src="/media/images/pricingEquity.svg" alt="" />
          </div>
          <h1 className="mb-5 text-[28px] font-medium text-[#424242]">Free direct MF</h1>
          <p className="mt-4 mb-[15px] leading-6 text-[#666666]">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
