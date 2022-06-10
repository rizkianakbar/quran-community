import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta charSet="UTF-8" />
          <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
          <meta content="#5EEAD3" name="theme-color" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="QuranMemo" name="og:title" />
          <meta
            content="Menghafal Al-Quran di era digital"
            name="og:description"
          />
          <meta content="https://quranmemo.vercel.app/" name="og:url" />
          <meta content="QuranMemo" name="og:site_name" />
          <meta content="website" name="og:type" />
          <meta
            content="https://res.cloudinary.com/rizkianakbar/image/upload/v1654826586/icon-256x256_myje8c.png"
            name="og:image"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
