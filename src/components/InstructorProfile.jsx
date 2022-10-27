import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const InstructorProfile = ({ instructorData }) => {
  const { name, photoUrl, institute } = instructorData;
  const { dark } = useContext(AuthContext);
  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
      className={`flex ${
        dark ? 'bg-[#495057] text-[#e9ecef]' : 'bg-[#f1f3f5]'
      } rounded-md justify-start py-3 px-4 items-center flex-col`}
    >
      <img
        className="w-[40%] rounded-full "
        src={photoUrl ? photoUrl : 'https://imgpile.com/images/TyiNkr.jpg'}
        onError={e =>
          (e.currentTarget.src = 'https://imgpile.com/images/TyiNkr.jpg')
        }
        alt={name}
      />
      <h5 className="text-lg font-bold">{name ? name : 'Name not found'}</h5>
      <p className="text-md font-semibold text-center">
        {institute ? institute : 'Institution not found'}
      </p>
    </div>
  );
};

export default InstructorProfile;
