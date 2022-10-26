import React, { useContext } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import CourseCategory from './CourseCategory';
import CourseView from './CourseView';

const Courses = () => {
  const { open, setOpen } = useContext(AuthContext);
  const allCategoryData = useLoaderData();
  const handleNavigateCategory = () => setOpen(!open);
  return (
    <section className="w-[85%] lg:w-[95%] mt-12 mx-auto flex">
      <div
        className={`w-4/5 lg:w-[25%] z-50 duration-500 fixed lg:static left-2/4 top-2/4 ${
          open ? 'translate-x-[-350%] scale-[10%]' : 'translate-x-[-50%]'
        } translate-y-[-50%] lg:translate-x-0 lg:translate-y-0`}
      >
        <CourseCategory activeBtn={'07'}></CourseCategory>
      </div>
      <div
        className="w-full lg:w-[75%] ml-0 lg:ml-8 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 duration-300 gap-x-6 gap-y-8"
      >
        {allCategoryData.map(course => (
          <CourseView key={course.id} courseData={course}></CourseView>
        ))}
      </div>
      <div className=" left-0 top-0 translate-y-[90%] fixed flex lg:hidden  items-center justify-center  text-gray-400 h-16 w-12 z-50 rounded-lg ">
        <button className="duration-300" onClick={handleNavigateCategory}>
          {open ? (
            <HiChevronDoubleRight className="text-4xl duration-300 leading-2" />
          ) : (
            <HiChevronDoubleLeft className="text-4xl  duration-300 leading-2" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Courses;
