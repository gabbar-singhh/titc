import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Timeline from "@/components/Timeline/Timeline";
import WhyMe from "@/components/WhyMe/WhyMe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p>
          I'm the <span className={styles.hun}>HUNGRY GUY</span>
        </p>
        <p>that the</p>
        <p>Google Developer Student Club</p>
        <p>is looking for!</p>
      </div>
      <Timeline />
      <WhyMe />
    </main>
  );
}