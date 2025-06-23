import React from 'react';
import { Link } from 'react-router-dom';
// import { Search } from 'lucide-react'; // or use an SVG icon

const Hero = () => {
  return (
    <div className="h-[65vh] w-full bg-[#387ed1] text-white">
      <div className="mx-auto h-full max-w-7xl px-10 py-12">
        {/* Top Navigation */}
        <div className="mx-12 mb-12 flex items-center justify-between">
          <Link className="text-[20.4px] font-medium">Support Portal</Link>
          <Link className="border-b border-white">Track tickets</Link>
        </div>

        {/* Search and Links */}
        <div className="mx-12 flex justify-between gap-8">
          {/* Left Section */}
          <div className="w-3/5">
            <h2 className="text-[ mb-6 text-2xl leading-snug font-[350]">
              Search for an answer or browse help topics to create a <br /> ticket
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected ..."
                className="w-full rounded-md bg-white px-5 py-4 text-gray-700 placeholder-gray-500 focus:outline-none"
              />
              <i class="fa-solid fa-magnifying-glass absolute top-5 right-6 text-lg text-gray-500"></i>
            </div>

            {/* Quick Links */}
            <div className="mt-4 space-y-3 text-white">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-[16px]">
                <Link className="border-b border-white">Track account opening</Link>
                <Link className="border-b border-white">Track segment activation</Link>
                <Link className="border-b border-white">Intraday margins</Link>
              </div>
              <div className="mt-2">
                <Link className="border-b border-white text-[16px]">Kite user manual</Link>
              </div>
            </div>
          </div>

          {/* Right Section - Featured */}
          <div className="w-2/5">
            <h3 className="mb-4 text-xl font-medium">Featured</h3>
            <ol className="list-decimal space-y-3 pl-5 text-[17px]">
              <li>
                <Link className="border-b border-white">
                  Surveillance measure on scrips – June 2025
                </Link>
              </li>
              <li>
                <Link className="border-b border-white">
                  Rights Entitlements listing in June 2025
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
