import 'bootstrap/dist/css/bootstrap.min.css';
import "react-image-gallery/styles/css/image-gallery.css"
import '../styles/globals.css'
import Script from 'next/script';
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <script
        src="https://unpkg.com/react/umd/react.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossOrigin="true"
      ></script>

      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="true"
      ></script>
    </div>
  )
}

export default MyApp
