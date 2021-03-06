import { Box, Flex, Text } from "@chakra-ui/react";

export default function SixthSection() {
  return (
    <Box
      as="section"
      w={["95%", "95%", "90%", "60%", "60%"]}
      id="how-to-play"
      py="80px"
    >
      <Flex alignItems={"center"} flexDir="column">
        <Text
          pb="80px"
          fontWeight={"bold"}
          color={"#EF518B"}
          fontSize={["35px", "48px"]}
        >
          Meet Tiny
        </Text>
        <Box
          pos={"relative"}
          overflow={"hidden"}
          h={["30vh", "30vh", "30vh", "50vh", "50vh"]}
          w={["100%", "80%"]}
        >
          <Box
            as="iframe"
            pos={"absolute"}
            left={0}
            top={0}
            w={"100%"}
            h={["30vh", "30vh", "30vh", "50vh", "50vh"]}
            src="https://www.youtube.com/embed/KphwW6UZOSU"
            border="none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="ThunderZ Erka - Niseerei (Official Music Video).mp4"
            frameBorder="0"
          ></Box>
        </Box>
      </Flex>
    </Box>
  );
}
