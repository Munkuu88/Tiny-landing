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
          How to play
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
            src="https://player.vimeo.com/video/727035996?h=09fc1b06fc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            border="none"
            allow="autoplay; fullscreen; picture-in-picture"
            title="ThunderZ Erka - Niseerei (Official Music Video).mp4"
          ></Box>
        </Box>
      </Flex>
    </Box>
  );
}
