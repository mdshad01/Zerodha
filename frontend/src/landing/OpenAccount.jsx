import React from 'react';
import { Link } from 'react-router-dom';

export const OpenAccount = () => {
  return (
    <div className="h-[40vh] text-center">
      <h2 className="mb-5 text-4xl font-medium text-[#424242]">404 Not Found</h2>
      <p className="mb-10 text-[#666666]">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades
      </p>
      <Link className="my-7 rounded bg-[#387de1] px-8 py-2 text-xl font-medium text-white hover:bg-black">
        Sign up for free
      </Link>
    </div>
  );
};
