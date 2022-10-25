import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { AuthContext } from '../context/UserContext';
/*
Navigation color
--------------------------------------
logo: #575c5f 
text : #28374a
login: #27aae2
bg: #ffffff

-------------------------------
header text:  #ffffff
hero bg: #1b4460 
common bg 2 : #f4f7fc 
common text: #28374a 
bg up : #f2f7fa  
button bg: #0071b3   
button text: #ffffff
btn bg #8cc63e 
*/

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => setError(error.message));
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <section
      className="w-[95%] lg:full mx-auto mt-5 max-w-md p-4 rounded-md shadow sm:p-8  bg-[#f4f7fc]  text-[#1b4460
    ]"
    >
      <h2 className="mb-3 text-3xl font-semibold tracking-tighter text-center">
        Login
      </h2>
      <p className="text-base font-semibold text-center  text-[#1b4460]">
        Don't have account?
        <Link
          to="/register"
          className="font-bold ml-2 select-none text-[#27aae2] leading-4 border-b-2 hover:border-[#27aae2] duration-200 border-[#f4f7fc]"
        >
          Sign up here
        </Link>
      </p>
      <div className="my-6 space-y-1">
        <button
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full  py-1 space-x-4 border-2 rounded-md focus:ring-1 focus:ring-offset-1  
          border-[#f2f7fa]  bg-[#ffffff]  
           focus:ring-[#27aae2]"
        >
          <FcGoogle className="text-xl" />
          <p className="text-md font-semibold text-[#1b4460]">
            Login with Google
          </p>
        </button>
        <button
          aria-label="Login with GitHub"
          className="flex items-center justify-center w-full  py-1 space-x-4 border-2 rounded-md focus:ring-1 focus:ring-offset-1  
          border-[#f2f7fa]  bg-[#ffffff]
           focus:ring-[#27aae2]"
        >
          <FaGithub className="text-[#000] text-xl" />
          <p className="text-md font-semibold text-[#1b4460]">
            Login with Github
          </p>
        </button>
      </div>
      <div className=" relative border-b-2 border-[#28374a] w-full mb-3">
        <p className=" absolute left-2/4 top-full translate-x-[-50%] translate-y-[-50%] px-3 select-none font-semibold text-[#28374a] bg-[#f4f7fc]">
          OR
        </p>
      </div>
      <Form onSubmit={handleLogin}>
        <div className="space-y-2">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm ml-3 font-semibold select-none"
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
          <div className="space-y-1">
            <div className="flex justify-between">
              <label
                htmlFor="password"
                className="text-sm ml-3 text-md font-semibold select-none"
              >
                Password
              </label>
              <Link
                to="/reset_password"
                className="text-sm select-none  font-semibold leading-4 border-b-2 hover:border-[#0071b3] border-[#f4f7fc] hover:text-[#0071b3] duration-300 text-[#27aae2]"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                name="password"
                id="password"
                required
                placeholder="Your password "
                className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
              />

              {showPass ? (
                <FaEyeSlash
                  className="absolute text-[#575c5f] text-lg right-[3%] top-2/4 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                  onClick={handleShowPass}
                />
              ) : (
                <FaEye
                  className="absolute text-[#575c5f] text-lg right-[3%] top-2/4 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                  onClick={handleShowPass}
                />
              )}
            </div>
          </div>
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
          value="Login"
          className=" mt-7 px-8 py-1 select-none font-semibold rounded-md cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
        />
      </Form>
    </section>
  );
};

export default Login;
