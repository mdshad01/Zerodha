import React from 'react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="mt-16 mb-5 h-[45vh] w-full px-38 py-10">
      <div className="flex h-35">
        <div className="h-24 w-[39%]">
          <h1 className="mb-7 text-[32px] font-medium text-[#424242]">Unbeatable pricing</h1>
          <p className="mb-6">
            We pioneered the concept of discount broking and price transparency in India. Flat fees
            and no hidden charges
          </p>
        </div>
        <div className="mt-10 flex h-24 w-[59%] justify-around text-[#666666]">
          <div className="flex w-1/3 items-center">
            <img className="h-22" src="/media/images/pricing0.svg" alt="" />
            <p className="text-[10px]">Free account opening</p>
          </div>
          <div className="flex w-1/3 items-center">
            <img className="h-22" src="/media/images/pricingEquity.svg" alt="" />
            <p className="pl-[-10px] text-[10px]">Free equity delivery and direct mutual fund</p>
          </div>
          <div className="flex w-1/3 items-center">
            <img className="h-22" src="/media/images/intradayTrades.svg" alt="" />
            <p className="text-[10px]">Intraday and F&O</p>
          </div>
        </div>
      </div>
      <Link className="text-[#387ed1]">
        See Pricing <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
      </Link>
    </div>
  );
};
