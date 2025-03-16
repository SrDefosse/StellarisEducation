import Head from "next/head";
import Navbar from "@/components/layout/Navbar";
import Journey from "@/components/sections/Journey";
import Team from "@/components/sections/Team";
import Faculty from "@/components/sections/Faculty";

export default function About() {
  return (
    <>
      <Head>
        <title>About Stellaris Education - Our Journey, Team & Global Presence</title>
        <meta name="description" content="Learn about Stellaris Education's journey, our team, international faculty and global presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="min-h-screen">
        <Journey />
        <Team />
        <Faculty />
      </main>
    </>
  );
} 