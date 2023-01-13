import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-slate-900 h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
        <Head>
          <title>Saurav Hathi</title>
          <meta name="description" content="Saurav Hathi's Portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* header */}
        <Header />
        {/* hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* about */}
        <section id="about" className="snap-start">
          <About />
        </section>
        {/* projects */}
        {/* contact */}
        {/* footer */}
        <Footer />
      </div>
    </>
  )
}
