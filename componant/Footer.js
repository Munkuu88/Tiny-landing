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
    <VStack alignItems={"unset"} spacing={("20px", "10px")}>
      {data.list.map((el) => {
        return (
          <a href={`#${el.link}`} key={el.text}>
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
      list: [
        { text: FooterText[language].aboutUs, link: "About" },
        { text: FooterText[language].token, link: "Token" },
        { text: FooterText[language].how, link: "how-to-play" },
        { text: FooterText[language].road, link: "Roadmap" },
      ],
    },
  ];

  return (
    <Flex justifyContent={"center"} bg="#7851A2" py="80px">
      <SimpleGrid
        columns={[1, 1, 2, 2, 2]}
        rowGap={[8, 0]}
        w={["95%", "95%", "80%", "70%", "70%"]}
        color={"white"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <VStack>
            <Image
              w={["80%", "100%"]}
              src="https://media.discordapp.net/attachments/910331361179619370/991907304452669470/Frame.png"
            />
            <HStack>
              <Text>Powered by: </Text>
              <Image src="https://media.discordapp.net/attachments/910331361179619370/993814683570159696/Group_21179.png" />
              <Text>elfc</Text>
            </HStack>
          </VStack>
          <Flex pl="40px" justifyContent={"space-evenly"} display={"flex"}>
            {Items.map((el) => {
              return <Item data={el} key={el.title} />;
            })}
          </Flex>
        </Flex>
        <GridItem pt={[0, 0, 10, 0, 0]} maxW={"400px"}>
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
