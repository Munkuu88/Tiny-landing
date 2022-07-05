import {
  VStack,
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Flex,
  Text,
} from "@chakra-ui/react";

const Array = [
  {
    title: "Demo Launch",
    list: ["Finalizing MVP", "Beta-testing on Blockchain", "IOS Application"],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894928626024478/Icon_ColorIcon_Gem_l_1.png",
  },
  {
    title: "V1.0 Launch",
    list: [
      "Fully functional game play",
      "NFT marketplace",
      "Play, Learn, Earn mechanism",
    ],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894927803944980/Icon_ColorIcon_Medal02.png",
  },
  {
    title: "IEO at Dubai",
    list: ["Initial Exchange Offering", "Tiny token release", "Global listing"],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894927418081310/Icon_ColorIcon_Chest02_Purple.png",
  },
  {
    title: "Game-as-a-Service",
    list: ["3rd party EdTech projects", "Integration to other dApps"],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894927007027220/Icon_ColorIcon_Leaderboard_1.png",
  },
  {
    title: "Battle studio",
    list: ["Battle game maker for projects", "Assets creator"],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894924167499796/Icon_ColorIcon_Weapon_Battle_s_1.png",
  },
  {
    title: "Tiny Land",
    list: ["Land offering", "Land sales", "Land to govern"],
    image:
      "https://media.discordapp.net/attachments/910331361179619370/991894923752247346/itemicon_eatrh_1.png",
  },
];

const Component = ({ data }) => {
  return (
    <VStack w="100%" spacing={"20px"}>
      <Flex
        justifyContent={"center"}
        alignItems="center"
        border={"1px solid #EF518B"}
        borderRadius="50%"
        boxSize={"100px"}
      >
        <Image src={data.image} w="50%" />
      </Flex>
      <Box
        bg={"#7851A2"}
        color="white"
        fontWeight={"bold"}
        borderRadius="5px"
        fontSize={"sm"}
        p="5px"
      >
        {data.title}
      </Box>
      <VStack w="100%" alignItems={"unset"} pl={["0px", "40px"]}>
        {data.list.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </VStack>
    </VStack>
  );
};

export default function FivethSection() {
  return (
    <Box w={["95%", "95%", "80%", "60%", "60%"]} as="section" id="Roadmap">
      <Flex flexDir={"column"} alignItems="center" py="80px">
        <Text
          pb="80px"
          fontWeight={"bold"}
          color={"#EF518B"}
          fontSize={["35px", "48px"]}
        >
          Roadmap
        </Text>
        <SimpleGrid columns={[2, 2, 3, 3, 3]} gap={[6, 4]} w="100%">
          {Array.map((el) => {
            return (
              <GridItem w="100%" key={el.title}>
                <Component data={el} />
              </GridItem>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
