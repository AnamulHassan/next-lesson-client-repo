import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const ResetPassword = () => {
  const [error, setError] = useState('');
  const { resetUserPassword, dark } = useContext(AuthContext);
  const handleResetPassword = event => {
    const email = event.target.email.value;
    resetUserPassword(email)
      .then(() => {
        toast('Please check your email to reset your password', {
          duration: 5000,
          style: {
            border: '3px solid #adb5bd',
            padding: '16px',
            color: '#000',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#f4f7fc',
          },
        });
      })
      .catch(error => {
        setError(error.message);
      });
  };
  return (
    <section className={`${dark ? 'bg-[#343a40]' : ''} py-12 my-[-1px]`}>
      <section
        className="w-[95%] lg:full mx-auto mt-5 max-w-md p-4 rounded-md shadow sm:p-8  bg-[#f4f7fc]  text-[#1b4460
]"
      >
        <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-center">
          Forget Password
        </h2>
        <p className="text-base font-semibold text-center  text-[#1b4460]">
          Do you want to create a new account?
          <Link
            to="/register"
            className="font-bold text-lg inline-block leading-5 text-center ml-2 select-none text-[#27aae2] border-b-2 hover:border-[#27aae2] duration-200 border-[#f4f7fc]"
          >
            Sign up here
          </Link>
        </p>
        <div className="my-6 space-y-1"></div>
        <div className=" relative border-b-2 border-[#28374a] w-full mb-3">
          <p className=" absolute left-2/4 top-full translate-x-[-50%] translate-y-[-50%] px-3 select-none font-semibold text-[#28374a] bg-[#f4f7fc]">
            OR
          </p>
        </div>
        <Form onSubmit={handleResetPassword}>
          <div className="space-y-2">
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-md ml-3 font-semibold select-none"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="example@mail.com"
                className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff]  outline-none"
              />
            </div>
            <div className="space-y-1"></div>
          </div>
          <p
            className={`${
              error ? 'block' : 'hidden'
            } mb-[-24px] text-center text-md font-semibold text-[#e15a51]`}
          >
            {error}
          </p>
          <input
            type="submit"
            value="Continue"
            className=" mt-7 px-8 py-1 select-none font-semibold rounded-md cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
          />
          <div className="flex justify-center mt-4">
            <Link
              to="/login"
              className=" inline-block leading-5 font-semibold tracking-tight select-none text-[#27aae2] border-b-2 border-[#27aae2] duration-200 hover:border-[#f4f7fc]  "
            >
              Back to Log in{' '}
              <HiArrowNarrowRight className="inline-block text-base" />
            </Link>
          </div>
        </Form>
      </section>
    </section>
  );
};

export default ResetPassword;
