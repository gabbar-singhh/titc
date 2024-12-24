import React from "react";
import styles from "./StatsSection.module.css";

const StatsSection = () => {
  const contactUsClickHandler = ()=>{
    window.open ('/contact', "_self")
  }
  return (
    <section className={styles.stats_main}>
      <h2 className={styles.heading}>see why customers 💟 us</h2>
      <p className={styles.desc}>let the number do the talking!</p>

      <ul className={styles.stats_container}>
        <li className={styles.stats_box}>
          <h3>No. 1</h3>
          <p>
            trading company in <br /> Dongguan, China
          </p>
        </li>

        <li className={styles.stats_box}>
          <h3>500+</h3>
          <p>satisfied customers</p>
        </li>

        <li className={styles.stats_box}>
          <h3>150+</h3>
          <p>countries served</p>
        </li>

        <li className={styles.stats_box}>
          <h3>1000+</h3>
          <p>trusted suppliers</p>
        </li>
      </ul>
      <div className={`${styles.stats_cta}`} onClick={contactUsClickHandler}>
        contact us
        <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
      </div>
    </section>
  );
};

export default StatsSection;
