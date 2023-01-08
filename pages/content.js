import { useEffect, useState } from 'react'
import { Dancing_Script, Crimson_Pro } from '@next/font/google'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faCalendarAlt,
  faTemperatureLow,
  faHeadSideMask,
  faHandsWash,
  faUserTie,
  faCoffee,
  faMosque,
  faHands,
  faPhone,
  faBookOpen,
  faVolumeMute,
  faVolumeUp,
  faGift,
  faClose,
  faCopy,
} from '@fortawesome/free-solid-svg-icons'
import {
  faClock,
  faMap,
  faHandshake,
} from '@fortawesome/free-regular-svg-icons'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
})
const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-crimson-pro',
})

import { useCountdown } from '../hooks'

export default function Content() {
  const targetDate = new Date("12 january 2023 11:00:00");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  const [section1Data, setSection1Data] = useState({})
  const [section2Data, setSection2Data] = useState({})
  const [section3Data, setSection3Data] = useState({})
  const [section4Data, setSection4Data] = useState({})
  const [section5Data, setSection5Data] = useState({})
  const [section6Data, setSection6Data] = useState({})

  const [showModal, setShowModal] = useState(false)
  const [playAudio, setPlayAudio] = useState(false)

  const [copied1, setCopied1] = useState(false)
  const [copied2, setCopied2] = useState(false)

  useEffect(() => {
    setSection1Data({
      text1: "NGUNDUH MANTU",
      text2: 'Risqi & Muslimah',
      text3: 'Save The Date',
      text4: '12 . 01 . 2023',
      text5: 'Swipe Up',
    })
    setSection2Data({
      text1: "Ássalamu'alaikum warahmatullahi wabarakatuh",
      text2: "Dengan memohon rahmat & ridho Allah subhanahu wa ta'ala, Insyaa Allah kami akan menyelenggarakan acara Ngunduh Mantu:",
      text3: 'Muhammad Risqi Darmawan',
      text4: 'Putra pertama dari Bapak Tri Raharjo',
      text5: 'dan Ibu Arni Cahaya Utami',
      text6: 'Muslimah',
      text7: 'Putri pertama dari Bapak Afnan',
      text8: 'dan Ibu Asmanidar',
    })
    setSection3Data({
      text1: "Yang Insya Allah akan diselenggarakan pada:",
      text2: "Resepsi Nikah / Ngunduh Mantu",
      text3: "Kamis",
      text4: "12 Januari",
      text5: "2023",
      text6: "Pukul 11:00 WIB s/d selesai",
      text7: "Kediaman Mempelai Laki-laki",
      text8: "Perumahan Taman Imperium Blok I1 No 2 Poros, Kec. Meral, Kab. Karimun, Prov. Kepulauan Riau",
      text9: "Lihat Google Maps",
      text10: "Hitung Mundur Menuju Hari Bahagia",
    })
    setSection4Data({
      text1: "Adab Walimah",
      text2: "& Protokol Kesehatan",
      text3: "Tanpa mengurangi rasa hormat, dimohon kepada para tamu undangan untuk memperhatikan hal-hal berikut:",
      text4: "Hadir dalam kondisi sehat",
      text5: "Memakai Masker",
      text6: "Memakai Hand Sanitizer",
      text7: "Berpakaian menutup aurat rapi & sopan",
      text8: "Memperhatikan adab makan dan minum",
      text9: "Hanya berjabat dengan mahrom",
      text10: "Memperhatikan waktu sholat",
      text11: "Mendoakan kedua mempelai",
    })
    setSection5Data({
      text1: "Konfirmasi Kehadiran",
      text2: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu.",
      text3: "Jika bisa hadir kami tunggu konfirmasinya,",
      text4: "Jika tidak memungkinkan untuk hadir di pernikahan kami, tidak mengapa, semoga bisa berjumpa di lain kesempatan",
      text5: "Stay safe & jaga kesehatan ya :)",
      text6: "Hubungi Risqi",
      text7: "Kirim Hadiah",
    })
    setSection6Data({
      text1: "Penutup dari Kami",
      text2: "Kami mengucapkan banyak terima kasih atas kehadiran dan do'a restunya, serta mohon maaf jika terdapat kesalahan kata, penulisan gelar, ataupun sikap dari kami yang kurang berkenan dihati Bapak/Ibu/Saudara/i sekalian",
      text3: "Wassalamu'alaikum warahmatullahi wabarakatuh",
      text4: "Kami yang berbahagia,",
      text5: "Risqi & Muslimah",
      text6: "Keluarga Besar",
      text7: "Bapak Tri Raharjo & Ibu Arni Cahaya Utami",
      text8: "Bapak Afnan & Ibu Asmanidar",
      text9: "DOA UNTUK PENGANTIN",
      text10: "بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      text11: "“Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah, serta semoga Allah mempersatukan kalian berdua dalam kebaikan” (HR. Abu Dawud no. 2130)",
    })

    setPlayAudio(true);
    document.querySelector('audio').play();
  }, [])

  const handleAudio = () => {
    if (playAudio) {
      document.querySelector('audio').pause();
    } else {
      document.querySelector('audio').play();
    }
    setPlayAudio(!playAudio)
  }

  const handleClickCopy1 = () => {
    navigator.clipboard.writeText("061801001101531");
    setCopied1(true);
    setTimeout(() => setCopied1(false), 500)
  };
  const handleClickCopy2 = () => {
    navigator.clipboard.writeText("221301008863500");
    setCopied2(true);
    setTimeout(() => setCopied2(false), 500)
  };

  return (
    <div className="container max-w-screen-sm relative">
      <audio autoPlay loop>
        <source
          src="/assets/murotal.mp3"
          type="audio/mp3"
        />
      </audio>
      <div className='flex justify-end'>
        <div
          className='fixed z-30 top-2 mr-2 rounded-full text-white px-1 py-4 bg-sky-900 w-12 text-sm flex items-center justify-center cursor-pointer hover:bg-sky-700'
          onClick={handleAudio}
        >
          <FontAwesomeIcon
            icon={!playAudio ? faVolumeMute : faVolumeUp}
          />
        </div>
      </div>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='py-8 text-center z-10'>
          <h1 className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
            {section1Data.text1}
          </h1>
          <div className='my-4'>
            <Image
              className='animate-bounceSlow'
              src="/assets/couple.png"
              alt="couple"
              width={366}
              height={366}
            />
          </div>
          <h1 className={`${dancingScript.variable} font-sans text-4xl font-bold text-indigo-900`}>
            {section1Data.text2}
          </h1>
          <h4 className={`${crimsonPro.variable} font-serif text-2xl text-indigo-900 uppercase mt-1`}>
            {section1Data.text3}
          </h4>
          <h4 className={`${crimsonPro.variable} font-serif text-2xl text-indigo-900 uppercase font-bold`}>
            {section1Data.text4}
          </h4>
          <div className='mt-8 flex flex-row items-center gap-x-4'>
            <div className={`bg-sky-900 rounded-md py-2 w-20 ${crimsonPro.variable} text-white text-sm`}>
              <span className='text-xl'>
                {days}
              </span>
              <br />
              Hari
            </div>
            <div className={`bg-sky-900 rounded-md py-2 w-20 ${crimsonPro.variable} text-white text-sm`}>
              <span className='text-xl'>
                {hours}
              </span>
              <br />
              Jam
            </div>
            <div className={`bg-sky-900 rounded-md py-2 w-20 ${crimsonPro.variable} text-white text-sm`}>
              <span className='text-xl'>
                {minutes}
              </span>
              <br />
              Menit
            </div>
            <div className={`bg-sky-900 rounded-md py-2 w-20 ${crimsonPro.variable} text-white text-sm`}>
              <span className='text-xl'>
                {seconds}
              </span>
              <br />
              Detik
            </div>
          </div>
          <div className='mt-16'>
            <p className='text-sm uppercase opacity-70'>
              {section1Data.text5}
            </p>
            <FontAwesomeIcon icon={faArrowUp} className='animate-bounce mt-2' />
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='m-6 py-24 px-4 flex flex-col items-center text-center rounded-lg shadow-2xl z-10'>
          <Image
            src='/assets/bismillah.png'
            alt='bismillah'
            width={190.81}
            height={30.16}
          />
          <div className='mt-4'>
            <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
              {section2Data.text1}
              <br />
              {section2Data.text2}
            </p>
          </div>
          <div className='mt-8 flex flex-row items-center justify-center gap-x-3'>
            <Image
              src='/assets/t-pria.png'
              alt='gambar-pria'
              width={120}
              height={120}
            />
            <Image
              src='/assets/bunga.png'
              alt='bunga'
              width={58.48}
              height={58.48}
            />
            <Image
              src='/assets/t-wanita.png'
              alt='gambar-wanita'
              width={120}
              height={120}
            />
          </div>
          <div className='mt-8'>
            <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
              {section2Data.text3}
            </h1>
            <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
              {section2Data.text4}
              <br />
              {section2Data.text5}
            </p>
            <div className='my-4 flex flex-row items-center justify-center gap-x-2'>
              <span class="h-[2px] w-[32px] bg-black" />
              <h4 className={`${dancingScript.variable} font-sans text-xl font-bold text-indigo-900`}>
                &
              </h4>
              <span class="h-[2px] w-[32px] bg-black" />
            </div>
            <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
              {section2Data.text6}
            </h1>
            <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
              {section2Data.text7}
              <br />
              {section2Data.text8}
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='m-6 py-24 px-4 flex flex-col items-center text-center rounded-lg shadow-2xl z-10'>
          <div className='flex flex-row items-center justify-center gap-x-2'>
            <span class="h-[2px] w-[32px] bg-black" />
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span class="h-[2px] w-[32px] bg-black" />
          </div>
          <div className='mt-2'>
            <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
              {section3Data.text1}
            </p>
          </div>
          <div className='py-10 px-2 flex flex-col items-center text-center rounded-lg shadow-2xl z-20'>
            <h1 className={`${dancingScript.variable} font-sans text-xl font-bold text-indigo-900`}>
              {section3Data.text2}
            </h1>
            <div className='flex flex-row items-center gap-x-2 mt-4'>
              <div className='flex items-center justify-center'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-indigo-900 font-bold`}>
                  {section3Data.text3}
                </h2>
              </div>
              <div className='flex items-center justify-center border-x-2 border-indigo-900 px-2'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-indigo-900 font-bold`}>
                  {section3Data.text4}
                </h2>
              </div>
              <div className='flex items-center justify-center'>
                <h2 className={`${crimsonPro.variable} font-serif text-xl text-indigo-900 font-bold`}>
                  {section3Data.text5}
                </h2>
              </div>
            </div>
            <div className='flex flex-row items-center gap-x-2 mt-2'>
              <FontAwesomeIcon icon={faClock} />
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900`}>
                {section3Data.text6}
              </p>
            </div>
            <div className='mt-2'>
              <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900 font-bold`}>
                {section3Data.text7}
              </p>
              <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
                {section3Data.text8}
              </p>
            </div>
            <div className='mt-4 animate-bounce'>
              <a
                href="https://maps.app.goo.gl/UE5SiBTyXj8pJbWk8"
                target='_blank'
                className={`bg-sky-900 rounded-md w-20 py-2 px-4 text-white ${crimsonPro.variable} font-serif font-bold text-base`}
              >
                <FontAwesomeIcon icon={faMap} className='mr-2' />
                {section3Data.text9}
              </a>
            </div>
          </div>
          <div className='mt-12'>
            <h1 className={`${dancingScript.variable} font-sans text-xl font-bold text-indigo-900`}>
              {section3Data.text10}
            </h1>
            <div className='mt-4 flex flex-row items-center justify-center gap-x-4'>
              <div className={`bg-sky-900 rounded-md py-2 w-16 ${crimsonPro.variable} text-white text-sm`}>
                <span className='text-xl'>
                  {days}
                </span>
                <br />
                Hari
              </div>
              <div className={`bg-sky-900 rounded-md py-2 w-16 ${crimsonPro.variable} text-white text-sm`}>
                <span className='text-xl'>
                  {hours}
                </span>
                <br />
                Jam
              </div>
              <div className={`bg-sky-900 rounded-md py-2 w-16 ${crimsonPro.variable} text-white text-sm`}>
                <span className='text-xl'>
                  {minutes}
                </span>
                <br />
                Menit
              </div>
              <div className={`bg-sky-900 rounded-md py-2 w-16 ${crimsonPro.variable} text-white text-sm`}>
                <span className='text-xl'>
                  {seconds}
                </span>
                <br />
                Detik
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='m-6 py-24 px-4 flex flex-col items-center text-center rounded-lg shadow-2xl z-10'>
          <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
            {section4Data.text1}
            <br />
            {section4Data.text2}
          </h1>
          <div className='mt-2'>
            <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900`}>
              {section4Data.text3}
            </p>
          </div>
          <div className='mt-4 grid grid-cols-3 gap-2'>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faTemperatureLow} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text4}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faHeadSideMask} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text5}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faHandsWash} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text6}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text7}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text8}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text9}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faMosque} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text10}
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='rounded-full p-3 border-black border-2 flex items-center justify-center'>
                <FontAwesomeIcon icon={faHands} />
              </div>
              <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
                {section4Data.text11}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='m-6 py-24 px-4 flex flex-col items-center text-center rounded-lg shadow-2xl z-10'>
          <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
            {section5Data.text1}
          </h1>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section5Data.text2}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section5Data.text3}
            <br />
            {section5Data.text4}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section5Data.text5}
          </p>
          <div className='mt-6 flex flex-row items-center justify-center gap-x-4'>
            <a
              href="https://wa.me/6285235364181?text=Halo%20Risqi,%20saya%20akan%20datang%20di%20acara%20pernikahan"
              target="_blank"
              className={`py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base ${crimsonPro.variable} font-serif flex items-center cursor-pointer`}
            >
              <FontAwesomeIcon icon={faPhone} className='mr-2' />
              {section5Data.text6}
            </a>
            <a
              onClick={() => setShowModal(true)}
              className={`py-2 px-4 rounded-lg bg-sky-900 hover:bg-sky-700 text-white font-bold text-base ${crimsonPro.variable} font-serif flex items-center cursor-pointer`}
            >
              <FontAwesomeIcon icon={faGift} className='mr-2' />
              {section5Data.text7}
            </a>
          </div>
        </div>
      </section>
      <section className="relative w-full min-h-[822.55px] flex flex-col items-center justify-center bg-cover bg-center bg-section overflow-hidden">
        <div className='absolute left-[-50px] top-[-10px]'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-[270deg]'
            width={261}
            height={213}
          />
        </div>
        <div className='absolute right-[-70px] bottom-0'>
          <Image
            src='/assets/bingkai.png'
            alt="bingkai"
            className='rotate-90'
            width={261}
            height={213}
          />
        </div>
        <div className='m-6 py-24 px-4 flex flex-col items-center text-center rounded-lg shadow-2xl z-10'>
          <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
            {section6Data.text1}
          </h1>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section6Data.text2}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 font-bold mt-4`}>
            {section6Data.text3}
          </p>
          <span class="h-[1px] w-[100px] bg-black mt-3" />
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-4`}>
            {section6Data.text4}
          </p>
          <h1 className={`${dancingScript.variable} font-sans text-2xl font-bold text-indigo-900`}>
            {section6Data.text5}
          </h1>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 font-bold mt-2`}>
            {section6Data.text6}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section6Data.text7}
            <br />
            {section6Data.text8}
          </p>
          <div className='flex flex-row items-center gap-x-2 mt-4'>
            <span class="h-[1px] w-[32px] bg-black" />
            <FontAwesomeIcon icon={faBookOpen} />
            <span class="h-[1px] w-[32px] bg-black" />
          </div>
          <p className={`${crimsonPro.variable} font-serif text-base text-indigo-900 font-bold mt-2`}>
            {section6Data.text9}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-xl text-indigo-900 mt-2`}>
            {section6Data.text10}
          </p>
          <p className={`${crimsonPro.variable} font-serif text-sm text-indigo-900 mt-2`}>
            {section6Data.text11}
          </p>
        </div>
      </section>
      {
        showModal && (
          <>
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <div className='flex flex-row items-center'>
                      <FontAwesomeIcon icon={faGift} className='mr-2' />
                      <h3 className={`${dancingScript.variable} font-sans text-2xl font-bold text-black`}>
                        Kirim Hadiah
                      </h3>
                    </div>
                    <button
                      className="bg-transparent border-0 text-white float-right"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="text-white opacity-7 h-6 w-6 text-xl bg-sky-900 hover:bg-sky-700 py-0 flex items-center justify-center rounded-full">
                        <FontAwesomeIcon icon={faClose} />
                      </span>
                    </button>
                  </div>
                  <div className='px-6 py-2 text-center'>
                    <p className={`${crimsonPro.variable} font-serif text-sm text-black`}>
                      Kehadiran dan doa restu dari Bapak/Ibu/saudara/i merupakan karunia yang sangat berarti bagi kami, namun apabila memberikan hadiah adalah ungkapan tanda kasih silahkan bisa mengirimkan melalui informasi berikut ini. Terimakasih, Jazakumullahu Khairan.
                    </p>
                  </div>
                  <div className="relative px-6 flex-auto">
                    <div className='bg-gray-100 rounded px-6 py-4 w-full shadow-md flex flex-col items-center text-center'>
                      <Image
                        src="/assets/logo-bank.png"
                        alt="bank-bri"
                        width={80}
                        height={40}
                      />
                      <div className='mt-4'>
                        <p className={`${crimsonPro.variable} font-serif text-sm text-black font-bold`}>
                          a.n Muhammad Risqi Darmawan
                          <br />
                          061801001101531
                        </p>
                      </div>
                      <div className='mt-2'>
                        <button
                          onClick={handleClickCopy1}
                          className='text-sm w-35 text-white bg-sky-900 hover:bg-sky-700 rounded px-2 py-1 transition cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faCopy} className="mr-2" />
                          {copied1 ? 'Berhasil disalin!' : 'Salin No. Rekening'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <div className='bg-gray-100 rounded px-6 py-4 w-full shadow-md flex flex-col items-center text-center'>
                      <Image
                        src="/assets/logo-bank.png"
                        alt="bank-bri"
                        width={80}
                        height={40}
                      />
                      <div className='mt-4'>
                        <p className={`${crimsonPro.variable} font-serif text-sm text-black font-bold`}>
                          a.n Muslimah
                          <br />
                          221301008863500
                        </p>
                      </div>
                      <div className='mt-2'>
                        <button
                          onClick={handleClickCopy2}
                          className='text-sm w-35 text-white bg-sky-900 hover:bg-sky-700 rounded px-2 py-1 transition cursor-pointer'
                        >
                          <FontAwesomeIcon icon={faCopy} className="mr-2" />
                          {copied2 ? 'Berhasil disalin!' : 'Salin No. Rekening'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
