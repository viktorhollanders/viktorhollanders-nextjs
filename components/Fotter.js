export default function Fotter() {
  return (
    <div>
      <footer>
        <div className="social-icons">
          <a href="https://github.com/viktorhollanders" target="_blank">
            <img src="/icons/github.png" />
          </a>
          <a
            href="https://www.instagram.com/viktorjorthollanders/"
            target="_blank"
          >
            <img src="/icons/instagram.png" />
          </a>
          <a href="https://twitter.com/VHollanders" target="_blank">
            <img src="/icons/twitter.png" />
          </a>
        </div>
        <p>©viktorhollanders</p>
      </footer>
      <style jsx>{`
       footer {
        margin-top: 58px;
       }

       .social-icons a:nth-child(2) {
        margin: 0 40px;
       }

       a:hover,
       a:focus,
       a:active {
        courur: pointer;
       }

       img {
        height: 40px;
        width: 40px;
       }
     }

     p {
      margin-top: 42px;
     }     

     @media screen and (min-width: 700px) {
      img {
       height: 50px;
       width: 50px;
      }

      p {
       margin-bottom: 60px;
      }
     }
    `}</style>
    </div>
  )
}
