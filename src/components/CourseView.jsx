import React, { useContext } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
const CourseView = ({ courseData }) => {
  const { dark } = useContext(AuthContext);
  const { courseTitle, thumbnailUrl, id, courseStatus, atAGlance } = courseData;
  return (
    <div
      className={`border-2  rounded-lg ${
        dark ? 'bg-[#343a40] border-[#868e96]' : 'bg-white border-[#f1f3f5]'
      }`}
    >
      <div className="relative mb-6">
        <img
          className={`w-full rounded-t-md ${
            dark ? 'bg-[#343a40]' : 'bg-[#ced4da]'
          }`}
          src={
            thumbnailUrl
              ? thumbnailUrl
              : 'https://imgpile.com/images/TyiwnR.jpg'
          }
          alt={courseTitle}
          onError={e =>
            (e.currentTarget.src = 'https://imgpile.com/images/TyiwnR.jpg')
          }
        />
        <div
          style={{
            fontFamily: "'Nunito', sans-serif",
            clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
          }}
          className={`absolute top-full left-0 translate-x-[20%] translate-y-[-50%] ${
            courseStatus === 'Free' ? 'bg-[#1b4460]' : 'bg-[#27aae2]'
          } text-white text-xl font-bold px-4 tracking-tight py-1 rounded-lg`}
        >
          {courseStatus ? courseStatus : 'None'}
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
        }}
        className="flex justify-between flex-col min-h-[200px]"
      >
        <div className="px-3">
          <h2
            className={`text-xl ${
              dark ? 'text-[#e9ecef]' : 'text-[#212529]'
            } font-bold`}
          >
            {courseTitle}
          </h2>
          <p className="text-md font-semibold text-[#868e96]">
            {atAGlance?.Institution
              ? atAGlance.Institution
              : 'Institution not found'}
          </p>
        </div>
        <Link
          to={`../../courses/${id}`}
          className={`border-t-2 h-[50px] rounded-b-lg ${
            dark
              ? 'bg-[#495057] text-[#dee2e6] hover:text-[#fff]'
              : 'bg-[#f1f3f5] text-[#868e96] hover:text-[#1b4460]'
          }  flex items-center justify-between px-8 duration-200 `}
        >
          <p className="text-xl font-bold ">See more</p>{' '}
          <FaExternalLinkAlt className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default CourseView;
