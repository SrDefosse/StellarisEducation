import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import AcademicProgram from "@/components/sections/AcademicProgram";
import PYPFeature from "@/components/sections/PYPFeature";
import WhyChooseUs from "@/components/sections/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Head>
        <title>Stellaris Education - Transforming Education for a Brighter Future</title>
        <meta name="description" content="Stellaris Education is transforming education for a brighter future. Explore our courses and resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Welcome />
        <AcademicProgram />
        <PYPFeature/>
        <WhyChooseUs />
      </main>
    </>
  );
}
