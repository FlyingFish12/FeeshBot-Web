import { Image } from "@chakra-ui/image";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import BaseLayout from "../components/BaseLayout";

import lobster from "../styles/Lobster.module.css"
import shine from "../styles/shine.module.css"

const ShowcaseElem = ({ title, description, image, isReversed}) => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <>
      {isReversed && (
        <>
        <Image display={isMobile ? "none" : ""} draggable="false" src={image} alt={`${title}-image`} rounded="md" transform={isReversed ? "rotate(-5deg)" : "rotate(5deg)"} transition="transform 1s ease-in-out" _hover={{
          transform: "rotate(0deg)"
        }}/>

        <Box mx={5}>
        <Text fontWeight="bold" fontSize="30px">{title}</Text>
        <Divider bg="white" />
        <Text maxW="300px">{description}</Text>
        </Box>
        </>
      )}

      {!isReversed && (
        <>
        <Box mx={5}>
        <Text fontWeight="bold" fontSize="30px">{title}</Text>
        <Divider bg="white" />
        <Text maxW="300px">{description}</Text>
        </Box>

        <Image display={isMobile ? "none" : ""} draggable="false"  src={image} alt={`${title}-image`} rounded="md" transform={isReversed ? "rotate(-5deg)" : "rotate(5deg)"} transition="transform 1s ease-in-out" _hover={{
          transform: "rotate(0deg)"
        }}/>
        </>
      )}
    </>
  )
}

export default function Index() {

  return (
    <BaseLayout pageTitle={"Home"}>

      <Text className={`${lobster.lobster} ${shine.gradientText}`} fontSize="60px" textAlign="center" color="#da0059" mt={5}>FeeshBot</Text>
      <Text textAlign="center"><em>A fun, exciting, and unique bot for your Discord server!</em></Text>

      <Flex alignItems="center" my="20px" direction="column">

        <Flex wrap={"wrap-reverse"} my={5}>
          <ShowcaseElem title={"Fun Commands"} description={"FeeshBot has many fun games such as it's trivia game and its coin flip!"} image={"/content/Trivia.jpg"} />
        </Flex>

        <Flex wrap={"wrap"} mt="100px">
          <ShowcaseElem title={"Useful Utility"} description={"You can see lots of information about a server of user with FeeshBot's variety of utility commands."} image={"/content/ServerInfo.jpg"} isReversed/>
        </Flex>

        <Flex wrap={"wrap-reverse"} mt="100px">
          <ShowcaseElem title={"Moderation"} description={"There are many commands such as kick and ban so you can punish those pesky people."} image={"/content/Ban.jpg"} />
        </Flex>

      </Flex>

    </BaseLayout>
  )
}