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
          So as you know already my name is Viktor Hollanders. I’m a 27-year-old
          web designer and developer based in Reykjavík Iceland. My focus is on
          making the user experience as simple and intuitive as possible as well
          as responsive design and minimalistic but strong user interface. This
          all boils down to that I will make a product that fits your and your
          company’s needs. I can also do them separately, programming or design
          that's no problem. Below is a list of technologies that I work with at
          the moment.
        </p>
        <p>
          <strong>Languages: </strong> HTML, Css, Javascript, GIT, command line.
          <br />
          <strong>Frameworks: </strong> Next.js, React
          <br />
          <strong>Content delivery systems CMS: </strong> Craft cms, Jekyll.
        </p>
        <p>
          Besides web development and web design, I like to carve spoons,
          planting trees and take photos. Peace out ✌️
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
          font-size: 24px;
          line-height: 32px;
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
