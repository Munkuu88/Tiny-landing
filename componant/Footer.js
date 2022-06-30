import {
  Button,
  SimpleGrid,
  VStack,
  Text,
  Image,
  Flex,
  GridItem,
  HStack,
  Input,
  Box,
} from "@chakra-ui/react";
import { FooterText } from "../texts/footer";
import { useLanguage } from "../context/languageContext";

const Item = ({ data }) => {
  return (
    <VStack alignItems={"unset"}>
      <Text fontWeight={"bold"}>{data.title}</Text>
      {data.list.map((el) => {
        return <Text fontSize={"sm"}>{el}</Text>;
      })}
    </VStack>
  );
};

export default function Footer() {
  const { language, setLanguage } = useLanguage();

  const Items = [
    {
      title: FooterText[language].OurTeam,
      list: [
        FooterText[language].AboutUs,
        FooterText[language].Team,
        FooterText[language].WhatWeDo,
        FooterText[language].Contact,
      ],
    },
    {
      title: FooterText[language].More,
      list: [
        FooterText[language].Projects,
        FooterText[language].Events,
        FooterText[language].Donate,
        FooterText[language].Blog,
      ],
    },
    {
      title: FooterText[language].Connect,
      list: [
        FooterText[language].Facebook,
        FooterText[language].Instagram,
        FooterText[language].Twitter,
        FooterText[language].Linkdin,
      ],
    },
  ];

  return (
    <Flex justifyContent={"center"} bg="#7851A2" py="80px">
      <SimpleGrid
        columns={3}
        w={["95%", "95%", "80%", "60%", "60%"]}
        color={"white"}
      >
        <Flex justifyContent={"center"}>
          <Image src="https://media.discordapp.net/attachments/910331361179619370/991907304452669470/Frame.png" />
        </Flex>
        <GridItem>
          <Flex justifyContent={"space-between"}>
            {Items.map((el) => {
              return <Item data={el} />;
            })}
          </Flex>
        </GridItem>
        <Flex alignItems={"center"} flexDir="column">
          <Box w="80%">
            <Text fontSize={"lg"} fontWeight="bold" pb="10px">
              {FooterText[language].SubscribeTo}
            </Text>
            <HStack>
              <Input placeholder={FooterText[language].YourEmail} />
              <Button>{FooterText[language].Subscribe}</Button>
            </HStack>
          </Box>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
