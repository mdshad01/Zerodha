import React from 'react';
import { Navbar } from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import { Link } from 'react-router-dom';
import Universe from './Universe';

const ProductPage = () => {
  return (
    <>
      <Hero />
      <LeftSection
        image="/media/images/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo"
        link2="Learn more"
        google="/media/images/googlePlayBadge.svg"
        app="/media/images/appstoreBadge.svg"
      />
      <RightSection
        image="/media/console2.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more"
      />
      <LeftSection
        image="/media/images/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin "
        google="/media/images/googlePlayBadge.svg"
        app="/media/images/appstoreBadge.svg"
      />
      <RightSection
        image="/media/kiteApi.svg"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect "
      />
      <LeftSection
        image="/media/images/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        google="/media/images/googlePlayBadge.svg"
        app="/media/images/appstoreBadge.svg"
      />
      <div className="my-24 text-center text-xl text-[#424242]">
        Want to know more about our technology stack? Check out the
        <Link className="font-medium text-[#387de1]"> Zerodha.tech</Link> blog.
      </div>
      <Universe />
    </>
  );
};

export default ProductPage;
