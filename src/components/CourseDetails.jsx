import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
  const courseInfo = useLoaderData();
  const {
    atAGlance,
    courseDetails,
    courseStatus,
    courseTitle,
    enrolled,
    id,
    instructor,
    rating,
    thumbnailUrl,
    timeRequire,
  } = courseInfo;
  // console.log(courseDetails);
  return (
    <section className="w-[90%] mx-auto border-3 border-red-500">
      <div>
        <img src={thumbnailUrl} alt="" />
      </div>
      <div>
        <h2>{courseTitle}</h2>
        <p>{courseDetails}</p>
      </div>
    </section>
  );
};

export default CourseDetails;
