import React from "react";
import styles from "./CompareSection.module.css";

const CompareSection = () => {
  return (
    <section className={styles.main}>
      <h2>Why Choose Us Over Others?</h2>

      <div className={styles.card_container}>
        <div className={styles.card}>
          <span className={styles.content}>
            <h3>Quality You Can Trust</h3>
            <p>
              We deliver high-quality products from China at competitive prices,
              customized to your needs. With double quality control, we ensure
              the best products and reduce the risk of poor-quality goods in
              your market.
            </p>
            <div>
              get started{" "}
              <img src="/icons/arrow_next.svg" height={20} alt="arrow icon" />
            </div>
          </span>
          <img
            src="/img/li1.png"
            className={styles.img}
            alt="shipment box img"
          />
        </div>

        <div className={`${styles.card} ${styles.card_02}`}>
          <img
            src="/img/li2.png"
            className={styles.img}
            alt="china network img"
          />
          <span className={styles.content}>
            <h3>Access to Supplier Network</h3>
            <p>
              We leverage our wide network of trusted suppliers and
              manufacturers in China to deliver high-quality products at
              competitive prices, saving you time and resources while giving you
              a competitive edge in the market.
            </p>
            <div>
              get started{" "}
              <img src="/icons/arrow_next.svg" height={20} alt="arrow icon" />
            </div>
          </span>
        </div>

        <div className={styles.card}>
          <span className={styles.content}>
            <h3>Safe Payments. No Frauds. Timely Delivery</h3>
            <p>
              We handle payments securely, eliminating delays and fraud. We
              understand international work can be tricky, but we make sure your
              products arrive on time, keeping your business running smoothly.
            </p>
            <div>
              get started{" "}
              <img src="/icons/arrow_next.svg" height={20} alt="arrow icon" />
            </div>
          </span>
          <img
            src="/img/li3.png"
            className={styles.img}
            alt="credit card img"
          />
        </div>
      </div>
    </section>
  );
};

export default CompareSection;
