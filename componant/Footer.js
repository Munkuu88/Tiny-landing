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
  useToast,
} from "@chakra-ui/react";
import { FooterText } from "../texts/footer";
import { useLanguage } from "../context/languageContext";
import axios from "axios";
import { useState } from "react";

const Item = ({ data }) => {
  return (
    <a href={`#${data.link}`} key={data.text}>
      <Text fontSize={"sm"}>{data.text}</Text>
    </a>
  );
};

export default function Footer() {
  const { language, setLanguage } = useLanguage();
  const [email, setEmail] = useState("");
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const Handler = () => {
    setIsLoading(true);
    axios
      .post("https://micro.nft.mn/nft1004/operations/subscribeEmail", {
        email: email,
      })
      .then((res) => {
        setEmail("");
        setIsLoading(false);
        toast({
          title: res.data.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        setEmail("");
        setIsLoading(false);
        toast({
          title: "Амжилтгүй боллоо.",
          description: "Email буруу эсвэл бүртгүүлсэн байна.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const Items = [
    { text: FooterText[language].aboutUs, link: "About" },
    { text: FooterText[language].token, link: "Token" },
    { text: FooterText[language].how, link: "how-to-play" },
    { text: FooterText[language].road, link: "Roadmap" },
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
            <VStack alignItems={"unset"} spacing={("20px", "10px")}>
              {Items.map((el) => {
                return <Item data={el} key={el.text} />;
              })}
            </VStack>
          </Flex>
        </Flex>
        <GridItem pt={[0, 0, 10, 0, 0]} maxW={"400px"}>
          <Flex alignItems={"center"} w="100%" flexDir="column">
            <Box w="100%">
              <Text fontSize={"lg"} fontWeight="bold" pb="10px">
                {FooterText[language].SubscribeTo}
              </Text>
              <HStack>
                <Input
                  placeholder={FooterText[language].YourEmail}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Button
                  bg="#EF518B"
                  _hover={{ width: "#EF518B" }}
                  onClick={Handler}
                  isLoading={isLoading}
                >
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
