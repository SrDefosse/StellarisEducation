import React from 'react';

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div className={`w-[90%] max-w-[2100px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 ${className || ''}`}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
