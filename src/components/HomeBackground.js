import { Box, Image } from "@chakra-ui/react";
import bgHome from "../assets/home-bg.png";

export default function HomeBackground() {
  return (
    <>
      <Image
        width={"100%"}
        height={"100%"}
        objectFit="cover"
        src={bgHome.src}
      />
    </>
  );
}
