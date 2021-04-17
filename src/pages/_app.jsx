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
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
