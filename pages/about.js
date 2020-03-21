import Nav from '../components/Nav'
import Footer from '../components/Fotter'

export default function About() {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <section className="about capped">
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

      {/* <section className="albums">
        <div className="album">
          <picture>
            <img src="" />
          </picture>
          <h1></h1>
          <p></p>
        </div>
      </section> */}

      <Footer />

      <style jsx>{`
        .about {
          margin: 120px 0;
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
          font-size: 32px;
          line-height: 42px;
          text-align: left;
        }

        @media screen and (min-width: 600px) {
          .capped {
            padding: 0 12%;
          }
        }

        @media screen and (min-width: 800px) {
          .about {
            margin: 200px 0;
          }

          .about img {
            height: 150px;
            width: 150px;
          }
        }
      `}</style>
    </div>
  )
}
