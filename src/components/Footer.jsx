import { Tooltip } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../asset/brand-logo.png';
import logoWhite from '../asset/brand-logo-white.png';
import { AuthContext } from '../context/UserContext';

const Footer = () => {
  const { dark } = useContext(AuthContext);
  return (
    <footer
      className={`px-4 divide-y ${
        dark ? 'bg-[#343a40] text-[#e9ecef]' : 'bg-[#f1f3f5] text-[#495057]'
      }`}
    >
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <div className="flex justify-center space-x-3 lg:justify-start">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-violet-400"></div>
            <Link to="/" className="self-center text-2xl font-semibold">
              <img
                className="h-10 lg:12 xl:14"
                src={dark ? logoWhite : logo}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold uppercase">Product</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/">Integrations</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide font-bold uppercase ">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase font-bold ">Developers</h3>
            <ul className="space-y-1">
              <li>
                <a href="#">Public API</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3 ">
            <div className="uppercase font-bold">Social media</div>
            <div className="flex justify-start space-x-3">
              <Tooltip content="Facebook">
                <a
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  className="flex items-center p-1"
                  target="_blank"
                >
                  <FaFacebook
                    className={`text-2xl ${
                      dark
                        ? 'text-[#e9ecef] hover:text-[#ced4da]'
                        : 'text-[#868e96] hover:text-[#343a40]'
                    } duration-300 `}
                  ></FaFacebook>
                </a>
              </Tooltip>
              <Tooltip content="Twitter">
                <a
                  href="https://twitter.com/login?lang=en"
                  className="flex items-center p-1"
                  target="_blank"
                >
                  <FaTwitter
                    className={`text-2xl ${
                      dark
                        ? 'text-[#e9ecef] hover:text-[#ced4da]'
                        : 'text-[#868e96] hover:text-[#343a40]'
                    } duration-300 `}
                  ></FaTwitter>
                </a>
              </Tooltip>
              <Tooltip content="Twitter">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center p-1"
                >
                  <FaInstagram
                    className={`text-2xl ${
                      dark
                        ? 'text-[#e9ecef] hover:text-[#ced4da]'
                        : 'text-[#868e96] hover:text-[#343a40]'
                    } duration-300 `}
                  ></FaInstagram>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Next Lesson Online. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
