import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  const [imageSrc, setImageSrc] = useState("/img/hero-home-mobile.webp");

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth;
      if (width <= 1024 && width >= 240) {
        setImageSrc("/img/hero-home-mobile.webp");
      } else {
        setImageSrc("/img/hero-home.webp");
      }
    };

    updateImage(); // Check on mount
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const openWhatsAppHandler = () => {
    const phoneNumber = "8613538501419";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className={styles.hero_main}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Fade direction="up" triggerOnce>
            <h1 className={styles.heroHeading}>Your One-Stop Solution for</h1>
          </Fade>
          <Fade direction="up" triggerOnce>
            <TypeAnimation
              sequence={[
                "Sourcing of Products.",
                1500,
                "Trading of Goods.",
                1500,
                "Shipping of Products.",
                1500,
                "Vendor Payments.",
                1500,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
              style={{ textAlign: "left" }}
              className={styles.heroHeading}
            />
          </Fade>
          <Fade direction="up" triggerOnce>
            <p>
              With 1000+ suppliers in China, we source and trade globally,
              delivering quality products at competitive prices to stay ahead
              and win.
            </p>
          </Fade>
          <Fade direction="up" triggerOnce>
            <div onClick={openWhatsAppHandler} className={styles.cta}>
              Get in Touch on WhatsApp{" "}
              <img
                src="/icons/arrow-up-right-new.svg"
                alt="arrow upright icon"
              />
            </div>
          </Fade>
        </div>

        <div className={styles.right}>
          <img src={imageSrc} alt="shipping container box" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
