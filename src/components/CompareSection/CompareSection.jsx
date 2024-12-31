import React from "react";
import styles from "./CompareSection.module.css";
import { Fade } from "react-awesome-reveal";

const CompareSection = () => {
  const getstartedClickHandler = () => {
    window.open("/contact", "_self");
  };
  return (
    <section className={styles.main}>
      <div className={styles.bottom_wave}></div>
      <Fade direction="up" triggerOnce>
        <h2>
          What Makes Us <span>Your Perfect Patner?</span>
        </h2>
      </Fade>
      <div className={styles.card_container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.card}>
            <span className={styles.content}>
              <h3>Quality You Can Trust</h3>
              <p>
                We deliver high-quality products from China at competitive
                prices, customized to your needs. With double quality control,
                we ensure the best products and reduce the risk of poor-quality
                goods in your market.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
            <img
              src="/img/compareSection/1.png"
              className={styles.img}
              alt="shipment box img"
            />
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={`${styles.card} ${styles.card_02}`}>
            <img
              src="/img/compareSection/2.png"
              className={styles.img}
              alt="china network img"
            />
            <span className={styles.content}>
              <h3>Access to Supplier Network</h3>
              <p>
                We leverage our wide network of trusted suppliers and
                manufacturers in China to deliver high-quality products at
                competitive prices, saving you time and resources while giving
                you a competitive edge in the market.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={styles.card}>
            <span className={styles.content}>
              <h3>Safe Payments. No Frauds. Timely Delivery</h3>
              <p>
                We handle payments securely, eliminating delays and fraud. We
                understand international work can be tricky, but we make sure
                your products arrive on time, keeping your business running
                smoothly.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
            <img
              src="/img/compareSection/3.png"
              className={styles.img}
              alt="credit card img"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CompareSection;
