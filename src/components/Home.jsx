import React, { useContext } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import headerImg from '../asset/header-img-1.png';
import { AuthContext } from '../context/UserContext';

const Home = () => {
  const { dark } = useContext(AuthContext);
  return (
    <section className={`${dark ? 'bg-[#343a40]' : 'bg-[#fff]'} w-full`}>
      <section className="w-[90%] mx-auto">
        <div>
          <h2
            className={`text-4xl lg:text-6xl font-bold ${
              dark ? 'text-[#e9ecef]' : 'text-[#343a40]'
            } xl:pt-12 mt-[-2px] tracking-tighter`}
          >
            Start learning <br /> from the world&#44;s best institutions
          </h2>
          <p
            className={`text-xl lg:text-2xl font-semibold leading-6 ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            } mt-2 mb-12`}
          >
            As a mission-driven organization, we're relentlessly pursuing our
            vision of a world where every <br /> learner can access education to
            unlock their potential, without the barriers of cost or location.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row mt-0  lg:mt-8">
          <div
            className={`w-[90%] lg:w-2/4 px-4 lg:px-12 py-10 flex flex-col item-center lg:items-start justify-center ${
              dark ? 'bg-[#343a40] lg:bg-[#2f343a]' : 'bg-white lg:bg-[#f1f3f5]'
            } `}
          >
            <div>
              <h2
                className={`${
                  dark ? 'text-[#e9ecef]  ' : 'text-[#343a40] '
                } text-4xl font-bold`}
              >
                {' '}
                For Learners
              </h2>
              <h3
                className={`text-2xl ${
                  dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
                } font-semibold`}
              >
                Propel your career, get a degree, or expand your knowledge at
                any level.
              </h3>
            </div>
            <div>
              <h2
                className={`${
                  dark ? 'text-[#e9ecef] ' : 'text-[#343a40] '
                } text-4xl font-bold mt-5`}
              >
                For Businesses
              </h2>
              <h3
                className={`text-2xl ${
                  dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
                } font-semibold`}
              >
                Upskill employees and build a culture of learning.
              </h3>
            </div>
            <div>
              <h2
                className={`text-4xl ${
                  dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
                } font-bold mt-5`}
              >
                For Educators
              </h2>
              <h3
                className={`text-2xl ${
                  dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
                } font-semibold`}
              >
                Expand your curriculum through blended learning.
              </h3>
            </div>
          </div>
          <div className="w-[95%] lg:w-2/4">
            <img className="w-full" src={headerImg} alt="online course" />
          </div>
        </div>
        <div>
          <h2
            className={`text-5xl xl:text-8xl font-bold ${
              dark ? 'text-[#e9ecef]' : 'text-[#343a40]'
            } xl:mt-12  tracking-tighter `}
          >
            Enabling transformation
          </h2>
          <p
            className={`text-lg xl:text-4xl font-semibold leading-6 ${
              dark ? 'text-[#e9ecef]' : 'text-[#868e96]'
            } mt-2 mb-12`}
          >
            Your Next Lesson learning experience is grounded in cutting edge
            cognitive science. With more than two dozen distinct learning
            features to help you achieve your goals, our approach follows three
            key principles:
          </p>
          <div className="w-[90%] lg:w-3/4 mx-auto">
            <h2
              className={` ${
                dark ? 'text-[#e9ecef] ' : 'text-[#343a40] '
              } text-4xl font-bold mt-5`}
            >
              Experience
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-[#868e96] mt-2 mb-4">
              Learn new knowledge and skills in a variety of ways, from engaging
              video lectures and dynamic graphics to data visualizations and
              interactive elements. Practice
            </h3>
          </div>
          <div className="w-[90%] lg:w-3/4 mx-auto">
            <h2
              className={`${
                dark ? 'text-[#e9ecef]' : 'text-[#343a40] '
              } text-4xl font-bold mt-2`}
            >
              Practice
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-[#868e96] mt-2 mb-4">
              Demonstrating your knowledge is a critical part of learning. Next
              Lesson courses and programs provide a space to practice with
              quizzes, open response assessments, virtual environments, and
              more.
            </h3>
          </div>
          <div className="w-[90%] lg:w-3/4 mx-auto">
            <h2
              className={`${
                dark ? 'text-[#e9ecef]' : 'text-[#343a40]'
              }  text-4xl font-bold mt-2`}
            >
              Apply
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold leading-6 text-[#868e96] mt-2 mb-4">
              Learning on Next Lesson transforms how you think and what you can
              do, and translates directly into the real world—immediately apply
              your new capabilities in the context of your job.
            </h3>
          </div>
        </div>
        <div className="flex justify-center py-12 mb-[-2px]">
          <Link
            style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            to="/courses"
            className=" mt-7 px-10 py-1 select-none rounded-3xl inline-flex items-center justify-center font-semibold cursor-pointer bg-[#27aae2] text-xl  text-[#f4f7fc]  duration-300 hover:bg-[#0071b3]"
          >
            Explore Our Courses <FaAngleDoubleRight className="text-2xl ml-3" />
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Home;
