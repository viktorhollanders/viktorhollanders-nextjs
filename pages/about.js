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
        <div className="about-content">
          <h1>About</h1>
          <p>
            I’m a 27-year-old web designer and developer based in Reykjavík
            Iceland. Besides web development and web design, I like to carve
            spoons, planting trees and take photos.
          </p>
          <p>
            I design and deliver websites with a powerful brand and a simple and
            intuitive user experience. I use the technologies most suited to you
            or your company.
          </p>
          <p>Peace out ✌🌿️</p>

          <h1>Tools</h1>
          <p>
            HTML, Css, Javascript, Git, Comand line, Craft CMS, Next Js,
            Prismic, React, Figma.
          </p>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .about {
          margin: 120px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .about img {
          height: 120px;
          width: 120px;
          background: #ffffff;
          box-shadow: 0px -4px 40px rgba(0, 0, 0, 0.05);
          border-radius: 50%;
          margin-bottom: 30px;
        }

        h1 {
          font-size: 32px;
        }

        p {
          font-size: 18px;
          line-height: 1.5;
          text-align: left;
          max-width: 502px;
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
