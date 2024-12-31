import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import FooterSection from "@/Components/FooterSection/FooterSection";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import SmallCTASection from "@/Components/SmallCTASection/SmallCTASection";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";

const about_us = () => {
  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent("hello, I need your help.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Head>
        <title>About Us | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <section className={styles.main}>
        <div className={styles.hero_aboutus}>
          <span>
            <Fade direction="up" triggerOnce>
              <p>about us</p>
            </Fade>

            <Fade direction="up" triggerOnce>
              {/* <h1>Your Trusted Partner in Global Sourcing.</h1> */}
              <h1>
                Get to know us, <br /> your Trusted Partner in Global Sourcing.
              </h1>
            </Fade>

            <Fade direction="up" triggerOnce>
              <div onClick={openWhatsAppHandler} className={styles.cta}>
                contact us now
                <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
              </div>
            </Fade>
          </span>
          <div className={styles.custom_shape_divider_bottom_1735337911}>
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
        </div>

        <div className={styles.about_content}>
          <ul>
            <li>
              <Fade triggerOnce direction="up">
                <h3>about us</h3>
              </Fade>
              <Fade triggerOnce direction="up" damping={0.1}>
                <p>
                  Thadani International Trading Co. Ltd connects businesses
                  worldwide with trusted manufacturers in China. We specialize
                  in sourcing and trading all kinds of goods, making it easy for
                  businesses to import quality products at competitive prices.
                </p>
                <p>
                  Our approach is built on integrity, transparency, and a
                  commitment to customer satisfaction. Whether you need help
                  finding the right suppliers, negotiating the best deals, or
                  managing the shipping process, we ensure a seamless and
                  hassle-free experience.
                </p>
              </Fade>
            </li>

            <li>
              <div className={styles.mission_container}>
                <span>
                  <Fade triggerOnce direction="up">
                    <h3 className={styles.head}>Our Mission</h3>
                  </Fade>
                  <Fade triggerOnce direction="up" damping={0.1}>
                    <p className={styles.content}>
                      Our mission is to simplify international trade, making it
                      as easy and convenient as shopping online. We specialize
                      in helping businesses connect with China’s vast and
                      diverse manufacturing network, providing support every
                      step of the way. From identifying the right suppliers and
                      negotiating the best deals to ensuring high quality and
                      handling logistics, we manage the entire import process
                      seamlessly. <br />
                      <br /> Our aim is to offer a comprehensive, one-stop
                      solution tailored to the unique needs of each client. By
                      providing access to high-quality products at competitive
                      prices, we empower businesses to stay ahead in their
                      markets. With our expertise and commitment to excellence,
                      we strive to build lasting partnerships, giving our
                      clients the confidence to focus on their growth and
                      success.
                    </p>
                  </Fade>
                </span>

                <div className={styles.photo_duo}>
                  <img src="/img/placeholder.png" alt="" />
                  <p className={styles.name}>
                    Mr. Kayyush Thadani <br />
                    <span>Founder @Thadani International Trading </span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className={styles.core_values}>
          {/* wave top effect */}
          <div className={styles.custom_shape_divider_top_1735650993}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
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
            </svg>
          </div>

          <div className={styles.core_left}>
            <Fade triggerOnce direction="up">
              <h3>our core values, we believe in</h3>
            </Fade>
            <Fade triggerOnce direction="up">
              <p>
                our principles guide us to build trust, work together, and
                always improve.
              </p>
            </Fade>
            <Fade triggerOnce direction="up">
              <div onClick={openWhatsAppHandler} className={styles.cta}>
                contact us{" "}
                <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
              </div>
            </Fade>
          </div>
          <div className={styles.core_right}>
            <Fade triggerOnce cascade direction="up" damping={0.1}>
              <span>
                <div className={styles.card}>
                  <img
                    className={styles.card_icon}
                    src="/icons/integrity_blue.svg"
                    alt="shield with check mark"
                  />
                  <h3>Integrity</h3>
                  <p>
                    we do business with honesty and fairness, always keeping
                    your best interests at heart.
                  </p>
                </div>
              </span>
              <span>
                <div className={styles.card}>
                  <img
                    className={styles.card_icon}
                    src="/icons/collaboration-blue.svg"
                    alt="puzzle piece icon"
                  />
                  <h3>Collaboration</h3>
                  <p>
                    we see our clients as partners. your success is our success,
                    and we're here to build lasting relationships.
                  </p>
                </div>
                <div className={styles.card}>
                  <img
                    src="/icons/innovation_blue.svg"
                    className={styles.card_icon}
                    alt="rocket icon"
                  />
                  <h3>Innovation</h3>
                  <p>
                    The sourcing world keeps changing, and so do we. We adapt
                    and improve to deliver better solutions every time.
                  </p>
                </div>
              </span>
            </Fade>
          </div>
        </div>

        <div className={styles.ready}>
          <div className={styles.custom_shape_divider_top_1735651852}>
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

          <Fade triggerOnce direction="up">
            <h3>Readay to start sourcing?</h3>
          </Fade>
          <Fade triggerOnce direction="up">
            <p>
              connect with us to access the best products from China. <br />
              Let's work together to grow your business!
            </p>
          </Fade>
          <Fade triggerOnce direction="up">
            <div onClick={openWhatsAppHandler} className={styles.cta}>
              Get in Touch on WhatsApp
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </div>
          </Fade>
        </div>
        <FooterSection />
      </section>
    </>
  );
};

export default about_us;
