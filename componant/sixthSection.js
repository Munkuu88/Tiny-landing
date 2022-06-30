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
          h={["30vh", "30vh", "30vh", "50vh", "50vh"]}
          w={["100%", "80%"]}
          bg="black"
        ></Box>
      </Flex>
    </Box>
  );
}
