import React from 'react';
import { Link } from 'react-router-dom';

export const Awards = () => {
  return (
    <div className="h-[110vh] w-full px-38 py-10">
      <div className="flex justify-between">
        <div className="w-[39%] text-[#424242]">
          <h2 className="mb-10 text-[32px] font-medium">Trust with confidence</h2>
          <h3 className="text-xl font-medium">Customer-first always</h3>
          <p className="mt-[5px] mb-8 leading-7 text-[#666666]">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
            investments and contribute to 15% of daily retail exchange volumes in India.
          </p>
          <h3 className="text-xl font-medium">No spam or gimmicks</h3>
          <p className="mt-[5px] mb-8 leading-7 text-[#666666]">
            No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
            that you use at your pace, the way you like. Our philosophies.
          </p>
          <h3 className="text-xl font-medium">The Zerodha universe</h3>
          <p className="mt-[5px] mb-8 leading-7 text-[#666666]">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
            you tailored services specific to your needs.
          </p>
          <h3 className="text-xl font-medium">Do better with money</h3>
          <p className="mt-[5px] mb-8 leading-7 text-[#666666]">
            With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but
            actively help you do better with your money.
          </p>
        </div>
        <div className="w-[57%]">
          <img className="h-[88%]" src="extra/ecosystem.png" alt="" />
          <div className="flex w-full items-center justify-center gap-10">
            <Link className="text-[#387ed1]">
              Explore our Products<i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </Link>
            <Link className="text-[#387ed1]">
              Try Kite demo<i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src="media/img.png" alt="" />
      </div>
    </div>
  );
};
