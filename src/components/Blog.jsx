import { Tooltip } from '@material-tailwind/react';
import React from 'react';
import { FaPrint } from 'react-icons/fa';
import Pdf from 'react-to-pdf';

const ref = React.createRef();
const options = {
  orientation: 'landscape',
  unit: 'in',
  format: [8.3, 11.7],
};
const Blog = () => {
  return (
    <section
      style={{
        fontFamily: "'Nunito', sans-serif",
      }}
    >
      <Pdf
        targetRef={ref}
        x={0.5}
        y={0.5}
        scale={0.8}
        options={options}
        filename="blog-file.pdf"
      >
        {({ toPdf }) => (
          <Tooltip content="Download the file">
            <button
              className=" h-12 w-12 absolute right-[10%] top-[10%]  bg-[#e9ecef] flex items-center justify-center rounded-full duration-300 hover:bg-[#dee2e6] "
              onClick={toPdf}
            >
              <FaPrint className="text-2xl text-[#495057]" />
            </button>
          </Tooltip>
        )}
      </Pdf>
      <div ref={ref} className="">
        <article className="w-[90%] lg:w-4/5 mx-auto text-md lg:text-xl py-6 md:py-8 leading-7 md:leading-6 lg:leading-8">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
            What is cors?
          </h2>
          <p>
            The word CORS stands for “Cross-Origin Resource Sharing”.
            Cross-Origin Resource Sharing is an HTTP-header-based mechanism
            implemented by the browser which allows a server or an
            API&#40;Application Programming Interface&#41; to indicate any
            origins &#41;different in terms of protocol, hostname, or port&#41;
            other than its origin from which the unknown origin gets permission
            to access and load resources.
          </p>
          <p className="mt-3">
            The cors package in the npm registry is used to tackle CORS errors
            in a Node.js application.
          </p>
        </article>
        <article className="w-[90%] lg:w-4/5 mx-auto text-md lg:text-xl py-6 md:py-8 leading-7 md:leading-6 lg:leading-8">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h2>
          <p>
            Firebase is the default tool for many mobile teams as it assists
            throughout the entire app development lifecycle, including building,
            testing, releasing, monitoring, and engaging. Most of its
            functionality is free, causing many companies to use it without
            considering whether it's ideal for their use case. However, any
            platform as comprehensive as Firebase is bound to lack advanced
            features. This might not be a problem for mobile teams that don't
            have advanced needs. However, for companies that rely on mobile as a
            primary touch-point and revenue source, they will likely find
            themselves frustrated with Firebase limitations that prevent them
            from delivering optimized mobile experiences.
          </p>
          <h3 className="text-2xl mt-3 font-bold ">Top functionalities are:</h3>
          <ul className="list-disc ml-8 lg:ml-12">
            <li>
              Firebase Database: used to store users data like chat messages,
              users details and other metadata
            </li>
            <li>
              Firebase Cloud Storage: used to store user-generated content like
              the profile picture, multimedia messages, etc.
            </li>
            <li>Firebase Cloud Messaging: used to send notification</li>
            <li>
              Firebase Remote Config: used to perform A/B testing on the go
            </li>
          </ul>
          <h3 className="text-2xl mt-3 font-bold ">
            The top Firebase products that I am addicted to are:
          </h3>
          <ul className="list-disc ml-8 lg:ml-12">
            <li>
              Firebase Remote Config: I love this product; it actually saved me
              sometimes from going broke. Here I&#39;ve already written enough
              about it why I love it since it allows you to modify the
              appearance and behavior of your app without letting users download
              your app.
            </li>
            <li>
              Firebase Cloud Storage: used to store user-generated content like
              the profile picture, multimedia messages, etc.
            </li>
            <li>
              Firebase Authentication: it has saved countless hours of my life
              since it allows to authenticates your app with the users.
            </li>
          </ul>
          <p className="mt-3">
            The best part is that it builds trust and increases the users&#39;
            base of your app that makes it more professional, better, and
            faster.
          </p>
          <h3 className="text-2xl mt-3 font-bold ">
            Best alternative of firebase which I want to implement
            authentication:
          </h3>
          <p>
            Firebase is a complete BaaS platform operated by Google, and most of
            its features are free. Its core features are divided into three
            parts: Build, Release & Monitor, and Engage, making it a great
            solution for those that want a single platform for the entire
            development process. However, Firebase has some drawbacks that cause
            companies to look for other BaaS alternatives. Here are a few
            reasons why users might switch:
          </p>
          <ul className="list-disc ml-8 lg:ml-12">
            <li>Auth0 &#45; Excellent for enabling secure, single sign-on.</li>
            <li>MongoDB &#45; Stores data in JSON-like documents.</li>
            <li>
              Passport &#45; Authentication for Node.js. It's best for
              express-based web documents.
            </li>
            <li>
              Okta &#45; Customizable, drop-in authentication service that
              connects all of your apps.
            </li>
            <li>
              JSON Web Token &#45; Represents claims securely between two
              parties.
            </li>
          </ul>
        </article>
        <article className="w-[90%] lg:w-4/5 mx-auto text-md lg:text-xl py-6 md:py-8 leading-7 md:leading-6 lg:leading-8">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
            How does the private route work?
          </h2>
          <p>
            The react private route component renders child components
            <code>&#40;children&#41;</code> if the user is logged in. If not
            logged in the user is redirected to the /login page with the return
            url passed in the location state property. The current logged in
            user <code>&#40;authUser&#41;</code> is retrieved from Redux state
            with a call to the useSelector&#40;&#41; hook. Redux is used in this
            example however it is not required to implement a Private Route
            component in React Router 6. You could use a different state
            management library or any approach you prefer to get the logged in
            status of the user.
          </p>
          <p className="mt-3">
            The <code> App</code> component is the root component of the example
            app, it contains the outer html, main nav and routes for the
            application. The <code>/login</code> route is public, and the home
            route &#40;/&#41; is protected by the private route component that
            uses Redux to check if the user is logged in. The last route is a
            catch-all redirect route that redirects any unmatched paths to the
            home page.
          </p>
        </article>
        <article className="w-[90%] lg:w-4/5 mx-auto text-md lg:text-xl py-6 md:py-8 leading-7 md:leading-6 lg:leading-8">
          <h2 className="text-2xl md:text-3xl mb-2 font-bold text-[#1a1a1a]">
            What is Node.js? How does Node work?
          </h2>
          <p>
            Node.js is a single-threaded, open-source, cross-platform runtime
            environment for building fast and scalable server-side and
            networking applications. It runs on the V8 JavaScript runtime
            engine, and it uses event-driven, non-blocking I/O architecture,
            which makes it efficient and suitable for real-time applications.
          </p>
          <p className="mt-3">
            Node.js uses the “Single Threaded Event Loop” architecture to handle
            multiple clients at the same time. To understand how this is
            different from other runtimes, we need to understand how
            multi-threaded concurrent clients are handled in languages like
            Java. In a multi-threaded request-response model, multiple clients
            send a request, and the server processes each one before sending the
            response back. However, multiple threads are used to process
            concurrent calls. These threads are defined in a thread pool, and
            each time a request comes in, an individual thread is assigned to
            handle it.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Blog;
