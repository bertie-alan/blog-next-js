import { Box, Container, HStack, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      width={"100%"}
      bgColor={"white"}
      position={"fixed"}
      height={90}
      maxHeight={"90px"}
      boxShadow={"md"}
      letterSpacing={"wide"}
    >
      <HStack opacity={0.8} fontSize={"18px"} lineHeight={"80px"}>
        <Box ml={150}>HOME</Box>
        <Box ml={900}>ARTICLES</Box>
        <Box ml={50}>ABOUT US</Box>
      </HStack>
    </Box>
  );
}
