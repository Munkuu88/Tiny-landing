import { VStack, Image, Text, HStack } from "@chakra-ui/react";
import { Section3 } from "../texts/section3";
import { useLanguage } from "../context/languageContext";

export default function ThirdSection() {
  const { language, setLanguage } = useLanguage();

  return (
    <VStack spacing={"30px"} textAlign="center" py="80px">
      <Image src="https://media.discordapp.net/attachments/910331361179619370/991595529601568848/Group_21343.png" />
      <HStack spacing={"30px"}>
        <Text>{Section3[language].section}</Text>
        <Text fontWeight={"semibold"} fontSize="63px">
          ELFC
        </Text>
      </HStack>
      <Text w={["95%", "500px"]}>{Section3[language].section1}</Text>
    </VStack>
  );
}
