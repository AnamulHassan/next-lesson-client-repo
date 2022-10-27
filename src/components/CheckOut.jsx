import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import PurchaseCourse from './PurchaseCourse';

const PremiumAccess = () => {
  const { dark } = useContext(AuthContext);
  const selectedCourses = useLoaderData();
  const navigate = useNavigate();
  const handleCheckOut = () => {
    toast.success('Check Out Successful');
    navigate('/');
  };
  return (
    <section
      className={`${dark ? 'bg-[#343a40] text-[#e9ecef]' : ''} my-[-1px]`}
    >
      <section className={`py-12`}>
        <section
          style={{
            fontFamily: "'Nunito', sans-serif",
          }}
          className={`w-4/5 lg:w-2/4 mx-auto ${
            dark ? 'bg-[#495057] ' : ''
          }py-4 lg:py-8 px-2 lg:px-4 rounded-lg`}
        >
          <div className="flex flex-col max-w-3xl p-0 lg:p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-2xl font-semibold">Your cart</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
              {selectedCourses?.map((courses, index) => (
                <PurchaseCourse
                  key={index}
                  courseData={courses}
                ></PurchaseCourse>
              ))}
            </ul>
            <div className="space-y-1 text-right">
              <p>
                Total amount:
                <span className="font-semibold">357 €</span>
              </p>
              <p className="text-sm dark:text-gray-400">
                Not including taxes and shipping costs
              </p>
            </div>
            <div className=" flex flex-col lg:flex-row justify-end space-x-4">
              <Link
                to="/courses"
                type="button"
                className=" mt-7 px-10 py-1 select-none rounded-3xl inline-flex items-center justify-center font-semibold cursor-pointer bg-[#27aae2] text-md lg:text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
              >
                Back to courses
              </Link>
              <button
                onClick={handleCheckOut}
                type="button"
                className=" mt-7 px-10 py-1 select-none rounded-3xl inline-flex items-center justify-center font-semibold cursor-pointer bg-[#27aae2] text-md lg:text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default PremiumAccess;
