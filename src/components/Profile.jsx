import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/UserContext';
import { FaShieldAlt, FaUserCircle } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-router-dom';
import toast from 'react-hot-toast';
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
const Profile = () => {
  const {
    user,
    updateUserProfile,
    updateUserEmail,
    deleteUserAccount,
    logoutUser,
  } = useContext(AuthContext);
  const [error, setError] = useState('');
  const [date, setDate] = useState(null);
  const handleChangeInfo = event => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.firstName.value + ' ' + form.lastName.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    // const contactNumber = form.contactNumber.value;
    updateUserProfile(fullName, photoUrl)
      .then(() => {
        toast.success('Your information is updated', {
          duration: 4000,
          style: {
            border: '2px solid #51cf66',
            padding: '16px',
            color: '#000',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#f4f7fc',
          },
        });
      })
      .catch(error => setError(error.message));
    updateUserEmail(email)
      .then(() => {})
      .catch(error => setError(error.message));
  };
  const handleDeleteUser = () => {
    deleteUserAccount()
      .then(() => {
        toast.error('Your account is permanently deleted', {
          duration: 4000,
          style: {
            border: '2px solid #e03131',
            padding: '16px',
            color: '#000',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#f4f7fc',
          },
        });
      })
      .catch(error => setError(error.message));
  };
  const handleLogoutUser = () => {
    logoutUser()
      .then(() => {})
      .catch(error => setError(error.message));
  };
  console.log(user);
  return (
    <section className="w-[90%] lg:w-4/5 mx-auto border-2 rounded-xl  my-8">
      <div className="bg-[#f4f7fc] flex flex-col lg:flex-row ">
        <div className="bg-[#ffffff] w-full  lg:w-[30%] flex flex-col ">
          <div className="flex justify-center my-4">
            {user?.photoURL ? (
              <img
                className="rounded-full max-h-[200px] "
                src={user?.photoURL}
                alt=""
                onError={e =>
                  (e.currentTarget.src =
                    'https://cdn-icons-png.flaticon.com/512/219/219983.png')
                }
              />
            ) : (
              <FaUserCircle className="text-[200px]" />
            )}
          </div>
          <h2 className="text-3xl font-semibold text-center">
            {user?.displayName === ' ' ? 'Unknown User' : user?.displayName}
          </h2>
          <div className="flex flex-col items-center px-8">
            <button
              onClick={handleLogoutUser}
              className="bg-[#1b4460] font-semibold text-xl py-4 mt-12 w-[60%]  select-none  rounded-md cursor-pointer text-[#f4f7fc] duration-300 hover:bg-[#0071b3]"
            >
              Logout
            </button>
            <h2 className="text-lg font-semibold text-center leading-5 mt-8">
              Are you sure to delete your account?
            </h2>
            <button
              onClick={handleDeleteUser}
              className="bg-[#e03131] mb-8 lg:mb-0 font-semibold text-lg py-1 mt-4 w-[60%]  select-none  rounded-md cursor-pointer text-[#f4f7fc] duration-300 hover:bg-[#c92a2a]"
            >
              Delete Account
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[70%] px-4 lg:px-8  py-6 lg:py-10">
          <div className="flex flex-col lg:flex-row ">
            <div className="w-full lg:w-[20%] mb-5 lg:mb-0  flex flex-col lg:flex-row items-center justify-center">
              <span className="bg-[#ffffff] p-5 border-2 rounded-full">
                <FaShieldAlt className="h-20 w-20 text-[#a9ddf3] " />
              </span>
            </div>
            <div className="w-full lg:w-[80%] text-[#575c5f]">
              <h2 className="text-2xl lg:text-4xl font-semibold mb-2">
                Personal Information
              </h2>
              <p className="text-sm lg:text-md font-semibold ">
                When you use our services, you&#39;re trusting us with your
                information. We understand this is a big responsibility and work
                hard to protect your information and put you in control.
              </p>
            </div>
          </div>
          <Form
            onSubmit={handleChangeInfo}
            className="mt-8 w-full lg:w-[80%] mx-auto"
          >
            <div className="w-full flex justify-between">
              <div className="space-y-1 w-full">
                <label
                  htmlFor="first-name"
                  className="block ml-5 mb-[-4px] text-lg font-semibold"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  required
                  placeholder={
                    user?.displayName
                      ? user.displayName.split(' ')[0]
                      : 'First Name'
                  }
                  className=" w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                />
              </div>
              <div className="space-y-1 w-full">
                <label
                  htmlFor="last-name"
                  className="block ml-5 mb-[-4px] text-lg font-semibold"
                >
                  Last name
                </label>
                <div className="flex flex-col items-end">
                  {' '}
                  <input
                    type="text"
                    name="lastName"
                    id="last-name"
                    required
                    placeholder={
                      user?.displayName
                        ? user.displayName.split(' ')[1]
                        : 'Last Name'
                    }
                    className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                className="block ml-5 mb-[-4px] text-lg font-semibold"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                placeholder={user?.email ? user.email : 'example@mail.com'}
              />
            </div>
            <div>
              <label
                className="block ml-5 mb-[-4px] text-lg font-semibold"
                htmlFor="photoUrl"
              >
                Your Photo URL
              </label>
              <input
                type="text"
                id="photoUrl"
                name="photoUrl"
                required
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                placeholder={user?.photoURL ? user?.photoURL : 'xyz.com'}
              />
            </div>
            <div>
              <label
                className="block ml-5 mb-[-4px] text-lg font-semibold"
                htmlFor="contact-number"
              >
                Your Contact Number
              </label>
              <input
                type="number"
                id="contact-number"
                name="contactNumber"
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                placeholder="+088000000000"
              />
            </div>
            <div>
              <label
                className="block ml-5 mb-[-4px] text-lg font-semibold"
                htmlFor="contact-number"
              >
                Your Birth Date
              </label>
              <DatePicker
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                selected={date}
                onChange={date => setDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Day/Month/Year"
                maxDate={new Date()}
              />
            </div>
            <p
              className={`${
                error ? 'block' : 'hidden'
              } mb-[-24px] text-center text-md font-semibold text-[#e15a51]`}
            >
              {error}
            </p>
            <input
              type="submit"
              value="Save Change"
              className=" mt-7 px-8 py-1 select-none font-semibold rounded-md cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
            />
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Profile;
