import React from 'react';
import { Oval } from 'react-loader-spinner';

const LoaderPrimary = () => {
  return (
    <div>
      <Oval
        height={80}
        width={80}
        color="#27aae2"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#868e96"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default LoaderPrimary;
