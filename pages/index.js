import { Box, Flex, VStack, HStack, Button } from "@chakra-ui/react";
import FirstSection from "../componant/firstSection";
import SecondSection from "../componant/secondSection";
import ThirdSection from "../componant/thirdSection";
import FourthSection from "../componant/fourthSection";

export default function Home() {
  return (
    <Flex flexDirection={"column"} alignItems="center" className="container">
      <FirstSection />
      <SecondSection />
      <Box as="section" w={["95%", "95%", "80%", "60%", "60%"]} id="#Token">
        <ThirdSection />
        <FourthSection />
      </Box>
    </Flex>
  );
}
