import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/UserContext';
import { FaShieldAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Form } from 'react-router-dom';
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
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(null);
  const handleChangeInfo = event => {
    event.preventDefault();
    const form = event.value;
    // const fullName = form.firstName.value + form.lastName.value;
    const photoUrl = form?.photo.value;
    const contactNumber = form?.contact.value;

    // console.log(fullName);
    console.log(photoUrl);
    console.log(contactNumber);
  };
  return (
    <section className="w-4/5 mx-auto border-2 rounded-xl  mt-10">
      <Form onSubmit={handleChangeInfo} className="bg-[#f4f7fc] flex">
        <div className="bg-[#ffffff] w-[30%]">
          <div className="flex justify-center my-4">
            <img
              className="rounded-full max-h-[200px] "
              src={user?.photoURL}
              alt=""
            />
          </div>
          <h2 className="text-3xl font-semibold text-center">
            {user?.displayName}
          </h2>
        </div>
        <div className="w-[70%] px-8 py-10">
          <div className="flex">
            <div className="w-[20%]  flex items-center justify-center">
              <span className="bg-[#ffffff] p-5 border-2 rounded-full">
                <FaShieldAlt className="h-20 w-20 text-[#27aae2] " />
              </span>
            </div>
            <div className="w-[80%] text-[#575c5f]">
              <h2 className="text-4xl font-semibold mb-2">
                Personal Information
              </h2>
              <p className="text-md font-semibold ">
                When you use our services, you&#39;re trusting us with your
                information. We understand this is a big responsibility and work
                hard to protect your information and put you in control.
              </p>
            </div>
          </div>
          <div className="mt-8 w-[80%] mx-auto">
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
                  placeholder="First name"
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
                    placeholder="Last name"
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
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                defaultValue={user?.email ? user.email : 'example@mail.com'}
                readOnly
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
                name="photo"
                className="w-full px-3 py-1 border-8 rounded-md text-md font-semibold  border-[#f4f7fc]  bg-[#ffffff]  outline-none"
                placeholder={user?.photoURL}
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
                name="contact"
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
            <input
              type="submit"
              value="Save Change"
              className=" mt-7 px-8 py-1 select-none font-semibold rounded-md cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
            />
          </div>
        </div>
      </Form>
    </section>
  );
};

export default Profile;
