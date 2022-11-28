import React, { Fragment } from 'react';
import RevolutionSlider from '../layout/RevolutionSlider/RevolutionSlider';
import AboutUs from './AboutUs/AboutUs';
import Team from './Team/Team';
import Facts from './FunFacts/Facts';
import Services from './Services/Services';
import Skills from './Skills/Skills';
import Testimonials from './Testimonials/Testimonials';
import Contact from './ContactForm/Contact';
import Footer from '../layout/Footer/Footer';
import RApp from './Works/Works';

const Home = () => {
  return (
    <Fragment>
        <RevolutionSlider />
        <br/><br/><br/><br/>
        <AboutUs />
        <br/><br/><br/><br/>
        <Team />
        <Facts />
        <Services/>
        <br/><br/><br/><br/>
        <Skills/>
        <br/><br/>
        <RApp/>
        <Testimonials/>
        <Contact/>
        <Footer/>
    </Fragment>
  )
}

export default Home;