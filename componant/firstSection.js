import {
  Flex,
  VStack,
  HStack,
  Button,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { useLanguage } from "../context/languageContext";
import { Section1 } from "../texts/section1";

export default function FirstSection() {
  const { language, setLanguage } = useLanguage();

  return (
    <Box as="section" w={["95%", "95%", "80%", "60%", "60%"]} id="About">
      <Flex py={["75px", "150px"]}>
        <VStack
          w={["100%", "100%", "100%", "50%", "50%"]}
          alignItems={"unset"}
          spacing="30px"
        >
          <Flex justifyContent="center">
            <Image
              w="60%"
              src="https://media.discordapp.net/attachments/910331361179619370/991907304452669470/Frame.png"
            />
          </Flex>

          <Text
            fontWeight={"600"}
            fontSize={["25px", "38px"]}
            lineHeight={["30px", "46px"]}
          >
            {Section1[language].section}
          </Text>
          <Text width={"400px"}>{Section1[language].section1}</Text>
          <HStack>
            <Button
              color="white"
              _hover={{ bg: "#7851A2" }}
              bg={"#7851A2"}
              width={"fit-content"}
              fontWeight="bold"
              fontSize={"23px"}
            >
              {Section1[language].section2}
            </Button>
            <Box boxSize={"50px"} pos="relative">
              <Image
                pos={"absolute"}
                right="15px"
                boxSize={"50px"}
                src="https://media.discordapp.net/attachments/910331361179619370/991588885123571754/Icon_ColorIcon_CoinPouch.png"
              />
            </Box>
          </HStack>
        </VStack>
        <Image />
      </Flex>
    </Box>
  );
}
