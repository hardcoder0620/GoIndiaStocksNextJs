import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import FeaturedCompanies from '@/components/FeaturedCompanies'
import Sidebar from '@/components/Sidebar'
import FourmSection from '@/components/FourmSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Go India Stocks-Next.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <FeaturedCompanies/>
      <Sidebar/>
      <FourmSection/>


    </>
  )
}
