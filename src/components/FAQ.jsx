import React, { useContext } from 'react';
import { Fragment, useState } from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import { AuthContext } from '../context/UserContext';

const FAQ = () => {
  const { dark } = useContext(AuthContext);
  const [open, setOpen] = useState(1);
  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <section
      className={`${dark ? 'bg-[#343a40] text-#e9ecef]' : ''} py-12 my-[-2px]`}
    >
      <section className="w-4/5 mx-auto">
        <div className="text-center py-10 mt-[-2px]">
          <h2
            className={`text-4xl font-bold ${
              dark ? ' text-[#e9ecef]' : 'text-[#495057]'
            }`}
          >
            Search for your answer below
          </h2>
          <p className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}>
            If you need further assistance you may submit a request to our
            support team on the article or search pages.{' '}
          </p>
        </div>
        <Fragment>
          <Accordion open={open === 1}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(1)}
            >
              Are courses accessible to learners with disabilities?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              Next Lesson strives to create an innovative online-learning
              platform that promotes accessibility for all learners, regardless
              of any physical limitation that they might have. Next Lesson is
              dedicated to creating a platform that is not only itself
              accessible, but also enables course content creators to create
              accessible content. You may read our accessibility policy here.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(2)}
            >
              How do I redeem an enrollment code?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              <ul className="">
                <li> 01. Browse or search for the course you want to take. </li>
                <li>
                  02. Select Enroll Now on the course enrollment page. A message
                  displays confirming your enrollment.{' '}
                </li>
                <li>
                  03. Select Pursue a Verified Certificate. A payment page
                  appears.
                </li>
                <li>
                  04. In the coupon box, enter the enrollment code and select
                  Apply.
                </li>
                <li>
                  05. Your cart will show $0 and you can now proceed to the
                  course.
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(3)}
            >
              Can I transfer to another session?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              If you are not able to finish the course before the end date you
              can certainly enroll in the same course again in a future session,
              but you will need to pay again for the next session. Most Next
              Lesson courses do repeat. If you had paid for the verified
              certificate track you would need to pay again to be eligible for a
              certificate in the new session. The upgrade fee helps support our
              mission, and does not transfer to future sessions. Work completed
              in the previous session also will not carry over.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(4)}
            >
              Can I start for free and pay later?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              Yes, you absolutely can start your course in the audit track and
              then upgrade to the verified track later, so long as the upgrade
              deadline has not passed. How do I know the upgrade deadline?
              Please note that upgrading grants you access to graded assignments
              required for the certificate. The sooner you upgrade, the more
              time you will have to work towards earning the certificate. In
              self-paced courses, the upgrade deadline is usually a short time
              before the course's final end date. In instructor-paced courses,
              the upgrade deadline may be much sooner.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(5)}
            >
              I am worried about the safety of a learner or instructor and
              threats of suicide or self harm - what can I do?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              You may encourage the learner or instructor to seek free,
              confidential 24/7 support in the US by calling the National
              Suicide Prevention Lifeline.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6}>
            <AccordionHeader
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '700',
                textAlign: 'start',
              }}
              onClick={() => handleOpen(6)}
            >
              A learner or instructor is harassing me - what can I do?
            </AccordionHeader>
            <AccordionBody
              className={`${dark ? 'text-[#e9ecef]' : 'text-[#343a40]'}`}
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: '500',
              }}
            >
              Please report your concern directly to the course team or contact
              us to report your concern, and we will notify the appropriate
              course team &#40;or the course provider&#39;s leadership, as
              appropriate&#41;. The course providers &#40;and their respective
              course teams&#41; are on the front lines of managing all
              instructor and learner course conduct in accordance with the Next
              Lesson Rules for Online Conduct and Strictly Prohibited Items. In
              addition, some course providers have participation policies,
              escalation protocols, and other institution resources for managing
              course behavior. All individuals are expected to abide by these
              terms and can be removed from a course or have their Next Lesson
              account terminated if they violate these terms.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </section>
    </section>
  );
};

export default FAQ;
