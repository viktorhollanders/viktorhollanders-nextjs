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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          key="description"
          name="description"
          content="Hey, my name is Viktor Hollanders, I design and develop websites. I'm based in Reykjavík Iceland."
        />
        <meta
          property="og:image"
          content="https://viktorhollanders.com/icons/icon.png"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-86502310-1"
        />
        <meta
          name="google-site-verification"
          content="sbSIZB_IPao-ANb4vbHmTCrZfEDsXlFDdSsTrlN92aU"
        />
      </Head>

      <header>
        <Nav />
      </header>

      <p className="header-text capped">
        Hey my name is Viktor Hollanders. <br /> I design and develop stuff for
        the web
      </p>

      <h1>My selected work</h1>
      <section className="cards capped">
        <div className="card">
          <img src="/images/soguheimar.jpg" alt="card" />
          <p className="card-info">Web-development / design</p>
          <p className="card-description">
            I founded Söguheimar which is a summer camp for kids along with my
            brother and our friend in the summer of 2014. It has ben growing
            since then, each time we pick a story and live in it for a week, so
            lots of fun. I build the site using Jekyll.
          </p>
          <div className="card-links">
            <a
              className="website-link"
              href="https://soguheimar.is"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/website-link.svg" alt="website icon" />
            </a>
            <a
              className="github-link"
              href="https://github.com/viktorhollanders/soguheimar"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/guthub-link.svg" alt="github icon" />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/images/steiniart.jpg" alt="card" />
          <p className="card-info">Web-development / design</p>
          <p className="card-description">
            Steini art is a blog and art showcase for Aðalstein Þórsson and his
            project Einkasafnið. It´s built-in Craft CMS, which is a fantastic
            CMS, and its truly 100% customizable.
          </p>
          <div className="card-links">
            <a
              className="website-link"
              href="https://steini.art"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/website-link.svg" alt="website icon" />
            </a>
            <a
              className="github-link"
              href="https://github.com/viktorhollanders/steiniart-craft-CMS-source"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/guthub-link.svg" alt="github icon" />
            </a>
          </div>
        </div>

        <div className="card">
          <img src="/images/bioborgari.jpg" alt="card" />
          <p className="card-info">Web-development</p>
          <p className="card-description">
            Bio Borgari is an organic burger place in the heart of Reykjavik.
            They needed a new website and that would connect easily to their
            food delivery platform. It is built in Next Js , and linking to
            once. gloriafood. So if you ar hungry for a burger, I highly
            recomend them.
          </p>
          <div className="card-links">
            <a
              className="website-link"
              href="https://bioborgari.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/website-link.svg" alt="website icon" />
            </a>
            <a
              className="github-link"
              href="https://github.com/viktorhollanders/bioborgari"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/icons/guthub-link.svg" alt="github icon" />
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .header-text {
          font-size: 42px;
          line-height: 52px;
          text-align: left;
          margin: 120px 0;
        }

        h1 {
          font-weight: bold;
          font-size: 32px;
          text-align: center;
        }

        h2 {
          font-weight: 600;
          font-size: 32px;
          line-height: 38px;
          margin-right: 18px;
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr;
        }

        .card {
          justify-self: center;
          margin-bottom: 60px;
        }

        .card img {
          width: 100%;
        }

        .card-info {
          color: #686868;
        }

        .card-links {
          display: flex;
          justify-content: start;
        }

        .card-links a:hover {
          cursor: pointer;
        }

        .website-link img {
          height: 22px;
          padding-right: 26px;
        }

        .github-link img {
          height: 26px;
        }

        @media screen and (min-width: 500px) {
          .header-text {
            margin: 200px 0;
          }
        }

        @media screen and (min-width: 600px) {
          .capped {
            padding: 0 9%;
          }

          h1 {
            margin-bottom: 64px;
          }
        }

        @media screen and (min-width: 700px) {
          .header-text {
            font-size: 64px;
            line-height: 72px;
            font-weight: 400;

            padding: 0 20% 0 10%;
          }

          .cards {
            grid-template-columns: 1fr 1fr;
            grid-gap: 60px;
          }
        }

        @media screen and (min-width: 900px) {
          .cards {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }

        @media screen and (min-width: 1000px) {
          .header-text {
            padding: 0 17% 0 17%;
          }
        }
      `}</style>
    </div>
  )
}
