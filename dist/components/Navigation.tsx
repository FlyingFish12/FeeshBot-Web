import { IconButton } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Flex, HStack, Link, Text, TextProps } from "@chakra-ui/layout";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import { useRouter } from "next/dist/client/router";
import { BsList } from "react-icons/bs"

const NavItem = ({ to, router, children, ...rest } : TextProps) => {

    return (
        <Link href={to} onClick={(e) => {
            e.preventDefault()
            router.push(to)
        }} my={"auto"}>
            <Text
            fontWeight="semibold"
            textTransform="uppercase"
            fontSize="25px"
            pr={5}
            {...rest}
            >{children}</Text>
        </Link>
    )

}

export default function Navigation({ isMobile }) {

    const router = useRouter()

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            {!isMobile && (
                <Flex minH="60px" bg="#131315" px={5} justifyContent="space-between">
                    <HStack>
                        <NavItem router={router} to={"/"}>Home</NavItem>
                        <NavItem router={router} to={"/commands"}>Commands</NavItem>
                        <NavItem router={router} to={"/faq"}>FAQ</NavItem>
                    </HStack>
        
                    <Link my={"auto"} color="#f43f5e" fontSize={"25px"} fontWeight="semibold" href="https://discord.com/oauth2/authorize?client_id=735918313921708053&permissions=268823799&scope=bot" isExternal>INVITE FEESH</Link>
    
                </Flex>
            )}

            {isMobile && (
                <Flex minH="60px" bg="#131315" px={5}>
                    <IconButton icon={<BsList />}  my={"auto"} ml="auto" onClick={onOpen} />
                    <Drawer isOpen={isOpen} onClose={onClose}>
                        <DrawerOverlay />
                        <DrawerContent bg="#131315">
                            <DrawerHeader>
                                <DrawerCloseButton />
                            </DrawerHeader>
                            <DrawerBody>
                                <Flex direction="column" justifyContent="center" textAlign="center">
                                    <NavItem router={router} to={"/"}>Home</NavItem>
                                    <NavItem router={router} to={"/commands"}>Commands</NavItem>
                                    <NavItem router={router} to={"/faq"}>FAQ</NavItem>
                                    
                                    <Link my={"auto"} color="#f43f5e" fontSize={"25px"} fontWeight="semibold" href="https://discord.com/oauth2/authorize?client_id=735918313921708053&permissions=268823799&scope=bot" isExternal>INVITE FEESH</Link>
                                </Flex>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Flex>
            )}
        </>
    )
}