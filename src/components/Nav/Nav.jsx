import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav_main}>
      <div className={styles.nav_content}>
        <p className={styles.left_nav}>
          <ul>
            <li>about me</li>
            <li>My Journey</li>
            <li>why me?</li>
          </ul>
        </p>
        <p className={styles.right_nav}>HIMANSHU PAL</p>
      </div>
      <div className={styles.white_line}></div>
    </nav>
  );
};

export default Nav;
