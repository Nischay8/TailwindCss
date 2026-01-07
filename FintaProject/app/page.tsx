import Image from "next/image";
import { Container } from "./components/container";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <div className="[background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)] h-screen relative">
      <div className="max-w-7xl mx-auto absolute inset-0 h-full w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/5 via-neutral-500 to-transparent pointer-events-none z-0"></div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/5 via-neutral-500 to-transparent pointer-events-none z-0"></div>
      </div>
      <Container className="">
        <Navbar />
        <Hero />
      </Container>
      <div className="relative w-full mt-20">
        <div className="h-px w-full absolute index-x-0 bg-linear-to-b from-neutral-300/9 via-neutral-500 to-transparent pointer-events-none z-0"></div>

        <Image
          className="max-w-7xl mx-auto"
          src="/banner.webp"
          alt="banner image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
}
