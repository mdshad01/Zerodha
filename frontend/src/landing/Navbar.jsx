import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-100 w-full">
      <nav className="flex h-17 w-full items-center justify-between border-b-1 border-zinc-200 bg-white px-38">
        <div className="h-4 w-32">
          <img src="media/images/logo.svg" alt="Logo" />
        </div>
        <div className="flex gap-10 text-sm text-[#666666]">
          <Link to="/signup" className="delay-150 hover:text-[#387de1]">
            Signup
          </Link>
          <Link to="/about" className="delay-150 hover:text-[#387de1]">
            About
          </Link>
          <Link to="/products" className="delay-150 hover:text-[#387de1]">
            Products
          </Link>
          <Link to="pricing" className="delay-150 hover:text-[#387de1]">
            Pricing
          </Link>
          <Link to="/support" className="delay-150 hover:text-[#387de1]">
            Support
          </Link>
        </div>
      </nav>
    </div>
  );
};
