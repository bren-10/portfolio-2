import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/globals.css";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></Script>

      <Script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></Script>

      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></Script>
    </div>
  );
}

export default MyApp;
