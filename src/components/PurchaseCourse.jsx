import React from 'react';
import { FaRegHeart, FaTrashAlt } from 'react-icons/fa';

const PurchaseCourse = ({ courseData }) => {
  console.log(courseData);
  const { courseTitle, atAGlance, thumbnailUrl } = courseData;

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
      className="flex flex-col py-6 sm:flex-row sm:justify-between"
    >
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          onError={e =>
            (e.currentTarget.src = 'https://imgpile.com/images/TyiwnR.jpg')
          }
          src={
            thumbnailUrl
              ? thumbnailUrl
              : 'https://imgpile.com/images/TyiwnR.jpg'
          }
          alt={courseTitle ? courseTitle : 'Title not found'}
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {courseTitle ? courseTitle : 'Title not found'}
              </h3>
              <p className="text-sm dark:text-gray-400">
                {atAGlance?.Institution
                  ? atAGlance.Institution
                  : 'Institution not found'}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold">59.99€</p>
              <p className="text-sm line-through dark:text-gray-600">75.50€</p>
            </div>
          </div>
          <div className="flex text-sm divide-x">
            <button
              type="button"
              className="flex items-center px-2 py-1 pl-0 space-x-1"
            >
              <FaTrashAlt />
              <span>Remove</span>
            </button>
            <button
              type="button"
              className="flex items-center px-2 py-1 space-x-1"
            >
              <FaRegHeart />
              <span>Add to favorites</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCourse;
