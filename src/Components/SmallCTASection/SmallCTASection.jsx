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
          Get in Touch on WhatsApp
          <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
        </div>
      </Fade>
    </section>
  );
};

export default SmallCTASection;
