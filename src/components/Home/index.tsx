import React from 'react';
import { useCustomSelector } from '../../hooks/redux';
import AboutUs from './AboutUs';
import Articles from './Articles';
import ContactUs from './ContactUs';
import Details from './Details';
import FeatureProducts from './FeatureProducts';
import Lookbook from './Lookbook';
import PrincipalScreen from './PrincipalScreen';

function Home(): React.ReactElement {
  const { home } = useCustomSelector((state) => state);

  const { articles, featureProducts, lookBook } = home;
  return (
    <>
      <PrincipalScreen />
      <AboutUs />
      <FeatureProducts products={featureProducts} />
      <Lookbook {...lookBook} />
      <Details />
      <Articles articles={articles} />
      <ContactUs />
    </>
  );
}

export default Home;
