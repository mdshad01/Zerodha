import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex h-[50vh] w-full flex-col items-center border-b-1 border-[#66666611] pt-7">
      <h1 className="mt-18 text-5xl font-medium tracking-normal text-[#424242]">
        Zerodha Products
      </h1>
      <p className="my-4 text-xl text-[#424242]">Sleek, modern, and intuitive trading platforms </p>
      <p className="text-[#424242]">
        Check out our
        <Link className="font-medium text-[#387de1]">
          {' '}
          investment offerings<i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </p>
    </div>
  );
};

export default Hero;
