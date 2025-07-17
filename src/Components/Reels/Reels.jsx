"use client";

import React from "react";
import styles from "./Reels.module.css";

const Reels = ({ postUrl }) => {
  return (
    <div className={styles.reelsMain}>
      <iframe
        src={postUrl + "/embed"}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        title="Instagram Reel"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Reels;
