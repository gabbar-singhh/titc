import React, { useState } from "react";
import styles from "./Nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className={styles.nav_main}>
      <section className={styles.nav_content}>
        <div className={styles.left_nav}>
          <ul>
            <li>
              <Link
                to="why_me"
                spy={true}
                smooth={true}
                offset={-180}
                duration={1000}
              >
                why me?
              </Link>
            </li>
            <li>
              <Link
                to="my_journey"
                spy={true}
                smooth={true}
                offset={-130}
                duration={1000}
              >
                My Journey
              </Link>
            </li>
          </ul>
        </div>
        <p
          className={styles.right_nav}
          onClick={() => {
            window.open("https://codexhimanshu.in/");
          }}
        >
          HIMANSHU PAL
        </p>
      </section>
      <div className={styles.white_line}></div>
    </nav>
  );
};

export default Nav;