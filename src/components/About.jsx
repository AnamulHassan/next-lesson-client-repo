import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import InstructorProfile from './InstructorProfile';

const About = () => {
  const instructorData = useLoaderData();
  const { dark } = useContext(AuthContext);
  return (
    <section className={`${dark ? 'bg-[#343a40] text-[#e9ecef]' : ''}`}>
      <section
        style={{
          fontFamily: "'Nunito', sans-serif",
        }}
        className="w-[90%] mx-auto py-10 my-[-2px]"
      >
        <div>
          <h2
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className={`text-3xl lg:text-6xl ${
              dark ? 'text-[#e9ecef]' : 'text-[#212529]'
            } tracking-tighter uppercase font-extrabold`}
          >
            About Us
          </h2>
          <h3
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className={`text-xl lg:text-3xl ${
              dark ? 'text-[#e9ecef]' : 'text-[#495057] '
            } font-bold leading-3 mb-4 lg:mb-8`}
          >
            Transformation through education
          </h3>
          <p
            className={`text-md lg:text-lg text-semibold ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            }`}
          >
            Every individual has the potential to create change, whether in
            their life, their community, or the world. The transformative power
            of education is what unlocks that potential. Yet, access to
            high-quality education has been a privilege of the few. Back in
            2012, we realized it was a time for a seismic shift in learning.
            From the tried and true to the leading edge. From “for some” to “for
            all.” By opening the classroom through online learning, Next Lesson
            empowers millions of learners to unlock their potential and become
            changemakers.
          </p>
        </div>
        <div>
          <h2
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className={`text-3xl ${
              dark ? 'text-[#e9ecef]' : 'text-[#495057]'
            } font-bold leading-6 mt-8 mb-2`}
          >
            Our mission
          </h2>
          <p
            className={`text-md lg:text-lg text-semibold ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            }`}
          >
            There are three commitments we've made to the world. We've been
            grounded by these since day one:
          </p>
          <ul
            className={`list-disc ml-8 text-md lg:text-lg font-semibold ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            }`}
          >
            <li>
              Increase access to high-quality education for everyone, everywhere
            </li>
            <li>Enhance teaching and learning on campus and online</li>
            <li>Advance teaching and learning through research</li>
          </ul>
        </div>
        <div>
          <h2
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className={`text-3xl ${
              dark ? 'text-[#e9ecef]' : 'text-[#495057]'
            } font-bold leading-6 mt-8 mb-2`}
          >
            Accelerate our impact
          </h2>
          <p
            className={`text-md lg:text-lg text-semibold ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            }`}
          >
            We at Next Lesson are inherently forward-looking, and together with
            our partners, continually creating the future. In honor of our
            10-year anniversary, we&#39;re taking a moment to acknowledge where
            we&#39;ve been, what we&#39;ve achieved and, in so doing, truly
            celebrate how far we&#39;ve come. &#39;
          </p>
        </div>
        <div>
          <h2
            style={{ fontFamily: "'Roboto', sans-serif" }}
            className="text-3xl font-bold text-center  my-12"
          >
            Our Instructor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructorData.map(data => (
              <InstructorProfile
                key={data.id}
                instructorData={data}
              ></InstructorProfile>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
