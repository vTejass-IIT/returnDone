import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';

//components
import Header from "./components/reHeader/header";
import Banner from "./components/reBanner/banner";
import Benefits from './components/reBenfits/benefits';
import ReturnForm from './components/returnForm/returnForm';
import FormPage from './components/formPage/formPage';

import variables from './utils/variables.module.scss';
import Faq from './components/faq/faq';
import SwiperCarousel from './components/swiperComponent/swiper';

function App() {
  return (
    <>
    <div className="returnDone">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}
      <Routes>
        <Route path="/" element={
        <>
          <Header></Header>
          <Banner></Banner>
          <Benefits></Benefits>
          {/* <div>
            <Cards></Cards>
          </div> */}
          <SwiperCarousel></SwiperCarousel>
          <Faq></Faq>
        </>
        } />
        <Route path="/submitReturn" element={<>
          <FormPage></FormPage>
        </>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
