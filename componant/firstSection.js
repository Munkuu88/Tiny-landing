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
    <>
      <Image
        src="https://media.discordapp.net/attachments/910331361179619370/993817869043367986/Group_21514.png?width=2592&height=1350"
        zIndex={0}
        pos={["static", "static", "static", "absolute", "absolute"]}
      />
      <Box
        as="section"
        w={["95%", "95%", "80%", "60%", "60%"]}
        id="About"
        mb={["0px", "0px", "0px", "300px", "400px"]}
      >
        <Flex py={["75px", "150px"]}>
          <VStack
            w={["100%", "100%", "100%", "50%", "50%"]}
            alignItems={"unset"}
            spacing="30px"
          >
            <Text
              fontWeight={"600"}
              fontSize={["20px", "38px"]}
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
                zIndex={1}
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
    </>
  );
}
