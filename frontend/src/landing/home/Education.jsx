import React from 'react';
import { Link } from 'react-router-dom';

export const Education = () => {
  return (
    <div className="flex h-[65vh] w-full justify-between px-38">
      <div className="w-[45%]">
        <img className="h-80 w-108" src="/media/images/education.svg" alt="" />
      </div>
      <div className="w-[48%]">
        <h2 className="mb-5 text-[32px] font-medium text-[#424242]">
          Free and open market education
        </h2>
        <p className="mb-5 leading-7 text-[#666666]">
          Varsity, the largest online stock market education book in the world covering everything
          from the basics to advanced trading.
        </p>
        <Link className="font-medium text-[#387de1]">
          Varsity <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
        </Link>
        <p className="mt-8 mb-5 leading-7 text-[#666666]">
          TradingQ&A, the most active trading and investment community in India for all your market
          related queries
        </p>
        <Link className="font-medium text-[#387de1]">
          TradingQ&A <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};
