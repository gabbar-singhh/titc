import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className={styles.nav_main}>
      <div className={styles.nav_content}>
        <p className={styles.left_nav}>
          <ul>
            <li>
              <Link to="why_me"
                spy={true}
                smooth={true}
                offset={-180}
                duration={1000} >
                why me?
              </Link>
            </li>
            <li>
              <Link to="my_journey"
                spy={true}
                smooth={true}
                offset={-130}
                duration={1000} >
                My Journey
              </Link>
            </li>
          </ul>
        </p>
        <p className={styles.right_nav}>
          HIMANSHU PAL
        </p>
      </div>
      <div className={styles.white_line}></div>
    </nav>
  );
};

export default Nav;
