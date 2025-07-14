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
    const phoneNumber = "8613538501419";
    const message = encodeURIComponent(
      "Hello Kayyush, I visited your website and I'd be interested to know more!"
    );
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
        <title>Global Market Solutions | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <section className={styles.main}>
        <div className={styles.herosection}>
          <div className={styles.herosectionConatiner}>
            <Fade direction="up" triggerOnce>
              <div className={styles.capsule}>
                <img
                  src="/icons/briefcase-business.svg"
                  alt="briefcase business"
                />
                Our Services
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <h1 className={styles.heroHeading}>
                We help companies by providing
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <TypeAnimation
                sequence={[
                  "Wide Range of Products.",
                  1500,
                  "On Time Deliveries.",
                  1500,
                  "Premium Quality of Items.",
                  1500,
                  "Competitive Pricing.",
                  1500,
                ]}
                wrapper="h1"
                speed={50}
                repeat={Infinity}
                style={{ textAlign: "left" }}
                className={`${styles.heroHeading}`}
              />
            </Fade>
            <Fade direction="up" triggerOnce>
              <p>
                From factory to doorstep — we source, trade, and deliver quality
                goods globally with speed and reliability.
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
        </div>

        <div className={styles.container}>
          <h2>
            we provide a wide range of <br /> professional services
          </h2>
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
                src="/img/services/sourcing-blur.webp"
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
                src="/img/services/trading-blur.webp"
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
                src="/img/services/vendor-blur.webp"
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
                src="/img/services/shipping-blur.webp"
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
