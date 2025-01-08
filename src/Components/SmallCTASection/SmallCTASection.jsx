import React from "react";
import styles from "./SmallCTASection.module.css";
import { Fade } from "react-awesome-reveal";

const SmallCTASection = (props) => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent("Hello Kayyush, I visited your website and I'd be interested to know more");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <section className={styles.main}>
      <Fade direction="up" triggerOnce>
        <h3 className={styles.heading}>{props.head}</h3>
      </Fade>

      <Fade direction="up" triggerOnce>
        <p className={styles.desc}>{props.content}</p>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div onClick={openWhatsAppHandler} className={styles.cta}>
          Get in Touch on WhatsApp
          <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
        </div>
      </Fade>
    </section>
  );
};

export default SmallCTASection;
