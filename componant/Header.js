import {
  Flex,
  HStack,
  Text,
  Icon,
  Box,
  Drawer,
  Image,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaDiscord, FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useLanguage } from "../context/languageContext";
import { languages } from "../context/languageContext";
import React from "react";

const Pages = [
  { text: "About", link: "About" },
  { text: "Token", link: "Token" },
  { text: "Meet tiny", link: "how-to-play" },
  // { text: "Roadmap", link: "Roadmap" },
];

const Icons = [
  { icon: FaDiscord, link: "https://discord.com/invite/PHKGAKUA" },
  { icon: FaFacebookSquare, link: "https://www.facebook.com/Tiny.Learnapp/" },
  { icon: FaInstagram, link: "https://www.instagram.com/tiny.learnapp/" },
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
        zIndex={100}
        bg={"#7851A2"}
        justifyContent={"center"}
        display={["none", "none", "none", "flex", "fixed"]}
        pos="fixed"
        w="100%"
        top="0"
      >
        <Box href="/" pos={"absolute"} as="a">
          <Image src="https://media.discordapp.net/attachments/910331361179619370/991907304452669470/Frame.png" />
        </Box>
        <Flex
          justifyContent={"space-between"}
          w={["60%"]}
          py="16px"
          alignItems={"center"}
        >
          <HStack spacing={"20px"}>
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
            <a
              target={"_blank"}
              href="https://tomujin-digital.gitbook.io/welcome-to-gitbook/"
            >
              <Text
                color={"white"}
                cursor="pointer"
                borderRadius={"8px"}
                p="6px"
                border="1px solid white"
              >
                Whitepaper
              </Text>
            </a>
            <HStack>
              {Icons.map((el) => {
                return (
                  <Box key={el.link}>
                    <a href={el.link} target={"_blank"}>
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
        zIndex={100}
        justifyContent="center"
        bg={"#7851A2"}
        display={["flex", "flex", "flex", "none", "none"]}
        pos="fixed"
        top="0"
        w="100%"
      >
        <Flex justifyContent="space-between" py="10px" w="95%">
          <Image
            w="15%"
            src="https://media.discordapp.net/attachments/910331361179619370/992270383522787388/Asset_7150x.png"
          />
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
      <DrawerContent bg={"#7851A2"} color={"white"}>
        <DrawerCloseButton />
        <DrawerHeader>Tiny learn application</DrawerHeader>
        <DrawerBody>
          <VStack
            alignItems={"unset"}
            spacing={"20px"}
            fontWeight={"bold"}
            fontSize={"lg"}
          >
            {Pages.map((el) => {
              return (
                <a href={`#${el.link}`} key={el.link}>
                  <Text fontSize={"14px"} cursor="pointer" onClick={onClose}>
                    {el.text}
                  </Text>
                </a>
              );
            })}
            <a
              target={"_blank"}
              href="https://tomujin-digital.gitbook.io/welcome-to-gitbook/"
            >
              <Text fontSize={"14px"} cursor="pointer">
                Whitepaper
              </Text>
            </a>
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
