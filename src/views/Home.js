import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import FeaturesSplit from '../components/sections/FeaturesSplit';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesTiles />
      <FeaturesSplit />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;