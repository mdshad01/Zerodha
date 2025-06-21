import React from 'react';
import { Link } from 'react-router-dom';
export const Hero = () => {
  return (
    <div className="flex h-[100vh] w-full flex-col items-center pt-17">
      {/* <img className="h-screen w-full" src="media/images/homeHero.png" alt="image" /> */}
      <img className="h-[323.33px] w-[768.32px]" src="extra/image.png" alt="image" />
      <h1 className="mt-18 text-5xl font-medium tracking-normal text-[#424242]">
        Invest in everything
      </h1>
      <p className="my-4 text-xl text-[#424242]">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
      </p>
      <Link className="my-7 rounded bg-[#387de1] px-8 py-2 text-xl font-medium text-white hover:bg-black">
        Sign up for free
      </Link>
    </div>
  );
};
