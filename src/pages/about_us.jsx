import React from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import Link from "next/link";
import FooterSection from "@/Components/FooterSection/FooterSection";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.main}>
        <div className=""></div>

        <div className={styles.about_content}>
          <ul>
            <li>
              <h3>about us.</h3>
              <p>
                Thadani International Trading Co. Ltd connects businesses
                worldwide with trusted manufacturers in China. We specialize in
                sourcing and trading all kinds of goods, making it easy for
                businesses to import quality products at competitive prices.
              </p>
              <p>
                Our approach is built on integrity, transparency, and a
                commitment to customer satisfaction. Whether you need help
                finding the right suppliers, negotiating the best deals, or
                managing the shipping process, we ensure a seamless and
                hassle-free experience.
              </p>
            </li>

            <li>
              <h3>meet the founders.</h3>
              <div className={styles.photo_duo}>
                <span>
                  <img src="/img/placeholder.png" alt="" />
                  <p>Mr. Kayyush Thadani</p>
                </span>
                <span>
                  <img src="/img/placeholder.png" alt="" />
                  <p>Mr. Kayyush Thadani</p>
                </span>
              </div>
            </li>

            <li>
              <h3>our mission.</h3>
              <p>
                Our mission is to make international trade as simple as shopping
                online. We help businesses access China’s vast manufacturing
                network, guiding them every step of the way—from finding the
                right suppliers to managing logistics. The goal is to be a
                trusted, one-stop solution for all your import needs, so you can
                focus on growing your business with confidence.
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.core_values}>
          <div className={styles.core_left}>
            <h3>our core values, we believe in</h3>
            <p>
              our principles guide us to build trust, work together, and always
              improve.
            </p>
            <div onClick={openWhatsAppHandler}>
              contact us{" "}
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </div>
          </div>
          <div className={styles.core_right}>
            <span>
              <div className={styles.card}>
                <img
                  className={styles.card_icon}
                  src="/icons/integrity_blue.svg"
                  alt="shield with check mark"
                />
                <h3>Integrity</h3>
                <p>
                  we do business with honesty and fairness, always keeping your
                  best interests at heart.
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
                  The sourcing world keeps changing, and so do we. We adapt and
                  improve to deliver better solutions every time.
                </p>
              </div>
            </span>
          </div>
        </div>

        <div className={styles.ready}>
          <h3>Readay to start sourcing?</h3>
          <p>
            connect with us to access the best products from China.Let's work
            together to grow your business!
          </p>
          <div onClick={openWhatsAppHandler}>
            Get in Touch on WhatsApp
            <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
          </div>
        </div>
        <FooterSection />
      </section>
    </>
  );
};

export default about_us;
