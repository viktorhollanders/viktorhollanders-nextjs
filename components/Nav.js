import Link from 'next/link'

export default function Nav() {
  return (
    <div className="nav">
      <Link href="/">
        <img src="/icons/logo.svg" />
      </Link>

      <div className="header-link">
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <a href="mailto:viktorhollanders@gmail.com">Contact</a>
        </div>
      </div>

      <style jsx>{`
        .nav {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          padding: 23px 23px 0 23px;
        }

        .header-link {
          display: flex;
          flex-direction: row;
        }

        .header-link div {
          margin-left: 42px;
        }

        a {
          color: #000;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;

          text-decoration: underline;
          text-decoration-color: #ffd600;
        }

        a:hover {
        }

        @media screen and (min-width: 600px) {
          .nav {
            padding: 30px 40px 0 40px;
          }
        }
      `}</style>
    </div>
  )
}
