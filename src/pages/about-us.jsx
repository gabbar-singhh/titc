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

    img.src = "/img/founder.webp";
  }, ["/img/founder.webp"]);

   useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.src = "/img/cofounder.webp";
  }, ["/img/cofounder.webp"]);
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
          <div className={styles.herosectionContainer}>
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
              <p className={styles.desc}>
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
                        Our mission is simple: we want to make international
                        trade feel as easy as ordering something online. No
                        confusion, no stress—just straightforward business that
                        actually works. We help companies tap into China's
                        massive manufacturing world. And trust us, it's huge and
                        incredibly diverse. Whether you're looking for something
                        specific or exploring options, we're here to guide you
                        through it all. <br />
                        <br /> Here's what we actually do: We find the right
                        suppliers for your needs. We negotiate prices so you get
                        solid deals. We check quality because nobody wants
                        surprises when the shipment arrives. And we handle all
                        the logistics headaches—the shipping, the paperwork, the
                        tracking, everything. Basically, we manage the entire
                        import process from start to finish. You tell us what
                        you need, and we make it happen.
                        <br />
                        Every business is different. We get that. So we don't do
                        cookie-cutter solutions. We take time to understand what
                        you're trying to achieve, what your challenges are, and
                        what success looks like for you. Then we build a plan
                        around that. Our goal is to get you access to quality
                        products at prices that make sense for your business.
                        Good products shouldn't cost a fortune, and cheap
                        products shouldn't be garbage.
                        <br />
                        <br /> We find that sweet spot. We're not just here for
                        one transaction. We want to build real partnerships—the
                        kind where we understand your business well enough that
                        things get easier over time, not harder. We learn what
                        you like, what you don't, what works for your customers.
                        When you work with us, you get to focus on what you do
                        best: running and growing your business. You don't need
                        to become an expert in international shipping
                        regulations or spend hours vetting factories in
                        Guangzhou. That's our job. We bring the expertise. We
                        bring the connections. We bring the follow-through. And
                        hopefully, we bring you some peace of mind knowing
                        someone's actually looking out for your interests on the
                        other side of the world. <br />
                        <br /> At the end of the day, we want you to feel
                        confident. Confident in your suppliers, confident in
                        your products, and confident that when you need
                        something handled, it'll get done right.
                      </p>
                    </Fade>
                  </span>
                  <Fade triggerOnce>
                    <div className={styles.founder_photos}>
                      <div className={styles.photo_duo}>
                        {imageLoaded ? (
                          <img src="/img/founder.webp" alt="founder img" />
                        ) : (
                          <img
                            src="/img/founder-blur.webp"
                            alt="blur img of founder"
                          />
                        )}
                        <p className={styles.name}>
                          Mr. Kayyush Thadani <br />
                          <span>Founder @Thadani International Trading </span>
                        </p>
                      </div>
                      <div className={styles.photo_duo}>
                        {imageLoaded ? (
                          <img src="/img/cofounder.webp" alt="founder img" />
                        ) : (
                          <img
                            src="/img/cofounder-blur.webp"
                            alt="blur img of founder"
                          />
                        )}
                        <p className={styles.name}>
                          Mr. Kannak Thadani <br />
                          <span>
                            Co-Founder @Thadani International Trading{" "}
                          </span>
                        </p>
                      </div>
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
        <ContactUsSection />
        <FooterSection />
      </section>
    </>
  );
};

export default about_us;
