import React from "react";
import Reels from "./Reels";
import styles from "./ReelSection.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ReelSection = () => {
  const INSTA_URL = "https://www.instagram.com/thadani.chinasourcing/";
  return (
    <section className={styles.main}>
      <Fade direction="up" triggerOnce>
        <h2>Built On Trust.</h2>
      </Fade>
      <Fade direction="up" triggerOnce>
        <h2 className={styles.headingTwo}>Join Our 100K+ Strong Instagram Community</h2>
      </Fade>

      <div className={styles.reelsFeed}>
        <Fade cascade damping={0.3} triggerOnce>
          <Reels postUrl={"https://www.instagram.com/reel/DTIiDJ_jP4Z"} />
          <Reels postUrl={"https://www.instagram.com/reel/DSDBogmjISP"} />
          <Reels postUrl={"https://www.instagram.com/reel/DPrHrgiDKsn"} />
        </Fade>
      </div>

      <Fade direction="up" triggerOnce>
        <Link href={INSTA_URL} className={styles.ctaInsta}>
          join our community on insta
          <img src="/icons/arrow-up-right.svg" alt="" />
        </Link>
      </Fade>

      <div className={styles.bottomWave}>
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
    </section>
  );
};

export default ReelSection;
