import { Dancing_Script, Crimson_Pro } from '@next/font/google'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
})

export default function Home() {
  const router = useRouter()
  const { to } = router.query
  return (
    <div className='relative'>
      <section className="absolute w-full h-screen bg-transparent bg-center bg-cover bg-home" />
      <section className='absolute w-full h-screen bg-black/60' />
      <div className="container absolute">
        <div className="w-full h-screen flex flex-col items-center justify-center text-white py-4">
          <Image
            src="/assets/logo-home.png"
            alt="logo"
            width={307.2}
            height={307.2}
          />
          <div className='mt-6'>
            <h1 className={`${dancingScript.variable} font-sans text-4xl font-bold`}>
              Risqi & Muslimah
            </h1>
          </div>
          <div className='mt-3 text-center'>
            <p className={`${crimsonPro.variable} font-serif text-xl text-center`}>
              Kepada Yth.
              <br />
              Bapak/Ibu/Saudara/i
            </p>
            <h5 className={`${crimsonPro.variable} font-serif text-2xl font-bold mt-3 text-center capitalize`}>
              {to || 'Tamu Terhormat'}
            </h5>
            <p className={`${crimsonPro.variable} font-serif text-base mt-1`}>
              di Tempat
            </p>
          </div>
          <div className='mt-4'>
            <a
              href="/content"
              className='bg-sky-800/75 py-2 px-4 inline-flex items-center justify-center rounded-md outline-2 outline-black font-bold animate-bounce'
            >
              <FontAwesomeIcon icon={faEnvelopeOpen} className='mr-2' />
              Buka Undangan
            </a>
          </div>
          <div>
            <p className='text-sm mt-2'>
              Mohon maaf apabila ada kesalahan penulisan nama/gelar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
