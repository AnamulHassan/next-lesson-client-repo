import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const CourseCategory = ({ activeBtn }) => {
  const { courseCategory, categoryId, setCategoryId } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCourseCategory = id => {
    // console.log(id);
    // setCategoryId(id);
    navigate(`../../category/${id}`);
  };
  return (
    <div>
      {courseCategory.map(categoryData => (
        <button
          key={categoryData.id}
          onClick={() => handleCourseCategory(categoryData.id)}
          className={`my-5 w-full text-3xl py-8 ${
            activeBtn === categoryData.id ? 'bg-red-200' : 'bg-blue-200'
          } `}
        >
          {categoryData.name} {categoryData.id}
        </button>
      ))}
    </div>
  );
};

export default CourseCategory;
