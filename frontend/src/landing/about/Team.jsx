import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  return (
    <div className="h-[90vh] w-full px-36">
      <div className="mb-10 flex h-[10vh] items-center justify-center text-[32px] font-medium tracking-[1.3px]">
        <h1>People</h1>
      </div>
      <div className="flex justify-center pt-8 leading-7 text-[#424242]">
        <div className="flex w-[45%] flex-col items-center">
          <img className="h-80 w-80 rounded-full" src="/media/images/nithinKamath.jpg" alt="" />
          <h3 className="mt-8 text-xl font-medium">Nithin Kamath</h3>
          <p className="mt-4 mb-[15px] text-[14.4px] text-[#666666]">Fonder, CEO</p>
        </div>
        <div className="w-[45%]">
          <p className="mt-4 mb-[15px]">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during
            his decade long stint as a trader. Today, Zerodha has changed the landscape of the
            Indian broking industry.
          </p>
          <p className="mt-4 mb-[15px]">
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market
            Data Advisory Committee (MDAC).
          </p>
          <p className="mt-4 mb-[15px]">Playing basketball is his zen.</p>
          <p>
            Connect on
            <Link className="font-medium text-[#387ed1]"> Homepage </Link>/
            <Link className="font-medium text-[#387ed1]"> TradingQnA</Link> /
            <Link className="font-medium text-[#387ed1]"> Twitter</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
