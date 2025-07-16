import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const [showMenuBox, setShowMenuBox] = useState(false);

  const toggleMenu = () => setShowMenuBox((prev) => !prev);

  const closeMenu = () => setShowMenuBox(false);

  useEffect(() => {
    if (showMenuBox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenuBox]);

  return (
    <nav className={styles.nav_main}>
      <div className={styles.leftside_nav}>
        <Link href={"/"}>
          <img
            src={"/img/logo-nav.webp"}
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
          </Link>
          <Link href={"/product"}>
            <li className={styles.nav_li}>products</li>
          </Link>
          <Link href={"/about-us"}>
            <li className={styles.nav_li}>about us</li>
          </Link>
          <Link href={"/contact#contact-form"}>
            <li className={`${styles.cta_contact} ${styles.nav_li}`}>
              contact us
            </li>
          </Link>
        </ul>

        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          {!showMenuBox ? (
            <img src="/icons/menu.svg" alt="menu" height="28px" width="auto" />
          ) : (
            <img src="/icons/x.svg" alt="close" height="28px" width="auto" />
          )}
        </div>
      </div>

      <div className={`${styles.menuBox} ${!showMenuBox ? styles.hide : ""}`}>
        <ol className={styles.menuBoxList}>
          <Link href={"/"}>
            <li onClick={closeMenu}>Home</li>
          </Link>
          <Link href={"/services"}>
            <li onClick={closeMenu}>Services</li>
          </Link>
          <Link href={"/product"}>
            <li onClick={closeMenu}>Products</li>
          </Link>
          <Link href={"/about-us"}>
            <li onClick={closeMenu}>About Us</li>
          </Link>
          <Link href={"/contact#contact-form"}>
            <li onClick={closeMenu}>Contact Us</li>
          </Link>
        </ol>
      </div>
    </nav>
  );
};

export default NavigationBar;
