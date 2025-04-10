import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavigationBar.module.css";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const NavigationBar = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState("&#9776;");
  const [showMenu, setShowMenu] = useState(false);

  const hamburgerClickHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);

    setHamburgerIcon((prevIcon) =>
      prevIcon === "&#9776;" ? "&#10005;" : "&#9776;"
    );
  };

  const hideMenuHandler = () => {
    setTimeout(() => {
      setShowMenu(false);
      setHamburgerIcon("&#9776;");
    }, 350);
  };

  return (
    <nav className={styles.nav_main}>
      <div className={styles.leftside_nav}>
        <Link href={"/"}>
          <img
            src={"/img/logo_nav.webp"}
            className={styles.nav_logo}
            alt="tit logo"
          />
        </Link>
      </div>

      <div className={styles.rightside_nav}>
        <ul className={styles.nav_ul}>
          <Link href={"/"}>
            <li className={styles.nav_li}>home</li>
          </Link>
          <Link href={"/services"}>
            <li className={styles.nav_li}>services</li>
          </Link>{" "}
          <Link href={"/product"}>
            <li className={styles.nav_li}>product</li>
          </Link>{" "}
          <Link href={"/about_us"}>
            <li className={styles.nav_li}>about us</li>
          </Link>{" "}
          <Link href={"/contact"}>
            <li className={`${styles.cta_contact} ${styles.nav_li}`}>
              contact
              <img src="/icons/arrow-up-right.svg" alt="arrow upright icon" />
            </li>
          </Link>
        </ul>
      </div>

      <div className={styles.nav_mobile}>
        <span
          onClick={hamburgerClickHandler}
          dangerouslySetInnerHTML={{ __html: hamburgerIcon }}
          className={
            hamburgerIcon === "&#10005;"
              ? `${styles.x_size}`
              : `${styles.ham_size}`
          }
        ></span>

        <div
          className={
            showMenu
              ? `${styles.nav_mobile_container}`
              : `${styles.close} ${styles.nav_mobile_container}`
          }
        >
          <ul className={styles.nav_mobile_ul}>
            <Link href={"/"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>home</li>
            </Link>
            <Link href={"/services"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>services</li>
            </Link>{" "}
            <Link href={"/product"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>product</li>
            </Link>{" "}
            <Link href={"/about_us"} onClick={hideMenuHandler}>
              <li className={styles.nav_mobile_li}>about us</li>
            </Link>{" "}
            <Link href={"/contact"} onClick={hideMenuHandler}>
              <li
                className={`${styles.nav_cta_contact} ${styles.nav_mobile_li}`}
              >
                contact
                <img
                  src="/icons/arrow_up_right.svg"
                  className={styles.img}
                  alt="arrow upright icon"
                />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
