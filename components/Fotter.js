export default function Fotter() {
  return (
    <div>
      <footer>
        <div className="social-icons">
          <a href="https://twitter.com/VHollanders" target="_blank">
            <img src="/icons/twitter.png" />
          </a>
          <a
            href="https://www.instagram.com/viktorjorthollanders/"
            target="_blank"
          >
            <img src="/icons/instagram.png" />
          </a>
        </div>
      </footer>
      <style jsx>{`
       footer {
        margin: 58px 0;
       }

       .social-icons {
        display: flex;
        flex-direction: row;
        justify-content: center;
       }

      
       a:hover,
       a:focus,
       a:active {
        courur: pointer;
       }

        .social-icons a:nth-child(2) {
         padding-left:40px;
       }


       img {
        height: 40px;
        width: 40px;
       }
     }    

     @media screen and (min-width: 700px) {
      footer {
        margin-top: 116px;
       }

        .social-icons a:nth-child(2) {
         padding-left: 80px;
       }


      img {
       height: 50px;
       width: 50px;
      }
     }
    `}</style>
    </div>
  )
}
