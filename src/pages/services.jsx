import React from "react";
import Head from "next/head";
import styles from "@/styles/Services.module.css";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";
import FooterSection from "@/Components/FooterSection/FooterSection";

const services = () => {
  return (
    <>
      <Head>
        <title>Services | Thadani International Trading</title>
        <meta
          name="description"
          content="We help you source quality goods from China and ship them to your country"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <h2>we provide a wide range of expert services</h2>

        <div className={styles.container}>
          <div className={styles.services}>
            <span className={styles.content}>
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
            <img
              className={styles.right_img}
              src="/img/li2.png"
              alt="china network img"
            />
          </div>
          <div className={styles.services}>
            <img
              className={styles.right_img}
              src="/img/li2.png"
              alt="china network img"
            />
            <span className={styles.content}>
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
          <div className={styles.services}>
            <span className={styles.content}>
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
            <img
              className={styles.right_img}
              src="/img/li2.png"
              alt="china network img"
            />
          </div>
          <div className={styles.services}>
            <img
              className={styles.right_img}
              src="/img/li2.png"
              alt="china network img"
            />
            <span className={styles.content}>
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
