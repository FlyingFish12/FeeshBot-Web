import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { createBreakpoints, mode } from "@chakra-ui/theme-tools"
import { Darken, Lighten } from "../lib/utils"

const breakpoints = createBreakpoints({
  xs: "25em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
})

const components = {
}

const colors = {
    darkBlue: "#011627",
    lightBlue: Lighten("#011627", 10),
}

const fonts = {
    body: "Roboto"
}

const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false
}

const styles = {
    global: (props) => ({
        "::-webkit-scrollbar": {
            width: "5px",
            height: "5px"
        },
        "::-webkit-scrollbar-thumb": {
            background: "gray",
            borderRadius: "30px"
        },
        "::-webkit-scrollbar-track": {
            background: "transparent"
        },
        body: {
            background: "#1c1d20"
        },
    })
}

const theme = extendTheme({
    components,
    fonts,
    breakpoints,
    config,
    styles,
    colors
})

export default theme