import "@/styles/globals.css";
import Head from "next/head";
import Nav from "@/components/Nav/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I AM THAT HUNGRY GUY GDSC NEEDS!</title>
        <meta name="description" content="timeline based resume of Himanshu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.webp" />

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
