import Hero from "../components/sections/home/Hero";
import Welcome from "../components/sections/home/Welcome";
import AcademicProgram from "../components/sections/home/AcademicProgram";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import CardCTA from "../components/sections/home/CardCTA";
import ExperienceStellaris from "../components/sections/home/ExperienceStellaris";


export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <Hero />
        <Welcome />
        <AcademicProgram />
        <ExperienceStellaris />
        <WhyChooseUs />
        <CardCTA />
      </main>
    </>
  );
} 