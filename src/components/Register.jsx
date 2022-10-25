import React from 'react';
import { Form, Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { AuthContext } from '../context/UserContext';
import { useContext } from 'react';

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    setUser,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  // Create User Function
  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoUrl.value;
    const confirmPassword = form.confirmPassword.value;
    const fullName = form.firstName.value + ' ' + form.lastName.value;
    // Condition for checking password
    if (!/(?=.*?[A-Z])/.test(password)) {
      setError('have at least one capital letter');
      return;
    }
    if (!/(?=.*?[0-9])/.test(password)) {
      setError('have at least one number');
      return;
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      setError('have at least one special character');
      return;
    }
    if (!/.{8,}/.test(password)) {
      setError('be at least 8 characters');
      return;
    }
    if (password !== confirmPassword) {
      setError("confirm password didn't match");
      return;
    }
    createUser(email, password)
      .then(result => {
        console.log(result.user);
        setError('');
        form.reset();
        handleUserInfoUpdate(fullName, photoURL);
        setUser(result.user);
      })
      .catch(error => setError(error.message));
  };
  // Update User Profile Function
  const handleUserInfoUpdate = (name, photoURL) => {
    updateUserProfile(name, photoURL, '', '')
      .then(() => {})
      .catch(error => setError(error.message));
  };
  // Password Show Or Hide Function
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  // Login With Google Function
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Login With Github Function
  const handleLoginWithGithub = () => {
    loginWithGithub()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <section
      className="w-[95%] lg:full mx-auto mt-5 max-w-md p-4 rounded-md shadow sm:p-8  bg-[#f4f7fc]  text-[#1b4460
    ]"
    >
      <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>
      <p className="text-base font-semibold text-center  text-[#1b4460]">
        You have an account already?
        <Link
          to="/login"
          rel="noopener noreferrer"
          className="font-bold ml-2 select-none text-[#27aae2] leading-5 border-b-2 hover:border-[#27aae2] border-[#f4f7fc] duration-300"
        >
          Login here
        </Link>
      </p>
      <div className="my-6 space-y-1">
        <button
          onClick={handleLoginWithGoogle}
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
          onClick={handleLoginWithGithub}
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
      <Form onSubmit={handleRegister}>
        <div className="space-y-1">
          <div className="w-full flex justify-between">
            <div className="space-y-1">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold ml-3 select-none"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="first-name"
                placeholder="First name"
                className="w-[95%] px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
              />
            </div>
            <div className="space-y-1">
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold ml-3 select-none"
              >
                Last name
              </label>
              <div className="flex flex-col items-end">
                {' '}
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  placeholder="Last name"
                  className="w-[95%] px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
                />
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <label
              htmlFor="photoUrl"
              className="block ml-3  text-sm font-semibold select-none"
            >
              Photo Url
            </label>
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="Photo url"
              className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block ml-3  text-sm font-semibold select-none"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="example@mail.com"
              className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
            />
          </div>
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="text-sm font-semibold select-none ml-3 "
            >
              Password
            </label>

            <input
              type={showPass ? 'text' : 'password'}
              name="password"
              id="password"
              required
              placeholder="Your password "
              className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-semibold ml-3  select-none"
          >
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showPass ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm password "
              className="w-full px-3 py-1 border rounded-md text-sm font-semibold  border-[#f2f7fa]  bg-[#ffffff] outline-none"
            />

            {showPass ? (
              <FaEyeSlash
                className="absolute text-[#575c5f] text-lg  right-[3%] top-2/4 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleShowPass}
              />
            ) : (
              <FaEye
                className="absolute text-[#575c5f] text-lg  right-[3%] top-2/4 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                onClick={handleShowPass}
              />
            )}
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
          value="Register"
          className=" mt-7 px-8 py-2 select-none font-semibold rounded-md cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
        />
      </Form>
    </section>
  );
};

export default Register;
