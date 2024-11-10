import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin w-16 h-16 border-4 border-sky-600 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default Spinner;
