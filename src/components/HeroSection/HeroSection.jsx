import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero_main}>
      <h1>
        Your <span> One-Stop Solution</span> for
        <br /> All Import Needs
      </h1>
      <p>
        With 1,000+ suppliers in China, we source and trade globally, delivering
        quality products at competitive prices to stay ahead and win.
      </p>
      <div>
        Get in Touch on WhatsApp{" "}
        <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
      </div>
    </section>
  );
};

export default HeroSection;