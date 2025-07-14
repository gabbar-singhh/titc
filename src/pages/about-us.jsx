import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "@/styles/About.module.css";
import FooterSection from "@/Components/FooterSection/FooterSection";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import SmallCTASection from "@/Components/SmallCTASection/SmallCTASection";
import ContactUsSection from "@/Components/ContactUsSection/ContactUsSection";

const about_us = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = "/img/placeholder.webp";
  }, ["/img/placeholder.webp"]);
  return (
    <>
      <Head>
        <title>
          Your Trusted Partner in Trading with China | Thadani International
          Trading
        </title>
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
                <img src="/icons/about-us-icon.svg" alt="briefcase business" />
                about us
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <h1 className={styles.heroHeading}>get to know us</h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <h1 className={styles.heroHeading}>
                Your Trusted Partner In Sourcing <br /> From China.
              </h1>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p>
                We simplify global trade by sourcing quality products from
                China, ensuring trust, speed, and reliability every step.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce>
              <Link href={"/contact#contact-form"} className={styles.cta}>
                Contact Us Now{" "}
                <img
                  src="/icons/arrow-up-right-new.svg"
                  alt="arrow upright icon"
                />
              </Link>
            </Fade>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutContentContainer}>
            <ul>
              <li>
                <Fade triggerOnce>
                  <h3>about the company</h3>
                </Fade>
                <Fade triggerOnce cascade damping={0.1}>
                  <p>
                    Thadani International Trading Co. Ltd connects businesses
                    worldwide with trusted manufacturers in China. We specialize
                    in sourcing and trading all kinds of goods, making it easy
                    for businesses to import quality products at competitive
                    prices.
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
                    <Fade triggerOnce>
                      <h3 className={styles.head}>Our Mission</h3>
                    </Fade>
                    <Fade triggerOnce cascade damping={0.1}>
                      <p className={styles.content}>
                        Our mission is to simplify international trade, making
                        it as easy and convenient as shopping online. We
                        specialize in helping businesses connect with China’s
                        vast and diverse manufacturing network, providing
                        support every step of the way. From identifying the
                        right suppliers and negotiating the best deals to
                        ensuring high quality and handling logistics, we manage
                        the entire import process seamlessly. <br />
                        <br /> Our aim is to offer a comprehensive, one-stop
                        solution tailored to the unique needs of each client. By
                        providing access to high-quality products at competitive
                        prices, we empower businesses to stay ahead in their
                        markets. With our expertise and commitment to
                        excellence, we strive to build lasting partnerships,
                        giving our clients the confidence to focus on their
                        growth and success.
                      </p>
                    </Fade>
                  </span>
                  <Fade triggerOnce>
                    <div className={styles.photo_duo}>
                      {imageLoaded ? (
                        <img src="/img/founder.webp" alt="founder img" />
                      ) : (
                        <img
                          src="/img/founder_blur.webp"
                          alt="blur img of founder"
                        />
                      )}
                      <p className={styles.name}>
                        Mr. Kayyush Thadani <br />
                        <span>Founder @Thadani International Trading </span>
                      </p>
                    </div>
                  </Fade>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.core_values}>
          <div className={styles.wavyTop}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
          <div className={styles.core_left}>
            <Fade triggerOnce cascade damping={0.1}>
              <h3>our core values, we believe in</h3>
              <p>
                our principles guide us to build trust, work together, and
                always improve.
              </p>
              <Link href={"/contact#contact-form"} className={styles.cta}>
                Get Started
                <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
              </Link>
            </Fade>
          </div>
          <div className={styles.core_right}>
            <Fade triggerOnce cascade damping={0.1}>
              <span>
                <div className={styles.card}>
                  <img
                    className={styles.card_icon}
                    src="/icons/integrity_blue.svg"
                    alt="shield with check mark"
                  />
                  <h3>Integrity</h3>
                  <p>
                    We do business with honesty and fairness, always keeping
                    your best interests at heart.
                  </p>
                </div>
              </span>
              <span>
                <Fade triggerOnce cascade damping={0.1}>
                  <div className={styles.card}>
                    <img
                      className={styles.card_icon}
                      src="/icons/collaboration-blue.svg"
                      alt="puzzle piece icon"
                    />
                    <h3>Collaboration</h3>
                    <p>
                      We see our clients as partners. Your success is our
                      success, and we're here to build lasting relationships.
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
                </Fade>
              </span>
            </Fade>
          </div>
          <div className={styles.wavyBottom}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={styles.shapeFill}
              ></path>
            </svg>
          </div>
        </div>

        <SmallCTASection
          head="Ready To Start Sourcing?"
          content="Connect with us to access the best products from China. Let's work together to grow your business!"
        />
        <ContactUsSection/>
        <FooterSection />
      </section>
    </>
  );
};

export default about_us;
