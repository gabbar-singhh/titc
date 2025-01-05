import React, { useState, useEffect } from "react";
import styles from "./CompareSection.module.css";
import { Fade } from "react-awesome-reveal";

const CompareSection = () => {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);
  const [imageLoaded3, setImageLoaded3] = useState(false);

  const getstartedClickHandler = () => {
    window.open("/contact", "_self");
  };

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded1(true);
    };

    img.src = "/img/compareSection/1.png";
  }, ["/img/compareSection/1.png"]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded2(true);
    };

    img.src = "/img/compareSection/2.png";
  }, ["/img/compareSection/2.png"]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded3(true);
    };

    img.src = "/img/compareSection/3.png";
  }, ["/img/compareSection/3.png"]);
  return (
    <section className={styles.main}>
      <div className={styles.bottom_wave}></div>
      <Fade direction="up" triggerOnce>
        <h2>
          What Makes Us Your Perfect Patner?
        </h2>
      </Fade>
      <div className={styles.card_container}>
        <Fade direction="up" triggerOnce>
          <div className={styles.card}>
            <span className={styles.content}>
              <h3>Quality You Can Trust</h3>
              <p>
                We deliver high-quality products from China at competitive
                prices, customized to your needs. With double quality control,
                we ensure the best products and reduce the risk of poor-quality
                goods in your market.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
            {imageLoaded1 ? (
              <img
                src="/img/compareSection/1.png"
                className={styles.img}
                alt="shipment box img"
              />
            ) : (
              <img
                src="/img/compareSection/1_blur.webp"
                className={styles.img}
                alt="shipment box img"
              />
            )}
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={`${styles.card} ${styles.card_02}`}>
            {imageLoaded2 ? (
              <img
                src="/img/compareSection/2.png"
                className={`${styles.img} ${styles.img_card2}`}
                alt="china network img"
              />
            ) : (
              <img
                src="/img/compareSection/2_blur.webp"
                className={`${styles.img} ${styles.img_card2}`}
                alt="china network img"
              />
            )}

            <span className={styles.content}>
              <h3>Access to Supplier Network</h3>
              <p>
                We leverage our wide network of trusted suppliers and
                manufacturers in China to deliver high-quality products at
                competitive prices, saving you time and resources while giving
                you a competitive edge in the market.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce>
          <div className={styles.card}>
            <span className={styles.content}>
              <h3>Safe Payments. No Frauds. Timely Delivery</h3>
              <p>
                We handle payments securely, eliminating delays and fraud. We
                understand international work can be tricky, but we make sure
                your products arrive on time, keeping your business running
                smoothly.
              </p>
              <div onClick={getstartedClickHandler}>
                get started{" "}
                <img
                  src="/icons/chevron-right.svg"
                  height={16}
                  alt="arrow icon"
                />
              </div>
            </span>
            {imageLoaded3 ? (
              <img
                src="/img/compareSection/3.png"
                className={styles.img}
                alt="credit card img"
              />
            ) : (
              <img
                src="/img/compareSection/3_blur.webp"
                className={styles.img}
                alt="credit card img"
              />
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default CompareSection;
