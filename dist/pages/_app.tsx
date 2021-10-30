import type { AppProps } from 'next/app'
import { ChakraProvider, Flex } from '@chakra-ui/react'
import theme from '../styles/theme.ts'
import NProgress from "nprogress"
import Head from "next/head"
import { Image } from "@chakra-ui/image"

import "@fontsource/roboto"
import { useState } from 'react'
import { Router } from 'next/dist/client/router'

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setLoading] = useState(false)

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start()
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', (url) => {
    NProgress.done()
    setLoading(false)
  })

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
      {isLoading && (
            <Image alt="loading" src="/loading.svg" boxSize="50px" position="fixed" bottom="5px" right="5px" draggable="false" />
      )}
      <Flex direction="column" minH="100vh">
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  )
}
export default MyApp
