import React from 'react';
import { Link } from 'react-router-dom';

const RightSection = ({ image, title, description, link1 }) => {
  return (
    <div className="flex h-[80vh] w-full justify-between px-32 pt-30">
      <div className="h-[40vh] w-[35%] pt-20 pl-10">
        <h2 className="mb-6 text-[32px] font-medium">{title}</h2>
        <p className="mb-4 leading-7 text-[#424242]">{description}</p>
        {link1 ? (
          <Link className="mr-20 font-medium text-[#387de1]">
            {link1} <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
          </Link>
        ) : null}
      </div>
      <div className="h-[50vh] w-[55%]">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default RightSection;
