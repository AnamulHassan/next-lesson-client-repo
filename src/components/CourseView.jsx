import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from './Courses';

const CourseView = ({ courseData }) => {
  console.log(courseData);
  const { courseTitle, thumbnailUrl, id, courseStatus, atAGlance } = courseData;
  return (
    <div className="border-2 border-black">
      <div>
        <img className="w-full" src={thumbnailUrl} alt="" />
      </div>
      <div>{courseTitle}</div>
    </div>
  );
};

export default CourseView;
