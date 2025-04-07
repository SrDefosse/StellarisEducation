import AboutHero from '../../components/sections/aboutUs/AboutHero';
import Faculty from '../../components/sections/aboutUs/Faculty';
import Journey from '../../components/sections/aboutUs/Journey';
import Locations from '../../components/sections/aboutUs/Locations';
import OurStory from '../../components/sections/aboutUs/OurStory';
import Team from '../../components/sections/aboutUs/Team';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <AboutHero />
      {/* Wrap sections that need constrained width */} 
        <Journey />
        <OurStory />
        <Team />
        <Faculty />
        <Locations />
      {/* Add other sections if they exist */}
    </div>
  );
};

export default AboutUs; 