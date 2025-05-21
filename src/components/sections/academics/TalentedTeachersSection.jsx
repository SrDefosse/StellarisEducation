import { motion } from 'framer-motion';
import { useState } from 'react';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper'; 

export function TalentedTeachersSection() {
  const teachers = [
    {
      id: 1,
      name: "María González",
      country: "Spain",
      specialization: "Early Childhood",
      bio: "With over 10 years of experience in early childhood education in Barcelona, María brings authentic Spanish language and cultural perspectives to our youngest learners.",
      credentials: "Master's in Early Education, University of Barcelona",
      image: "/images/teacher-placeholder-1.jpg"
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      country: "Mexico",
      specialization: "STEM Education",
      bio: "Carlos integrates hands-on learning approaches from his experience teaching in Mexico City's top international schools, specializing in inquiry-based STEM activities.",
      credentials: "B.S. in Education, Universidad Nacional Autónoma de México",
      image: "/images/teacher-placeholder-2.jpg"
    },
    {
      id: 3,
      name: "Sophie Laurent",
      country: "France",
      specialization: "Arts Integration",
      bio: "Bringing her background in arts education from Paris, Sophie creates engaging activities that develop creativity and cultural expression in multiple languages.",
      credentials: "B.A. in Arts Education, Sorbonne University",
      image: "/images/teacher-placeholder-3.jpg"
    }
  ];

  const [activeTeacher, setActiveTeacher] = useState(null);

  return (
    <section id="talented-teachers" className="relative mb-24">
      <div className="absolute -top-24" id="teachers"></div>
      
      <MaxWidthWrapper>
        {/* Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#4081DE] mb-4">
            Our Talented Teachers
          </h2>
          <div className="h-1 w-32 bg-amber-400 rounded-full mx-auto mb-6" />
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Meet some of our exceptional international educators who bring their unique perspectives 
            and expertise to create a truly global learning environment.
          </p>
        </motion.div>
        
        {/* Interactive Teacher Showcase */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-12 border border-blue-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeTeacher === teacher.id ? 'ring-4 ring-blue-400 shadow-xl scale-105' : 'hover:shadow-md'
                }`}
                onClick={() => setActiveTeacher(teacher.id === activeTeacher ? null : teacher.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="relative h-64 bg-blue-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                      {teacher.name.charAt(0)}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <h3 className="text-white font-bold text-xl">{teacher.name}</h3>
                    <div className="flex items-center">
                      <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">{teacher.country}</span>
                      <span className="ml-2 text-blue-200 text-sm">{teacher.specialization}</span>
                    </div>
                  </div>
                </div>
                
                {activeTeacher === teacher.id && (
                  <motion.div 
                    className="p-4 bg-blue-50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-gray-700 mb-3">{teacher.bio}</p>
                    <p className="text-blue-700 text-sm font-medium">{teacher.credentials}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Statistics */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, staggerChildren: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl font-bold mb-2">12+</h3>
            <p className="text-blue-100">Countries Represented</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl font-bold mb-2">8</h3>
            <p className="text-amber-100">Languages Spoken</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-5xl font-bold mb-2">15+</h3>
            <p className="text-blue-100">Years Average Experience</p>
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 