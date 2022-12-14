import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import CourseDetails from '../components/CourseDetails';
import Courses from '../components/Courses';
import CoursesWithCategory from '../components/CoursesWithCategory';
import FAQ from '../components/FAQ';
import Home from '../components/Home';
import Login from '../components/Login';
import CheckOut from '../components/CheckOut';
import Profile from '../components/Profile';
import Register from '../components/Register';
import ResetPassword from '../components/ResetPassword';
import Main from '../layout/Main';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: '/courses',
        loader: () => fetch('https://next-lesson-server.vercel.app/courses'),
        element: <Courses></Courses>,
      },
      {
        path: '/category/:categoryId',
        loader: ({ params }) =>
          fetch(
            `https://next-lesson-server.vercel.app/category/${params.categoryId}`
          ),
        element: <CoursesWithCategory></CoursesWithCategory>,
      },
      {
        path: '/courses/:courseId',
        loader: ({ params }) =>
          fetch(
            `https://next-lesson-server.vercel.app/courses/${params.courseId}`
          ),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/faq',
        element: <FAQ></FAQ>,
      },
      {
        path: '/premium',
        loader: () =>
          fetch('https://next-lesson-server.vercel.app/category/04'),
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      { path: '/blog', element: <Blog></Blog> },
      {
        path: '/about',
        loader: () => fetch('https://next-lesson-server.vercel.app/about'),
        element: <About></About>,
      },
      { path: '/reset_password', element: <ResetPassword></ResetPassword> },
    ],
  },
]);

export default router;
