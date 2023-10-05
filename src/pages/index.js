import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/Nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <p>
          i'm the <span className={styles.hun}>hungry guy</span>
        </p>
        <p>that</p>
        <p>google developer student club</p>
        <p>is looking for!</p>
      </div>
    </main>
  );
}
