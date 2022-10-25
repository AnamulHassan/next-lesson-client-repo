import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/UserContext';
import { Link, NavLink } from 'react-router-dom';
import { FaRegUserCircle, FaBars } from 'react-icons/fa';
import { HiLightBulb, HiMoon } from 'react-icons/hi';
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

const Header = () => {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const handleOpenNav = () => {
    setOpen(!open);
  };
  const handleDarkMode = () => {
    setDark(!dark);
  };
  // console.log(open);
  return (
    <header>
      <nav className=" bg-[#ffffff] w-full flex relative justify-between items-center mx-auto px-8 h-20">
        <div className="">
          <Link className="" to="/">
            <div className="block">
              <h2 className="text-3xl tracking-tighter font-bold">
                Next Lesson
              </h2>
            </div>
          </Link>
        </div>
        <div
          className={`flex flex-col lg:flex-row lg:justify-center left-2/4 lg:left-0 bg-[#f4f7fc] lg:bg-transparent ${
            open
              ? 'top-[300%] py-8 w-4/5 mx-auto'
              : 'top-[-200%] w-2 blur-3xl lg:blur-0'
          }  lg:top-0 translate-x-[-50%] lg:translate-x-0 translate-y-[-50%] lg:translate-y-0 absolute lg:static z-50 items-center text-xl font-semibold  rounded-full duration-500 text-[#575c5f]`}
        >
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? 'shadow-lg px-6 text-black shadow-[#cdcecf] duration-700 py-1 rounded-full mx-0 lg:mx-4'
                : 'mx-0 lg:mx-4 px-6 py-1'
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? 'shadow-lg shadow-[#cdcecf] duration-700 mx-0 lg:mx-4 rounded-full px-6 py-1'
                : 'mx-0 lg:mx-4 px-6 py-1'
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'shadow-lg mx-0 shadow-[#cdcecf] duration-700 lg:mx-4 rounded-full px-6 py-1'
                : 'mx-0 lg:mx-4 px-6 py-1'
            }
          >
            About
          </NavLink>
          <NavLink
            to="premium"
            className={({ isActive }) =>
              isActive
                ? 'shadow-lg shadow-[#cdcecf] duration-700 rounded-full px-6 py-1 '
                : 'px-6 py-1'
            }
          >
            Premium
          </NavLink>
        </div>

        <div className="flex justify-end items-center relative">
          <div className="flex items-center justify-center">
            <button
              onClick={handleDarkMode}
              type="button"
              className={`${
                dark
                  ? 'bg-[#575c5f] border-[#f4f7fc]'
                  : 'bg-white border-[#bcbebf]'
              } border-2  hover:shadow-lg duration-500 rounded-full py-1 md:py-2 px-2 md:px-3`}
            >
              {dark ? (
                <HiMoon className="h-6 w-6 text-white rounded-full" />
              ) : (
                <HiLightBulb className="h-6 w-6 text-[#575c5f] rounded-full" />
              )}
            </button>
          </div>
          <div className="block">
            <div className="flex items-center">
              <div className="px-1">
                <div className="">
                  {user?.uid ? (
                    <Link to="/profile">
                      <img src={user?.photoURL} alt="" />
                    </Link>
                  ) : user?.uid ? (
                    <Link to="/profile">
                      <FaRegUserCircle className="h-6 md:h-8 w-6 md:w-8 p-1 hover:text-[#0071b3] text-[#575c5f] border-2 border-[#bcbebf] rounded-full" />
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="text-lg bg-[#27aae2] text-[#f4f7fc]  font-semibold inline-block py-2 lg:py-3 bg leading-4 px-2 border-2 border-[#27aae2] rounded-full"
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
              <button
                onClick={handleOpenNav}
                type="button"
                className="block lg:hidden"
              >
                <div className="l">
                  <FaBars className="h-10 w-10 p-2 duration-200  hover:text-[#0071b3] text-[#575c5f]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
