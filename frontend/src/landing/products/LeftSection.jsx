import React from 'react';
import { Link } from 'react-router-dom';

const LeftSection = ({ image, title, description, link1, link2, google, app }) => {
  return (
    <div className="flex h-[80vh] w-full justify-between px-32 pt-20">
      <div className="w-[55%] pl-16">
        <img src={image} alt="image" />
      </div>
      <div className="w-[35%] pt-12 pr-5 pl-10">
        <h2 className="mb-6 text-[32px] font-medium">{title}</h2>
        <p className="mb-4 leading-7 text-[#424242]">{description}</p>
        {link1 ? (
          <Link className="mr-20 font-medium text-[#387de1]">
            {link1} <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
          </Link>
        ) : null}
        {link2 ? (
          <Link className="font-medium text-[#387de1]">
            {link2} <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
          </Link>
        ) : null}
        <div className="mt-6 flex h-11 gap-4">
          <img className="" src={google} alt="playstore" />
          <img className="" src={app} alt="appstore" />
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
