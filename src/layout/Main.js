import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Main = () => {
  return (
    <section>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
