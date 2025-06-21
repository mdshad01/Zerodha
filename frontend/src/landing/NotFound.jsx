import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex h-[50vh] flex-col items-center justify-center">
      <h2 className="mb-5 text-4xl font-medium">404 Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist</p>
    </div>
  );
};

export default NotFound;
