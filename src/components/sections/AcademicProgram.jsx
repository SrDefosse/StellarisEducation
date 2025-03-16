import Image from 'next/image';
import { PrimaryButton, SecondaryButton } from '../ui/Button';

const AcademicProgram = () => {
  const programs = [
    {
      id: 1,
      title: "PreK Offering",
      description: "Our PreK program for ages 3-5 provides a nurturing environment where children develop foundational skills through play-based learning and exploration.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/PreK_Offering.jpg"
    },
    {
      id: 2,
      title: "IB Program",
      description: "Our curriculum follows the inquiry-based IB framework, encouraging students to take ownership of their learning through exploration and discovery.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/IB_Program.jpg"
    },
    {
      id: 3,
      title: "Spanish Immersion",
      description: "Students are immersed in Spanish language environment, developing fluency naturally while learning academic content in both languages.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/Spanish_Immersion.jpg"
    },
    {
      id: 4,
      title: "International Teachers",
      description: "Our diverse faculty brings authentic cultural experiences and global perspectives to the classroom, enriching the educational journey.",
      size: "col-span-12 md:col-span-6 lg:col-span-3",
      image: "/International_Teacher.jpg"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#303444] mb-4">Our Academic Program</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover the pillars of our curriculum designed to nurture global citizens with a love for learning.</p>
        </div>
        
        {/* Grid layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12">
          {programs.map((program) => (
            <div 
              key={program.id}
              className={`${program.size} bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl`}
            >
              <div className="h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden group">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-semibold text-xl mb-3">{program.title}</h3>
                  <p className="text-gray-700 mb-6">{program.description}</p>
                  
                  <div className="mt-auto">
                    <SecondaryButton>Learn More</SecondaryButton>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call-to-action */}
        <div className="text-center">
          <PrimaryButton>
            <span>Explore Our Full Curriculum</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AcademicProgram; 