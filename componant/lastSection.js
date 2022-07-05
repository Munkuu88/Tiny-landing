import {
  HStack,
  VStack,
  Flex,
  Box,
  Text,
  SimpleGrid,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { LastSectionText } from "../texts/lastSection";
import { useLanguage } from "../context/languageContext";

export default function LastSection() {
  const { language } = useLanguage();

  const ReaMore = [
    {
      title: LastSectionText[language].section,
      desc: LastSectionText[language].sectionDesc,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993827480538460160/Screen_Shot_2022-07-05_at_18.35.22.png",
      link: "https://ikon.mn/n/2l1i",
    },
    {
      title: LastSectionText[language].section1,
      desc: LastSectionText[language].sectionDesc1,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993827185930551326/image00001.png",
      link: "https://www.youtube.com/watch?v=KphwW6UZOSU",
    },
    {
      title: LastSectionText[language].section2,
      desc: LastSectionText[language].sectionDesc2,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/993827120038035517/Artboard_1_copy_3.png",
      link: "https://www.instagram.com/p/Cfa5XGLMz8W/",
    },
    {
      title: LastSectionText[language].section3,
      desc: LastSectionText[language].sectionDesc3,
      image:
        "https://cdn.discordapp.com/attachments/910331361179619370/993827144004284486/Artboard_2.png",
      link: "https://www.instagram.com/p/CeAXzr7P2g-/?utm_source=ig_web_copy_link",
    },
  ];

  return (
    <VStack
      w="100%"
      alignItems="unset"
      w={["95%", "95%", "80%", "60%", "60%"]}
      py="80px"
    >
      <Flex alignItems={"center"} mb={["50px", "0px"]}>
        <Text
          fontWeight={"bold"}
          color={"#EF518B"}
          fontSize={["35px", "48px"]}
          pr={["10px", "20px"]}
        >
          Read Our More
        </Text>
        <Box
          h="1px"
          flex={1}
          bgImage={"linear-gradient(to right, #EF518B, #fff)"}
        />
      </Flex>
      <SimpleGrid columns={[2, 4]} gap={4}>
        {ReaMore.map((el, ind) => {
          return (
            <a key={el.image} href={el.link} target={"_blank"}>
              <VStack alignItems={"unset"}>
                <AspectRatio ratio={4 / 3}>
                  <Image src={el.image} borderRadius={"5px"} />
                </AspectRatio>
                <Text noOfLines={1} fontWeight={"bold"} fontSize={"sm"}>
                  {el.title}
                </Text>
                <Text noOfLines={2} fontSize={"xs"}>
                  {el.desc}
                </Text>
              </VStack>
            </a>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
