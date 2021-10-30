import { darken, whiten } from "@chakra-ui/theme-tools"

export const Lighten = (color, amount) => whiten(color, amount)

export const Darken = (color, amount) => darken(color, amount)