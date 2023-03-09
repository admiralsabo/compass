import {
  Contact,
  Featuredwork,
  Footer,
  HeroSection,
  HowWeWork,
  LatestBlogs,
  NavBar,
  OurValues,
  WhatWeDo,
} from "@/components";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <WhatWeDo />
      <Featuredwork />
      <HowWeWork />
      <OurValues />
      <Contact />
      <LatestBlogs />
      <Footer />
    </>
  );
}
