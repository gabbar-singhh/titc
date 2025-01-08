import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/Services.module.css";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";
import FooterSection from "@/Components/FooterSection/FooterSection";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";

const services = () => {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);
  const [imageLoaded4, setImageLoaded4] = useState(false);

  const openWhatsAppHandler = () => {
    const phoneNumber = "918208896517";
    const message = encodeURIComponent("Hello Kayyush, I visited your website and I'd be interested to know more");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded1(true);
    };

    img.src = "/img/services/sourcing.webp";
  }, ["/img/services/sourcing.webp"]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded2(true);
    };

    img.src = "/img/services/trading.webp";
  }, ["/img/services/trading.webp"]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded3(true);
    };

    img.src = "/img/services/vendor.webp";
  }, ["/img/services/vendor.webp"]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded4(true);
    };

    img.src = "/img/services/shipping.webp";
  }, ["/img/services/shipping.webp"]);
  return (
    <>
      <Head>
        <title>Services | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={styles.main}>
        <div className={styles.hero_services}>
          <span>
            <Fade direction="up" triggerOnce>
              <p>our services</p>
            </Fade>

            <Fade direction="up" triggerOnce>
              <h1>We help companies by providing</h1>
            </Fade>

            <Fade direction="up" triggerOnce>
              <TypeAnimation
                sequence={[
                  "competitive pricing.",
                  1000,
                  "wide range of products.",
                  1000,
                  "on-time delivery.",
                  1000,
                  "high quality of items.",
                  1000,
                ]}
                style={{ textAlign: "center" }}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                className={styles.top_text}
              />
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

        <div className={styles.container}>
          <h2>we provide a wide range of expert services</h2>
          <div
            className={`${styles.services} ${styles.service_1}`}
            id="services-1"
          >
            <span className={styles.content}>
              <img
                className={styles.card_icon}
                src="/icons/sourcing.svg"
                alt="sourcing icon"
              />
              <h3>sourcing</h3>
              <p>
                Finding the right products and suppliers can be a challenge,
                especially when dealing with international markets. We simplify
                this process by:
              </p>

              <ul>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We research the market to find the best products for your
                  needs.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We tap into our network of over 1000 trusted suppliers in
                  China to find the right fit.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We negotiate prices and quality to make sure you get the best
                  deal.
                </li>
              </ul>
            </span>
            {imageLoaded1 ? (
              <img
                className={styles.right_img}
                src="/img/services/sourcing.webp"
                alt="china network img"
              />
            ) : (
              <img
                className={styles.right_img}
                src="/img/services/sourcing_blur.webp"
                alt="china network img"
              />
            )}
          </div>
          <div
            className={`${styles.services} ${styles.service_2}`}
            id="services-2"
          >
            {imageLoaded2 ? (
              <img
                className={styles.right_img}
                src="/img/services/trading.webp"
                alt="china network img"
              />
            ) : (
              <img
                className={styles.right_img}
                src="/img/services/trading_blur.webp"
                alt="china network img"
              />
            )}

            <span className={styles.content}>
              <img
                src="/icons/trading_white.svg"
                className={styles.card_icon}
                alt="trading icon"
              />
              <h3>trading</h3>
              <p>
                We make international trade easy and straightforward for you by:
              </p>

              <ul>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We help you connect with reliable partners in China to find
                  the right products.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We take care of paperwork and make sure everything follows the
                  necessary import/export rules.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  Offering support from finding the right supplier to getting
                  your products delivered smoothly.
                </li>
              </ul>
            </span>
          </div>
          <div
            className={`${styles.services} ${styles.service_3}`}
            id="services-3"
          >
            <span className={styles.content}>
              <img
                src="/icons/vendor_pay.svg"
                className={styles.card_icon}
                alt="credit card icon"
              />
              <h3>vendor payments</h3>
              <p>
                Handling international payments can be tricky, but we make it
                safe by:
              </p>

              <ul>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We handle payments to Chinese suppliers securely, making sure
                  everything is clear.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  Our payment process is transparent, so you can always track
                  transactions with ease.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We help optimize currency conversions and ensure
                  cost-effective transactions.
                </li>
              </ul>
            </span>
            {imageLoaded3 ? (
              <img
                className={styles.right_img}
                src="/img/services/vendor.webp"
                alt=""
              />
            ) : (
              <img
                className={styles.right_img}
                src="/img/services/vendor_blur.webp"
                alt=""
              />
            )}
          </div>
          <div
            className={`${styles.services} ${styles.service_4}`}
            id="services-4"
          >
            {imageLoaded4 ? (
              <img
                className={styles.right_img}
                src="/img/services/shipping.webp"
                alt="china network img"
              />
            ) : (
              <img
                className={styles.right_img}
                src="/img/services/shipping_blur.webp"
                alt="china network img"
              />
            )}

            <span className={styles.content}>
              <img
                src="/icons/shipping_white.svg"
                className={styles.card_icon}
                alt="sourcing icon"
              />
              <h3>shipping</h3>
              <p>
                Getting your goods to your location on time and in perfect
                condition is our priority. Our shipping services include:
              </p>

              <ul>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  We arrange air and sea shipping to get your products delivered
                  on time.
                </li>
                <li>
                  <img
                    src="/icons/check_green.svg"
                    alt="green tick mark icon"
                  />
                  All paperwork, including customs clearance, handled for a
                  smooth delivery.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </section>
      <ContactUsSection />
      <FooterSection />
    </>
  );
};

export default services;
