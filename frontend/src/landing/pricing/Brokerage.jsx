import React from 'react';
import { Link } from 'react-router-dom';

const Brokerage = () => {
  return (
    <div className="flex h-[55vh] w-full border-t-1 border-[#66666611] px-32 pt-16">
      <div className="w-[70%]">
        <Link>
          <h3 className="mb-8 pl-32 text-2xl font-medium text-[#387ed1]">Brokerage Calculator</h3>
        </Link>
        <ul className="list-inside list-disc space-y-2 text-[13px] text-[#666666]">
          <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
          <li>Digital contract notes will be sent via e-mail.</li>
          <li>
            Physical copies of contract notes, if required, shall be charged ₹20 per contract note.
            Courier charges apply.
          </li>
          <li>
            For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is
            lower).
          </li>
          <li>
            For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
          </li>
          <li>
            If the account is in debit balance, any order placed will be charged ₹40 per executed
            order instead of ₹20 per executed order.
          </li>
        </ul>
      </div>
      <div className="w-[30%]">
        <h3 className="text-2xl font-medium text-[#387ed1]">List of charges</h3>
      </div>
    </div>
  );
};

export default Brokerage;
