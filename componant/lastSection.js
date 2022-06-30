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
      image: "",
    },
    {
      title: LastSectionText[language].section1,
      desc: LastSectionText[language].sectionDesc1,
      image: "",
    },
    {
      title: LastSectionText[language].section2,
      desc: LastSectionText[language].sectionDesc2,
      image: "",
    },
    {
      title: LastSectionText[language].section3,
      desc: LastSectionText[language].sectionDesc3,
      image: "",
    },
  ];

  return (
    <VStack
      w="100%"
      alignItems="unset"
      w={["95%", "95%", "80%", "60%", "60%"]}
      py="80px"
    >
      <Flex alignItems={"center"}>
        <Text
          fontWeight={"bold"}
          color={"#EF518B"}
          fontSize={["35px", "48px"]}
          pr="20px"
        >
          Read Our More
        </Text>
        <Flex
          h="1px"
          flex={1}
          bgImage={"linear-gradient(to right, #EF518B, #fff)"}
        />
      </Flex>
      <SimpleGrid columns={[2, 4]} gap={4}>
        {ReaMore.map((el, ind) => {
          return (
            <VStack key={ind} alignItems={"unset"}>
              <AspectRatio ratio={4 / 3}>
                <Image src={el.image} borderRadius={"5px"} />
              </AspectRatio>
              <Text fontWeight={"bold"} fontSize={"sm"}>
                {el.title}
              </Text>
              <Text noOfLines={2} fontSize={"xs"}>
                {el.desc}
              </Text>
            </VStack>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
