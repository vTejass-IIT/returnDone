import './App.scss';
import { Routes, Route } from 'react-router-dom';

//components
import Header from "./components/reHeader/header";
import Banner from "./components/reBanner/banner";
import Benefits from './components/reBenfits/benefits';
// import ReturnForm from './components/returnForm/returnForm';
import FormPage from './components/formPage/formPage';
import Footer from './components/reFooter/reFooter';
import Faq from './components/faq/faq';
import SwiperCarousel from './components/swiperComponent/swiper';
import ReSteps from './components/reSteps/reSteps';

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
          <ReSteps></ReSteps>
          <Benefits></Benefits>
          <SwiperCarousel></SwiperCarousel>
          <Faq></Faq>
          <Footer></Footer>
        </>
        } />
        <Route path="/submitReturn" element={<>
          <FormPage></FormPage>
        </>
      } />
      </Routes>
    </div>
    </>
  );
}

export default App;
