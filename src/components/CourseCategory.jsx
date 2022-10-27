import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
const CourseCategory = ({ activeBtn }) => {
  const { courseCategory, dark } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCourseCategory = id => {
    navigate(`../../category/${id}`);
  };
  return (
    <section className={`${dark ? 'bg-[#343a40] text-[#e9ecef]' : ''}`}>
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
        }}
        className={`border-2 border-[#ced4da] ${
          dark ? 'bg-[#343a40]' : ' bg-white'
        } rounded-lg p-4 space-y-3`}
      >
        {courseCategory.map(categoryData => (
          <button
            key={categoryData.id}
            onClick={() => handleCourseCategory(categoryData.id)}
            className={`w-full font-bold text-[#868e96] duration-200
          hover:text-[#1b4460]  rounded-lg text-xl py-4 ${
            activeBtn === categoryData.id
              ? 'bg-[#27aae2] text-[#fff]'
              : 'bg-[#f1f3f5]'
          } `}
          >
            {categoryData.name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default CourseCategory;
