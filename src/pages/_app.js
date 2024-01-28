import "@/styles/globals.css";
import Head from "next/head";
import Nav from "@/components/Nav/Nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>I AM HUNGRY - Himanshu</title>
        <meta name="description" content="timeline based resume of Himanshu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icons/favicon.webp" />

        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Roboto:wght@700&display=swap"
          rel="stylesheet"
        />

        <meta property="og:title" content="Timeline based resume of Himanshu" />
        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
