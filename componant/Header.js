import {
  Flex,
  HStack,
  Text,
  Icon,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useLanguage } from "../context/languageContext";
import { languages } from "../context/languageContext";
import React from "react";

const Pages = [
  { text: "About", link: "About" },
  { text: "Token", link: "Token" },
  { text: "How to play", link: "how-to-play" },
  { text: "Roadmap", link: "" },
];

const Icons = [
  { icon: FaDiscord, link: "1" },
  { icon: FaTwitter, link: "2" },
  { icon: FaInstagram, link: "3" },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toggleTheme = () => {
    setLanguage(language === languages.mn ? languages.en : languages.mn);
  };

  return (
    <>
      <Flex
        bg={"#7851A2"}
        justifyContent={"center"}
        display={["none", "none", "none", "flex", "fixed"]}
        pos="fixed"
        w="100%"
        top="0"
      >
        <Flex
          justifyContent={"space-between"}
          w={["60%"]}
          py="16px"
          alignItems={"center"}
        >
          <HStack>
            {Pages.map((el) => {
              return (
                <a href={`#${el.link}`} key={el.link}>
                  <Text fontSize={"14px"} color={"white"} cursor="pointer">
                    {el.text}
                  </Text>
                </a>
              );
            })}
          </HStack>
          <HStack spacing={"20px"}>
            {/* <a target={"_blank"} href=""> */}
            <Text
              onClick={toggleTheme}
              color={"white"}
              cursor="pointer"
              borderRadius={"8px"}
              p="6px"
              border="1px solid white"
            >
              Whitepaper
            </Text>
            {/* </a> */}
            <HStack>
              {Icons.map((el) => {
                return (
                  <Box key={el.link}>
                    <a target={"_blank"}>
                      <Icon
                        cursor={"pointer"}
                        boxSize={"22px"}
                        fill="white"
                        as={el.icon}
                      />
                    </a>
                  </Box>
                );
              })}
            </HStack>
          </HStack>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        bg={"#7851A2"}
        display={["flex", "flex", "flex", "none", "none"]}
        pos="fixed"
        top="0"
        w="100%"
      >
        <Flex justifyContent="space-between" py="10px" w="95%">
          <Text color="white">Tiny</Text>
          <Icon as={FiMenu} boxSize="30px" color="white" onClick={onOpen} />
          <DrawerMenu
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            Pages={Pages}
          />
        </Flex>
      </Flex>
    </>
  );
}

const DrawerMenu = ({ isOpen, onOpen, onClose, Pages }) => {
  const btnRef = React.useRef();
  return (
    <Drawer
      size="full"
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Tiny learn application</DrawerHeader>
        <DrawerBody>
          {Pages.map((el) => {
            return (
              <a href={`#${el.link}`} key={el.link}>
                <Text fontSize={"14px"} cursor="pointer" onClick={onClose}>
                  {el.text}
                </Text>
              </a>
            );
          })}
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
