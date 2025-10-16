import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import UploadForm from '../components/UploadForm'
import Pricing from '../components/Pricing'

export default function Home(){
  return (
    <>
      <Head>
        <title>DataClear — AI-Powered Data Cleaning</title>
        <meta name="description" content="AI-powered data cleaning platform. Clean, standardize and enrich datasets in minutes." />
      </Head>
      <main className="min-h-screen bg-white text-gray-900">
        <Hero />
        <Features />
        <UploadForm />
        <Pricing />
        <footer className="py-12 text-center text-sm text-gray-500">© DataClear</footer>
      </main>
    </>
  )
}
