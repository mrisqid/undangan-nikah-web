import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Risqi & Muslimah: Walimatul 'Urs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
