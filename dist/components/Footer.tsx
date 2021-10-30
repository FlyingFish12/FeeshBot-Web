import { Box, Flex, HStack, Link, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { useRouter } from "next/dist/client/router";

const NavItem = ({ to, router, children, ...rest } : TextProps) => {

    return (
        <Link href={to} onClick={(e) => {
            e.preventDefault()
            router.push(to)
        }} my={"auto"}>
            <Text
            textTransform="uppercase"
            fontSize="20px"
            pr={2}
            {...rest}
            >{children}</Text>
        </Link>
    )

}

export default function Footer() {
    const router = useRouter()

    const isMobile = useBreakpointValue({
        base: true,
        md: false
    })

    return (
        <Flex mt={"auto"} minH="30px" bg="#131315" p={5} justifyContent="space-between">
            <Box>
                <Text color="#da0059" fontWeight="bold" fontSize="40px">FeeshBot</Text>
                <Text>I Have No Copyright &copy; 2021</Text>
            </Box>

            <HStack display={isMobile ? "none" : "flex"}>
                <NavItem router={router} to={"/"}>Home</NavItem>
                <NavItem router={router} to={"/commands"}>Commands</NavItem>
                <NavItem router={router} to={"/faq"}>FAQ</NavItem>
                <Link href="https://discord.com/oauth2/authorize?client_id=735918313921708053&permissions=268823799&scope=bot" my={"auto"} color="#f43f5e" fontSize={"25px"} fontWeight="semibold" isExternal>INVITE FEESH</Link>
            </HStack>
        </Flex>
    )
}