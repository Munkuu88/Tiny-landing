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
        return (
          <a href={el.link} key={el.text}>
            <Text fontSize={"sm"}>{el.text}</Text>
          </a>
        );
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
        { text: FooterText[language].AboutUs, link: "1" },
        { text: FooterText[language].Team, link: "2" },
        { text: FooterText[language].WhatWeDo, link: "3" },
        { text: FooterText[language].Contact, link: "4" },
      ],
    },
    {
      title: FooterText[language].More,
      list: [
        { text: FooterText[language].Events, link: "" },
        { text: FooterText[language].Projects, link: "" },
        { text: FooterText[language].Donate, link: "" },
        { text: FooterText[language].Blog, link: "" },
      ],
    },
    {
      title: FooterText[language].Connect,
      list: [
        { text: FooterText[language].Facebook, link: "" },
        { text: FooterText[language].Instagram, link: "" },
        { text: FooterText[language].Twitter, link: "" },
        { text: FooterText[language].Linkdin, link: "" },
      ],
    },
  ];

  return (
    <Flex justifyContent={"center"} bg="#7851A2" py="80px">
      <SimpleGrid
        columns={[1, 1, 4, 4, 4]}
        rowGap={[8, 0]}
        w={["95%", "95%", "80%", "70%", "70%"]}
        color={"white"}
      >
        <Flex justifyContent={"center"}>
          <Image src="https://media.discordapp.net/attachments/910331361179619370/991907304452669470/Frame.png" />
        </Flex>
        <GridItem colSpan={[2, 2, 3, 2, 2]}>
          <Flex justifyContent={"space-evenly"}>
            {Items.map((el) => {
              return <Item data={el} key={el.title} />;
            })}
          </Flex>
        </GridItem>
        <GridItem colSpan={[1, 1, 2, 1, 1]} pt={[0, 0, 10, 0, 0]}>
          <Flex alignItems={"center"} w="100%" flexDir="column">
            <Box w="100%">
              <Text fontSize={"lg"} fontWeight="bold" pb="10px">
                {FooterText[language].SubscribeTo}
              </Text>
              <HStack>
                <Input placeholder={FooterText[language].YourEmail} />
                <Button bg="#EF518B" _hover={{ width: "#EF518B" }}>
                  {FooterText[language].Subscribe}
                </Button>
              </HStack>
            </Box>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
}
