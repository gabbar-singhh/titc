import React, { useEffect, useRef } from "react";
import Reels from "./Reels";
import styles from "./ReelSection.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const ReelSection = () => {
  const INSTA_URL = "https://www.instagram.com/thadani.chinasourcing/";
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollNext = () => {
      const firstChild = container.querySelector(`.${styles.reelItem}`);
      if (!firstChild) return;

      const gap = 16; // 1rem ≈ 16px
      const scrollAmount = firstChild.offsetWidth + gap;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      // loop back
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    };

    let interval;

    const start = () => {
      interval = setInterval(scrollNext, 5000);
    };

    const stop = () => clearInterval(interval);

    container.addEventListener("mouseenter", stop);
    container.addEventListener("mouseleave", start);

    start();

    return () => {
      stop();
      container.removeEventListener("mouseenter", stop);
      container.removeEventListener("mouseleave", start);
    };
  }, []);

  return (
    <section className={styles.main}>
      <Fade direction="up" triggerOnce>
        <h2>Built On Trust.</h2>
      </Fade>

      <Fade direction="up" triggerOnce>
        <h2 className={styles.headingTwo}>
          Join Our 100K+ Strong Instagram Community
        </h2>
      </Fade>

      {/* 👇 IMPORTANT: added ref */}
      <div ref={scrollRef} className={styles.reelsFeed}>
        <Fade cascade damping={0.05} triggerOnce>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DWq3NwaBGZ2"} />
          </div>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DLm9DDuMQhr"} />
          </div>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DWbvinSsFR-"} />
          </div>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DV_Zg5KjHau"} />
          </div>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DLXge0hKBWX"} />
          </div>
          <div className={styles.reelItem}>
            <Reels postUrl={"https://www.instagram.com/reel/DIgmSItJeF8"} />
          </div>
        </Fade>
      </div>

      <Fade direction="up" triggerOnce>
        <Link href={INSTA_URL} className={styles.ctaInsta}>
          join our community on insta
          <img src="/icons/arrow-up-right.svg" alt="" />
        </Link>
      </Fade>

      <div className={styles.bottomWave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79..."
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default ReelSection;
