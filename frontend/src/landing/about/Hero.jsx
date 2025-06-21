import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="h-[120vh] w-full px-32">
      <div className="flex h-[40vh] items-center justify-center text-[32px] font-medium tracking-[1.3px]">
        <h1>
          We pioneered the discount broking model in India. <br /> Now, we are breaking ground with
          our technology.
        </h1>
      </div>
      <div className="flex justify-center gap-8 border-t-1 border-zinc-100 pt-20 leading-7 text-[#424242]">
        <div className="w-[38%]">
          <p className="mt-4 mb-[15px]">
            We kick-started operations on the 15th of August, 2010 with the goal of breaking all
            barriers that traders and investors face in India in terms of cost, support, and
            technology. We named the company Zerodha, a combination of Zero and "Rodha", the
            Sanskrit word for barrier.
          </p>
          <p className="mt-4 mb-[15px]">
            Today, our disruptive pricing models and in-house technology have made us the biggest
            stock broker in India.
          </p>
          <p className="mt-4 mb-[15px]">
            Over 1.6+ crore clients place billions of orders every year through our powerful
            ecosystem of investment platforms, contributing over 15% of all Indian retail trading
            volumes.
          </p>
        </div>
        <div className="w-[38%]">
          <p className="mt-4 mb-[15px]">
            In addition, we run a number of popular open online educational and community
            initiatives to empower retail traders and investors.
          </p>
          <p className="mt-4 mb-[15px]">
            <a href="" className="text-[#387ed1]">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech startups with the goal
            of growing the Indian capital markets.
          </p>
          <p className="mt-4 mb-[15px]">
            And yet, we are always up to something new every day. Catch up on the latest updates on
            our <Link className="font-medium text-[#387ed1]">blog</Link> or see what the media is{' '}
            <Link className="font-medium text-[#387ed1]">saying about us</Link> or learn more about
            our business and product{' '}
            <Link className="font-medium text-[#387ed1]">philosophies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
