import React from "react";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
import Image from "next/image";

const NavigationBar = () => {
  return (
    <nav className={styles.nav_main}>
      <div className={styles.leftside_nav}>
        <Link href={"/"}>
          <img src={"/img/logo_nav.png"} alt="tit logo" />
        </Link>
      </div>

      <div className={styles.rightside_nav}>
        <ul>
          <Link href={"/"}>
            <li>home</li>
          </Link>
          <Link href={"/services"}>
            <li>services</li>
          </Link>{" "}
          <Link href={"/product"}>
            <li>product</li>
          </Link>{" "}
          <Link href={"/about_us"}>
            <li>about us</li>
          </Link>{" "}
          <Link href={"/contact"}>
            <li className={`${styles.cta_contact} shine_eff`}>
              contact
              <img src="/icons/arrow_up_right.svg" alt="arrow upright icon" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
