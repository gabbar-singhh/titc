import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ showModalVal, closeModalHandler }) => {
  return (
    <>
      {showModalVal && (
        <section className={styles.overlay}>
          <section className={styles.main}>
            <div className={styles.modal_topbar}>
              <h2 className={styles.heading}>Scan the QR Code</h2>
              <div className={styles.close_btn}>
                <img
                  src="/icons/cross_white.svg"
                  onClick={closeModalHandler}
                  alt="cross icon"
                />
              </div>
            </div>
            <div className={styles.modal_content}>
              <p>
                Use the QR code to connect with me as a friend, then send me a
                message.
              </p>
              <img
                className={styles.qr_code}
                src="/img/qr-code.webp"
                alt="qr code"
              />
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default Modal;
