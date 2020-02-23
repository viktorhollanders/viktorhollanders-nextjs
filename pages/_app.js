export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
      * {
        font-family: -apple-system;
      }

      body {
        margin: 0;
      }

      header {
        height: 80vh;
        background-color: #ffd100;
        padding-top: 10px;
      }
    `}</style>
  </>
);
