import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const errorMessage = useRouteError();
  console.log(errorMessage.statusText);
  return (
    <section
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
      className="flex items-center h-screen p-16 bg-[#f1f3f5] text-[#343a40]"
    >
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-3xl text-[#c92a2a] ">
            <span className=" text-9xl  text-[#212529] block">
              {errorMessage?.status}
            </span>
            {errorMessage?.statusText}
          </h2>
          <p className="text-lg font-semibold text-[#868e96] md:text-3xl">
            Sorry, we couldn't find this page. Please check your url
          </p>
          <Link
            to="/"
            className=" mt-7 px-8 py-2 select-none font-bold inline-flex items-center justify-center rounded-md cursor-pointer bg-[#27aae2] text-2xl  text-[#f4f7fc] leading-10 duration-300 hover:bg-[#0071b3]"
          >
            Back to homepage{' '}
            <FaChevronRight className="text-2xl ml-2 leading-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
