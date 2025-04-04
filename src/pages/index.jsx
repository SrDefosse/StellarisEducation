import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import AcademicProgram from "@/components/sections/AcademicProgram";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CardCTA from "@/components/ui/CardCTA";
import ExperienceStellaris from "@/components/sections/ExperienceStellaris";


export default function Home() {
  return (
    <>
      <Head>
        <title>Stellaris Education - Transforming Education for a Brighter Future</title>
        <meta name="description" content="Stellaris Education is transforming education for a brighter future. Explore our courses and resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar isTransparent />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Hero />
        <Welcome />
        <AcademicProgram />
        <ExperienceStellaris />
        <WhyChooseUs />
        <CardCTA />
      </main>
      <Footer />
    </>
  );
}
