import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import CourseCategory from './CourseCategory';
import CourseView from './CourseView';

const Courses = () => {
  const {} = useContext(AuthContext);
  const allCategoryData = useLoaderData();
  // console.log(allCategoryData);
  return (
    <section className="w-[95%] mx-auto flex">
      <div className="w-[25%] top-0">
        <CourseCategory activeBtn={'07'}></CourseCategory>
      </div>
      <div className="w-[75%] mt-12 mx-8 grid grid-cols-3 gap-6">
        {allCategoryData.map(course => (
          <CourseView key={course.id} courseData={course}></CourseView>
        ))}
      </div>
    </section>
  );
};

export default Courses;
