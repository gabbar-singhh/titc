import React from "react";
import styles from "./HeroSection.module.css";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.hero_main}>
      <Fade direction="up" triggerOnce>
        <h1>Your One-Stop Solution for</h1>
      </Fade>
      <Fade direction="up" triggerOnce>
        <TypeAnimation
          sequence={[
            "sourcing.",
            2000,
            "trading.",
            2000,
            "vendor payments.",
            2000,
            "shipping.",
            2000,
          ]}
          style={{ textAlign: "center" }}
          wrapper="h1"
          speed={50}
          repeat={Infinity}
          className={styles.top_text}
        />
      </Fade>
      <Fade direction="up" triggerOnce>
        <p>
          With 1000+ suppliers in China, we source and trade globally,
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

      {/* bottom wave effect */}
      <div className={styles.bottom_wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
