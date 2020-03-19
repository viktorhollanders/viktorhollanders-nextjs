export default function Fotter() {
  return (
    <div>
      <footer>
        <div className="social-icons">
          <a src="https://github.com/viktorhollanders">
            <img src="/icons/github.png" />
          </a>
          <a src="https://github.com/viktorhollanders">
            <img src="/icons/instagram.png" />
          </a>
          <a src="https://twitter.com/VHollanders">
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
    `}</style>
    </div>
  )
}
