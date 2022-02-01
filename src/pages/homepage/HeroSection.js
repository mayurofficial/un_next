import React from "react";
import Image from "next/image";
import heroSectionImage from "../../../public/assets/images/hero-section-bg.webp";
import styles from "../../styles/homepage.module.scss";
import Button from "@components/button";

const HeroSection = () => {
  return (
    <div className={styles.hero_section}>
      <div className={styles.left_container}>
        <h1>ADVANCED REACTOR <br /> INFORMATION SYSTEM</h1>
        <p>
          The Advanced Information System (ARIS) database is designed and
          maintained by the IAEA and contains design descriptions of
          evolutionary and innovative advanced nuclear reactors
        </p>
        <Button name="Explore" type="primary"/>
      </div>
      <div className={styles.right_container}>
        <Image
          className={styles.hero_bg}
          src={heroSectionImage}
          alt="hero-back-img"
          height="1100px"
        />
      </div>
    </div>
  );
};

export default HeroSection;

