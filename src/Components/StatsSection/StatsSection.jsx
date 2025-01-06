import React from "react";
import styles from "./StatsSection.module.css";
import CountUp from "react-countup";

const StatsSection = () => {
  const contactUsClickHandler = () => {
    window.open("/contact", "_self");
  };
  return (
    <section className={styles.stats_main}>
      <h2 className={styles.heading}>see why customers 💛 us</h2>
      <p className={styles.desc}>let the number do the talking!</p>

      <div className={styles.stats_container}>
        <div className={styles.stats_box}>
          <h3>No. 1</h3>
          <p>
            trading company in <br /> Dongguan, China
          </p>
        </div>

        <div className={styles.stats_box}>
          <h3>
            <CountUp
              start={100}
              end={500}
              enableScrollSpy={true}
              duration={1}
              suffix="+"
            />
          </h3>
          <p>satisfied customers</p>
        </div>

        <div className={styles.stats_box}>
          <h3>
            <CountUp
              start={100}
              end={150}
              enableScrollSpy={true}
              duration={2}
              suffix="+"
            />
          </h3>
          <p>countries served</p>
        </div>

        <div className={styles.stats_box}>
          <h3>
            <CountUp
              start={100}
              end={1000}
              enableScrollSpy={true}
              duration={2}
              suffix="+"
            />
          </h3>
          <p>trusted suppliers</p>
        </div>
      </div>
      <div className={`${styles.stats_cta}`} onClick={contactUsClickHandler}>
        contact us
        <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
      </div>

      <div className={styles.custom_shape_divider_top_1735502423}>
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
    </section>
  );
};

export default StatsSection;
