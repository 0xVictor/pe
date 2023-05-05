import { getCssText } from '@/styles'
import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700;800&display=swap" rel="stylesheet" />
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText }} />
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
