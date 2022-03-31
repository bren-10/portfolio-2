import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></Script>

      <Script
        src="https://unpkg.com/react-dom/umd/react.dom.production.min.js"
        crossOrigin="true"
      ></Script>

      <Script
        src="https://unpkg.com/react-bootstrap@next/dist/react.bootstrap.min.js"
        crossOrigin="true"
      ></Script>
    </div>
  )
}

export default MyApp
