import { Box, Flex } from "@chakra-ui/react";
import FirstSection from "../componant/firstSection";
import SecondSection from "../componant/secondSection";
import ThirdSection from "../componant/thirdSection";
import FourthSection from "../componant/fourthSection";
import FivethSection from "../componant/fivethSection";
import SixthSection from "../componant/sixthSection";
import LastSection from "../componant/lastSection";

export default function Home() {
  return (
    <Flex flexDirection={"column"} alignItems="center" className="container">
      <FirstSection />
      <SecondSection />
      <Box as="section" w={["95%", "95%", "80%", "60%", "60%"]} id="Token">
        <ThirdSection />
        <FourthSection />
      </Box>
      <SixthSection />
      {/* <FivethSection /> */}
      <LastSection />
    </Flex>
  );
}
