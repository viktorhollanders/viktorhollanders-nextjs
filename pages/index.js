import Nav from '../components/Nav'
import Footer from '../components/Fotter'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Viktor Hollanders</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          key="description"
          name="description"
          content="This is the personal website for Viktor hollanders showcasing his projects and photos."
        />
      </Head>

      <header>
        <Nav />
      </header>

      <p className="text capped">
        Hey my name is Viktor Hollanders I design and develop stuff for the web
      </p>

      <h1>My selected work</h1>
      <section className="cards capped">
        <div className="card">
          <div className="card-link">
            <h2>Söguheimar</h2>
            <a href="https://soguheimar.is">
              <img src="/icons/link.svg" />
            </a>
          </div>
          <p>Home page / Jekyll</p>
        </div>

        <div className="card">
          <div className="card-link">
            <h2>BioBorgari</h2>
            <a href="https://bioborgari.com">
              <img src="/icons/link.svg" />
            </a>
          </div>
          <p>Home page e-commerce / nextJs </p>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .text {
          font-size: 42px;
          line-height: 52px;
          text-align: left;
          margin: 120px 0;
        }

        .cards {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        h1 {
          font-weight: bold;
          font-size: 42px;
          text-align: center;
        }

        .card {
          width: 296px;
          height: 163px;
          background: #ffffff;
          box-shadow: 0px -4px 40px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
          margin: 42px 0;
        }

        .card-link {
          display: flex;
          flex-direction: row;
          align-items: baseline;
          justify-content: center;
        }

        h2 {
          font-weight: 600;
          font-size: 32px;
          line-height: 38px;
          margin-right: 18px;
        }

        @media screen and (min-width: 500px) {
          .text {
            padding: 0 20%;
          }

          .text {
            margin: 200px 0;
          }
        }

        @media screen and (min-width: 600px) {
          .capped {
            padding: 0 12%;
          }

          h1 {
            margin-bottom: 64px;
          }

          .cards {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 42px;
          }

          .card {
            margin-bottom: 10px;
          }
        }

        @media screen and (min-width: 1000px) {
          .text {
            padding: 0 28%;
          }
        }
      `}</style>
    </div>
  )
}
