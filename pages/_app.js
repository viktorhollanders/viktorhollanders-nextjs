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
        text-align: center;
        font-size: 16px;
        line-height: 19px;
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
