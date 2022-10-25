import { createBrowserRouter } from 'react-router-dom';
import About from '../components/About';
import Blog from '../components/Blog';
import Courses from '../components/Courses';
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
      { path: '/courses', element: <Courses></Courses> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/about', element: <About></About> },
      { path: '/premium', element: <Premium></Premium> },
      { path: '/reset_password', element: <ResetPassword></ResetPassword> },
    ],
  },
]);

export default router;
