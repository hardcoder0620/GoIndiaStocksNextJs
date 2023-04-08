import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/style.css'
import Script from 'next/script'


export default function App({ Component, pageProps }) {
  return<>
  <Component {...pageProps} />
  <Script src='/js/bs.js'/>
  </> 
}
