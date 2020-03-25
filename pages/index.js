import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Fotter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Viktor Hollanders</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta
          name="description"
          content="Hey, my name is Viktor Hollanders, I'm a web developer and designer."
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-86502310-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-86502310-1');
              `,
          }}
        />
      </Head>

      <header>
        <Nav />
      </header>

      <p className="text capped">
        Hey my name is Viktor Hollanders. <br /> I design and develop stuff for
        the web
      </p>

      <h1>My selected work</h1>
      <section className="cards">
        <div className="card">
          <div className="card-link">
            <h2>Söguheimar</h2>
            <a href="https://soguheimar.is" target="_blank">
              <img src="/icons/link.svg" />
            </a>
          </div>
          <p>Home page / Jekyll</p>
        </div>

        <div className="card">
          <div className="card-link">
            <h2>BioBorgari</h2>
            <a href="https://bioborgari.com" target="_blank">
              <img src="/icons/link.svg" />
            </a>
          </div>
          <p>E-commerce / nextJs </p>
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
          display: grid;
          grid-template-columns: 1fr;
        }

        h1 {
          font-weight: bold;
          font-size: 42px;
          text-align: center;
        }

        .card {
          width: 296px;
          height: 163px;
          margin: 42px 0;
          justify-self: center;

          background: #ffffff;
          box-shadow: 0px -4px 40px rgba(0, 0, 0, 0.05);
          border-radius: 5px;
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
        }

        @media screen and (min-width: 700px) {
          .text {
            font-size: 64px;
            line-height: 72px;
            font-weight: 400;

            padding: 0 20% 0 10%;
          }

          .cards {
            grid-template-columns: 1fr 1fr;
            grid-gap: 42px;
          }

          .card {
            margin-bottom: 10px;
          }
        }

        @media screen and (min-width: 800px) {
          .cards {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 1000px) {
          .text {
            padding: 0 38% 0 10%;
          }
        }
      `}</style>
    </div>
  )
}
