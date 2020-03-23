import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Fotter'

export default function About() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <section className="about">
        <img src="/images/profile-picture.jpeg" />
        <p>
          So as you know already my name is Viktor Hollanders. I'm 27 years old
          self-taught web developer and designer, living in Reikjavík Iceland.
        </p>
        <p>
          Besides web development and web design work, I like to carve spoons
          plant trees and take photos. You can see some of the photos I have
          shot as I walk around here below. Peace out ✌️
        </p>
      </section>

      <section className="albums">
        <Link href="#">
          <div className="album">
            <picture>
              <img src="/images/photos/002/21765432_1380782382032120_2606643344064736801_o.jpg" />
            </picture>
            <div className="album-title">
              <h1>ADHD Sygló</h1>
              <p>17.09.17</p>
            </div>
          </div>
        </Link>

        <Link href="#">
          <div className="album">
            <picture>
              <img src="/images/photos/001/14556711_1021665471277148_7565869595573414524_o.jpg" />
            </picture>
            <div className="album-title">
              <h1>Morning Mist</h1>
              <p>17.09.17</p>
            </div>
          </div>
        </Link>
      </section>

      <Footer />

      <style jsx>{`
        .about {
          max-width: 977px;
          margin: 0 auto;
          padding: 0 16px 120px 16px;
        }

        .about img {
          height: 120px;
          width: 120px;
          background: #ffffff;
          box-shadow: 0px -4px 40px rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          margin-bottom: 30px;
        }

        .about p {
          font-size: 24px;
          line-height: 32px;
          text-align: left;
        }

        .album {
          padding: 0 16px 64px 16px;
          position: relative;
          max-width: 977px;
          margin: 0 auto;
        }

        .album-title {
          width: 100%;
        }

        .album-title h1 {
          font-size: 32px;
        }

        .album-title p {
          font-size: 16px;
        }

        .album-title {
          color: #fff;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        picture img {
          width: 100%;
          height: auto;
        }

        @media screen and (min-width: 600px) {
          .about {
            padding: 0 60px 120px 60px;
          }

          .album {
            padding: 0 60px 64px 60px;
          }
        }

        @media screen and (min-width: 800px) {
          .about img {
            height: 150px;
            width: 150px;
          }

          .about p {
            font-size: 32px;
            line-height: 42px;
          }

          .album {
            padding-bottom: 126px;
          }

          .album-title h1 {
            font-size: 42px;
          }

          .album-title p {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  )
}
