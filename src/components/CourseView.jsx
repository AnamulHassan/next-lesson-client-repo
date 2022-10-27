import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Courses from './Courses';

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

border: #ced4da
*/
const CourseView = ({ courseData }) => {
  // console.log(courseData);
  const { courseTitle, thumbnailUrl, id, courseStatus, atAGlance } = courseData;
  return (
    <div className="border-2 border-[#ced4da] rounded-lg">
      <div className="relative mb-6">
        <img
          className="w-full rounded-t-md bg-[#ced4da]"
          src={thumbnailUrl}
          alt=""
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
          {courseStatus}
        </div>
      </div>
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
        }}
        className="flex justify-between flex-col min-h-[200px]"
      >
        <div className="px-3">
          <h2 className="text-xl text-[#212529] font-bold">{courseTitle}</h2>
          <p className="text-md font-semibold text-[#868e96]">
            {atAGlance?.Institution}
          </p>
        </div>
        <Link
          to={`../../courses/${id}`}
          className="border-t-2 h-[50px] rounded-b-lg bg-[#f1f3f5] flex items-center text-[#868e96] justify-between px-8 duration-200 hover:text-[#1b4460]"
        >
          <p className="text-xl font-bold ">See more</p>{' '}
          <FaExternalLinkAlt className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default CourseView;
