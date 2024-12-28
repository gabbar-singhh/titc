import React from "react";
import styles from "./StatsSection.module.css";
import CountUp from "react-countup";

const StatsSection = () => {
  const contactUsClickHandler = () => {
    window.open("/contact", "_self");
  };
  return (
      <section className={styles.stats_main}>
        <h2 className={styles.heading}>see why customers 💟 us</h2>
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
      </section>
  );
};

export default StatsSection;
