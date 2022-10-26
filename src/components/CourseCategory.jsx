import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
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
const CourseCategory = ({ activeBtn }) => {
  const { courseCategory } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleCourseCategory = id => {
    navigate(`../../category/${id}`);
  };
  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
      className="border-2 border-[#ced4da] bg-white rounded-lg p-4 space-y-3"
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
  );
};

export default CourseCategory;
