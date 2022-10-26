import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import CourseDetails from '../components/CourseDetails';
import Courses from '../components/Courses';
import CoursesWithCategory from '../components/CoursesWithCategory';
import CourseView from '../components/CourseView';
import Home from '../components/Home';
import Login from '../components/Login';
import Premium from '../components/Premium';
import Profile from '../components/Profile';
import Register from '../components/Register';
import ResetPassword from '../components/ResetPassword';
import Main from '../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/home', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '/profile', element: <Profile></Profile> },
      {
        path: '/courses',
        loader: () => fetch('http://localhost:5000/courses'),
        element: <Courses></Courses>,
      },
      {
        path: '/category/:categoryId',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.categoryId}`),
        element: <CoursesWithCategory></CoursesWithCategory>,
      },
      {
        path: '/courses/:courseId',
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.courseId}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: '/',
        element: <CourseView></CourseView>,
      },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/about', element: <About></About> },
      { path: '/premium', element: <Premium></Premium> },
      { path: '/reset_password', element: <ResetPassword></ResetPassword> },
    ],
  },
]);

export default router;
