import React from 'react';
import HeroSection from './HeroSection';
import SubHeroSection from './SubHeroSection';
import styles from '../../styles/homepage.module.scss'
import Data from './Data';
import MobileWrapper from './MobileWrapper';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MobileWrapper />
      <section className={styles.wrapper}>
        <SubHeroSection />
      </section>
      <section className={styles.wrapper}>
        <Data />
      </section>
    </>
  )
};

export default HomePage;
