import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="./logo.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}