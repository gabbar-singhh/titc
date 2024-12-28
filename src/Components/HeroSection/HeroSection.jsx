import React from "react";
import styles from "./HeroSection.module.css";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent("hello, I need your help.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.hero_main}>
      <Fade direction="up" triggerOnce>
        <h1>Your One-Stop Solution for</h1>
        <h1>All Import Needs</h1>
      </Fade>
      <Fade direction="up" triggerOnce>
        <p>
          With 1,000+ suppliers in China, we source and trade globally,
          delivering quality products at competitive prices to stay ahead and
          win.
        </p>
      </Fade>
      <Fade direction="up" triggerOnce>
        <div onClick={openWhatsAppHandler} className={styles.cta}>
          Get in Touch on WhatsApp{" "}
          <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
        </div>
      </Fade>
    </section>
  );
};

export default HeroSection;
