import { VStack, Image, HStack, Text } from "@chakra-ui/react";
import { Section4 } from "../texts/section4";
import { useLanguage } from "../context/languageContext";

const Component = ({ data }) => {
  return (
    <HStack
      spacing={["0px", "0px", "0px", "60px", "60px"]}
      py={["20px", "20px", "50px", "60px", "60px"]}
      px={["20px", "20px", "50px", "150px", "150px"]}
      w="100%"
      flexDir={data.flex}
      border="1px solid #EF518B"
      borderRadius={"20px"}
      display={["block", "block", "block", "flex", "flex"]}
    >
      <Image w={["100%", "100%", "100%", "50%", "50%"]} src={data.image} />
      <VStack
        w={["100%", "100%", "100%", "50%", "50%"]}
        pt={["20px", "20px", "20px", "0px", "0px"]}
      >
        <Text fontSize={["20px", "32px"]} fontWeight="bold">
          {data.title}
        </Text>
        <Text>{data.desc}</Text>
      </VStack>
    </HStack>
  );
};

export default function FourthSection() {
  const { language, setLanguage } = useLanguage();

  const Assets = [
    {
      flex: "",
      title: Section4[language].title,
      desc: Section4[language].desc,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/991598788563173376/Frame_21239.png",
    },
    {
      flex: "row-reverse",
      title: Section4[language].title1,
      desc: Section4[language].desc1,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/991598957681713253/Frame_21238.png",
    },
    {
      flex: "",
      title: Section4[language].title2,
      desc: Section4[language].desc2,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/991599053974552636/Frame_21237.png",
    },
    {
      flex: "row-reverse",
      title: Section4[language].title3,
      desc: Section4[language].desc3,
      image:
        "https://media.discordapp.net/attachments/910331361179619370/991599158450462841/Frame_21236.png",
    },
  ];

  return (
    <VStack py="80px" spacing={"50px"}>
      {Assets.map((el) => {
        return <Component key={el.image} data={el} />;
      })}
    </VStack>
  );
}
