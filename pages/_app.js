import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Risqi & Muslimah: Ngunduh Mantu</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
