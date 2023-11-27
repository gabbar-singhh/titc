import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Timeline from "@/components/Timeline/Timeline";
import WhyMe from "@/components/WhyMe/WhyMe";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const URL = {
    LINKEDIN: "https://www.linkedin.com/in/himanshufs/",
    WHATSAPP: "https://wa.me/+917701973093",
    EMAIL:
      "https://mail.google.com/mail/?view=cm&fs=1&to=himanshup1308@gmail.com",
    RESUME:
      "https://drive.google.com/file/d/1I4jQAeGj0Od2LctN43Lud8g2uI9UyJu2/view?usp=sharing",
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p>
          I'm the <span className={styles.hun}> HUNGRY GUY </span>
        </p>
        <p>that the</p>
        <p>Google Developer Student Club</p>
        <p>is looking for!</p>
      </div>
      <WhyMe />
      <Timeline />
      <section className={styles.final}>
        <p>Pls I would love to hear back from you :)</p>

        <div className={styles.cta}>
          <Link href={URL.WHATSAPP} target="_blank">
            <div className={`${styles.btn} BubbleEff`}>
              <span> WhatsApp</span>
              <Image
                src={"/icons/whatsapp.svg"}
                height={16}
                width={16}
                alt="whatsapp icon"
              />
            </div>
          </Link>

          <Link href={URL.EMAIL} target="_blank">
            <div className={`${styles.btn} BubbleEff`}>
              <span style={{ textDecoration: "none" }}> Email</span>
              <Image
                src={"/icons/gmail.svg"}
                height={20}
                width={20}
                alt="gmail icon"
              />
            </div>
          </Link>

          <Link href={URL.LINKEDIN} target="_blank">
            <div className={`${styles.btn} BubbleEff`}>
              <span> LinkedIn</span>
              <Image
                src={"/icons/Linkedin.svg"}
                height={20}
                width={20}
                alt="linkedin icon"
              />
            </div>
          </Link>

          <Link href={URL.RESUME} target="_blank">
            <div className={`${styles.btn} BubbleEff`}>
              <span> Resume</span>
              <Image
                src={"/icons/resumeIcons.png"}
                height={20}
                width={22}
                alt="resume icon"
              />
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
