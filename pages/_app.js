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
    `}</style>
  </>
);
