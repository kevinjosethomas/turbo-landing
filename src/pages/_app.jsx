import Head from "next/head";
import { Fragment } from "react";

import "../styles/tailwind.css";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Turbo</title>

        {/* Google Fonts; Inter */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        {/* FontAwesome and Twemoji icons */}
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/ellekasai/twemoji-awesome@gh-pages/twemoji-awesome.css"
        />

        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Turbo | The browser for developers" />
        <meta
          name="description"
          content="Turbo streamlines your dev process by prioritizing developer-friendly software. Turbo is opensource and built with modern technology. Sign up in the waitlist to get early access to Turbo!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://turbobrowser.io/" />
        <meta
          property="og:title"
          content="Turbo | The browser for developers"
        />
        <meta
          property="og:description"
          content="Turbo streamlines your dev process by prioritizing developer-friendly software. Turbo is opensource and built with modern technology. Sign up in the waitlist to get early access to Turbo!"
        />
        <meta property="og:image" content="/images/banner.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://turbobrowser.io/" />
        <meta
          property="twitter:title"
          content="Turbo | The browser for developers"
        />
        <meta
          property="twitter:description"
          content="Turbo streamlines your dev process by prioritizing developer-friendly software. Turbo is opensource and built with modern technology. Sign up in the waitlist to get early access to Turbo!"
        />
        <meta property="twitter:image" content="/images/banner.png" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
