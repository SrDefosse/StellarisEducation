import { motion } from 'framer-motion';
import { FaSearch, FaBook, FaBrain, FaComment, FaBalanceScale, 
         FaGlobeAmericas, FaHeart, FaRocket, FaYinYang, FaUserCog } from 'react-icons/fa';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';
import { PrimaryButton } from '../../ui/Button';

export function LearnerProfileSection() {
  const learnerProfiles = [
    {
      title: "Inquirers",
      description: "We nurture our curiosity, developing skills for inquiry and research. We know how to learn independently and with others. We learn with enthusiasm and sustain our love of learning throughout life.",
      icon: <FaBook size={24} />
    },
    {
      title: "Knowledgeable",
      description: "We develop and use conceptual understanding, exploring knowledge across a range of disciplines. We engage with issues and ideas that have local and global significance.",
      icon: <FaBrain size={24} />
    },
    {
      title: "Thinkers",
      description: "We use critical and creative thinking skills to analyse and take responsible action on complex problems. We exercise initiative in making reasoned, ethical decisions.",
      icon: <FaUserCog size={24} />
    },
    {
      title: "Communicators",
      description: "We express ourselves confidently and creatively in more than one language and in many ways. We collaborate effectively, listening carefully to the perspectives of other individuals and groups.",
      icon: <FaComment size={24} />
    },
    {
      title: "Principled",
      description: "We act with integrity and honesty, with a strong sense of fairness and justice, and with respect for the dignity and rights of people everywhere. We take responsibility for our actions and their consequences.",
      icon: <FaBalanceScale size={24} />
    },
    {
      title: "Open-minded",
      description: "We critically appreciate our own cultures and personal histories, as well as the values and traditions of others. We seek and evaluate a range of points of view, and we are willing to grow from the experience.",
      icon: <FaGlobeAmericas size={24} />
    },
    {
      title: "Caring",
      description: "We show empathy, compassion and respect. We have a commitment to service, and we act to make a positive difference in the lives of others and in the world around us.",
      icon: <FaHeart size={24} />
    },
    {
      title: "Risk-takers",
      description: "We approach uncertainty with forethought and determination; we work independently and cooperatively to explore new ideas and innovative strategies. We are resourceful and resilient in the face of challenges and change.",
      icon: <FaRocket size={24} />
    },
    {
      title: "Balanced",
      description: "We understand the importance of balancing different aspects of our lives—intellectual, physical, and emotional—to achieve well-being for ourselves and others. We recognize our interdependence with other people and with the world in which we live.",
      icon: <FaYinYang size={24} />
    },
    {
      title: "Reflective",
      description: "We thoughtfully consider the world and our own ideas and experience. We work to understand our strengths and weaknesses in order to support our learning and personal development.",
      icon: <FaSearch size={24} />
    }
  ];

  return (
    <section id="learner-profile" className="relative">
      <div className="absolute -top-24" id="learner-profile"></div>

      <MaxWidthWrapper>
        {/* Heading */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-2 text-[#4081DE]">
            The IB Learner Profile
          </h2>
          <motion.div 
            className="h-1 w-24 bg-amber-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
            The IB Learner Profile describes a broad range of human capacities and responsibilities that go beyond academic success. These qualities prepare students to make thoughtful, appropriate choices and to become globally engaged citizens.
          </p>
        </motion.div>

        {/* Learner Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {learnerProfiles.map((profile, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg h-full transition-all duration-300 
                       hover:shadow-2xl hover:scale-[1.02] bg-blue-50 transform-gpu"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: 0.05 * index
              }}
            >
              <div className="h-full flex flex-col">
                <div 
                  className="bg-[#4081DE] p-4 text-white flex items-center justify-between transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold">{profile.title}</h3>
                  <span className="text-white">{profile.icon}</span>
                </div>

                <div 
                  className="p-4 flex-grow flex items-center bg-blue-50"
                >
                  <p className="text-gray-700 leading-relaxed">
                    {profile.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full relative" style={{ paddingBottom: "56.25%" }}> {/* 16:9 Aspect Ratio */}
            <iframe 
              src="https://player.vimeo.com/video/150154406?h=26b8048737" 
              title="IB Learner Profile"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/academics/languageimmersion">
            <PrimaryButton variant="amber">
              Learn about Spanish Immersion
            </PrimaryButton>
          </a>
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
} 