import React from 'react';
import { Link } from 'react-router-dom';

const Universe = () => {
  return (
    <div className="h-screen w-full px-32 py-10">
      <div className="mb-10 text-center">
        <h2 className="mb-6 text-[32px] font-medium tracking-wide opacity-70">
          The Zerodha Universe
        </h2>
        <p className="text-sm text-gray-600">
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>

      <div className="mt-16 flex w-full items-start justify-evenly">
        {/* Column 1 */}
        <div className="flex w-[25%] flex-col items-center gap-12">
          <Link>
            <div className="flex h-[55px] items-center justify-center">
              <img
                className="h-full object-contain"
                src="/media/images/zerodhaFundhouse.png"
                alt="Zerodha Fund House"
              />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Our asset management venture <br /> that is creating simple and transparent index{' '}
              <br />
              funds to help you save for your goals.
            </p>
          </Link>

          <Link>
            <div className="flex h-[55px] items-center justify-center">
              <img
                className="h-full object-contain"
                src="/media/images/streakLogo.png"
                alt="Streak"
              />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Systematic trading platform <br /> that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </Link>
        </div>

        {/* Column 2 */}
        <div className="flex w-[25%] flex-col items-center gap-16">
          <Link>
            <div className="flex h-[40px] items-center justify-center">
              <img
                className="h-full object-contain"
                src="/media/images/sensibullLogo.svg"
                alt="Sensibull"
              />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Options trading platform that lets you <br /> create strategies, analyze positions,
              and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </Link>

          <Link>
            <div className="flex h-[55px] items-center justify-center">
              <img
                className="h-full object-contain"
                src="/media/images/smallcaseLogo.png"
                alt="Smallcase"
              />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Thematic investing platform <br />
              that helps you invest in diversified <br /> baskets of stocks on ETFs.
            </p>
          </Link>
        </div>

        {/* Column 3 */}
        <div className="flex w-[25%] flex-col items-center gap-12">
          <Link>
            <div className="flex h-[55px] items-center justify-center">
              <img className="h-full object-contain" src="/media/tijori.svg" alt="Tijori" />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Investment research platform <br /> that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </Link>

          <Link>
            <div className="flex h-[55px] items-center justify-center">
              <img
                className="h-full object-contain"
                src="/media/images/dittoLogo.png"
                alt="Ditto"
              />
            </div>
            <p className="mt-5 text-center text-xs leading-5 text-[#9b9b9b]">
              Personalized advice on life <br /> and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </Link>
        </div>
      </div>
      <div className="mt-16 flex h-11 w-full items-center justify-center">
        <Link className="my-7 rounded bg-[#387de1] px-8 py-2 text-xl font-medium text-white hover:bg-black">
          Sign up for free
        </Link>
      </div>
    </div>
  );
};

export default Universe;
