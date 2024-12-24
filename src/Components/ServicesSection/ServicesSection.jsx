import React from "react";
import styles from "./ServicesSection.module.css";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <section className={styles.main}>
      <h2>Our Expert Services</h2>

      <div className={styles.container}>
        <span>
          <Link href={"/services"} className={styles.card}>
            <img className={styles.card_icon} src="/icons/sourcing.svg" alt="sourcing icon" />
            <h3>sourcing</h3>
            <p>
              We connect you with top manufacturers in China, ensuring
              high-quality products at competitive prices tailored to your
              needs.
            </p>
            <div className={styles.learn_more}>
              Learn More
            </div>
          </Link>
          <Link href={"/services"} className={styles.card}>
            <img src="/icons/trading.svg" className={styles.card_icon} alt="sourcing icon" />
            <h3>Trading</h3>
            <p>
              We handle all aspects of trading, from negotiating deals to
              ensuring timely delivery, making global sourcing hassle-free.
            </p>
            <div className={styles.learn_more}>
              Learn More
            </div>
          </Link>
        </span>

        <span>
          <Link href={"/services"} className={styles.card}>
            <img src="/icons/vendor_pay.svg" className={styles.card_icon} alt="sourcing icon" />
            <h3>Vendor Payments</h3>
            <p>
              We streamline vendor payments, managing secure transactions to
              ensure smooth business operations and on-time deliveries.
            </p>
            <div className={styles.learn_more}>
              Learn More
            </div>
          </Link>
          <Link href={"/services"} className={styles.card}>
            <img src="/icons/shipping.svg" className={styles.card_icon} alt="sourcing icon" />
            <h3>Shipping</h3>
            <p>
              We offer both air and sea freight services, ensuring your goods
              are delivered quickly and safely, anywhere in the world.
            </p>
            <div className={styles.learn_more}>
              Learn More
            </div>
          </Link>
        </span>
      </div>
    </section>
  );
};

export default ServicesSection;
