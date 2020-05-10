export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 18px;
        line-height: 1.7;
      }

      * {
        box-sizing: border-box;
      }

      .capped {
        padding: 0 16px;
      }
    `}</style>
  </>
)
