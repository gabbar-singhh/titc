import React from "react";
import styles from "./ServicesSection.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ServicesSection = () => {
  return (
    <div className={styles.main}>
      <div class={styles.custom_shape_divider_top_1735330510}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class={styles.shape_fill}
          ></path>
        </svg>
      </div>

      <section className={styles.container}>
        <h2>Our Expert Services</h2>

        <div className={styles.container}>
          <Fade cascade damping={0.1} direction="up" triggerOnce>
            <span>
              <Link href={"/services#services-1"} className={styles.card}>
                <img
                  className={styles.card_icon}
                  src="/icons/sourcing.svg"
                  alt="sourcing icon"
                />
                <h3>sourcing</h3>
                <p>
                  We connect you with top manufacturers in China, ensuring
                  high-quality products at competitive prices tailored to your
                  needs.
                </p>
                <div className={styles.learn_more}>Learn More</div>
              </Link>
              <Link href={"/services#services-2"} className={styles.card}>
                <img
                  src="/icons/trading.svg"
                  className={styles.card_icon}
                  alt="trading icon"
                />
                <h3>Trading</h3>
                <p>
                  We handle all aspects of trading, from negotiating deals to
                  ensuring timely delivery, making global sourcing hassle-free.
                </p>
                <div className={styles.learn_more}>Learn More</div>
              </Link>
            </span>
            <span>
              <Link href={"/services#services-3"} className={styles.card}>
                <img
                  src="/icons/vendor_pay.svg"
                  className={styles.card_icon}
                  alt="vendor icon"
                />
                <h3>Vendor Payments</h3>
                <p>
                  We streamline vendor payments, managing secure transactions to
                  ensure smooth business operations and on-time deliveries.
                </p>
                <div className={styles.learn_more}>Learn More</div>
              </Link>
              <Link href={"/services#services-4"} className={styles.card}>
                <img
                  src="/icons/shipping.svg"
                  className={styles.card_icon}
                  alt="shipping icon"
                />
                <h3>Shipping</h3>
                <p>
                  We offer both air and sea freight services, ensuring your
                  goods are delivered quickly and safely, anywhere in the world.
                </p>
                <div className={styles.learn_more}>Learn More</div>
              </Link>
            </span>
          </Fade>
        </div>
      </section>

      <div class={styles.custom_shape_divider_bottom_1735330233}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ServicesSection;
