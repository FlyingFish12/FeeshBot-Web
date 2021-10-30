import { Flex } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import Head from "next/head"
import Footer from "./Footer"

import Navigation from "./Navigation"

export default function BaseLayout({ pageTitle, children }) {
    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    return (
    <>
    <Head>
        <title>{pageTitle} - Feesh</title>
    </Head>

    <Navigation isMobile={isMobile} />

    <main>{children}</main>

    <Footer />

    </>
    )
}