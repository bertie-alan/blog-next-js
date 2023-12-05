import HomeBackground from "@/components/HomeBackground";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Homepage",
  description: "homepage website blog",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeBackground />
    </>
  );
}
