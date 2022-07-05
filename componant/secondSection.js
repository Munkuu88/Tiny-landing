import { VStack, Text, Image, Box } from "@chakra-ui/react";
import { useLanguage } from "../context/languageContext";
import { Section2 } from "../texts/section2";

export default function SecondSection() {
  const { language, setLanguage } = useLanguage();

  return (
    <Box as="section" w={["95%", "95%", "80%", "60%", "60%"]} id="About">
      <VStack id="#Token" textAlign={"center"} py="80px" spacing={"40px"}>
        <Text
          fontWeight={"600"}
          fontSize={["20px", "38px"]}
          lineHeight={["30px", "46px"]}
          w={["100%", "640px"]}
        >
          {Section2[language].section}
        </Text>
        <Text w={["100%", "500px"]}>{Section2[language].section1}</Text>
        <Image src="https://media.discordapp.net/attachments/910331361179619370/991594740879474718/Frame_21240.png" />
      </VStack>
    </Box>
  );
}
