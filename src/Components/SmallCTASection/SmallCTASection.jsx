import React from "react";
import styles from "./SmallCTASection.module.css";
import { Fade } from "react-awesome-reveal";

const SmallCTASection = (props) => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "8613538501419";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className={styles.main}>
      <Fade triggerOnce damping={0.2}>
        <h3 className={styles.heading}>{props.head}</h3>
        <p className={styles.desc}>{props.content}</p>

        <div onClick={openWhatsAppHandler} className={styles.cta}>
          Get in Touch on WhatsApp{" "}
          <img src="/icons/arrow-up-right-new.svg" alt="arrow upright icon" />
        </div>
      </Fade>

      <div className={styles.wavyBottom}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default SmallCTASection;
