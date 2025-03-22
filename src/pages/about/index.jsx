import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Journey from "@/components/sections/aboutUs/Journey";
import Team from "@/components/sections/aboutUs/Team";
import Faculty from "@/components/sections/aboutUs/Faculty";
import Locations from "@/components/sections/aboutUs/Locations";

export default function About() {
  return (
    <>
      <Head>
        <title>About Stellaris Education - Our Journey, Team & Global Presence</title>
        <meta name="description" content="Learn about Stellaris Education's journey, our team, international faculty and global presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Journey />
        <Team />
        <Faculty />
        <Locations />
      </main>
      <Footer />
    </>
  );
} 