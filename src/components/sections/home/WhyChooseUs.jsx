import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaGlobeAmericas, FaLanguage, FaUsers, FaClock, FaApple, FaChild } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';
import MaxWidthWrapper from '../../ui/MaxWidthWrapper';

const WhyChooseUs = () => {
  return (
    <>
      <div className="relative h-fit">
        <Features />
      </div>
    </>
  );
};

const Features = () => {
  return (
    <MaxWidthWrapper className="grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2">
      <Copy />
      <Carousel />
    </MaxWidthWrapper>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-16 md:py-24 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-amber-500 px-4 py-2 text-sm uppercase text-white font-semibold">
        Excellence in Early Education
      </span>
      <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold text-[#4081DE]">
        Why Choose Stellaris
      </h2>
      <motion.div 
        className="h-1 w-24 bg-amber-400 rounded-full mb-6"
        initial={{ width: 0 }}
        whileInView={{ width: 96 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <p className="text-lg text-gray-600">
        Our unique approach to Pre-K education for ages 3-5 sets us apart and prepares students for success in a global world.
      </p>
    </div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const features = [
    {
      icon: <FaGlobeAmericas className="text-4xl text-[#4081DE]" />,
      title: "IB Excellence",
      description: "Our IB curriculum fosters international-mindedness and academic excellence through inquiry-based learning, developing globally aware and culturally competent students."
    },
    {
      icon: <FaLanguage className="text-4xl text-[#4081DE]" />,
      title: "Language Immersion",
      description: "Our Spanish immersion program helps children develop bilingual fluency naturally while building cognitive advantages that last a lifetime."
    },
    {
      icon: <FaUsers className="text-4xl text-[#4081DE]" />,
      title: "Small Class Sizes",
      description: "Our low student-to-teacher ratio ensures personalized attention and support for each child's unique learning journey."
    },
    {
      icon: <FaClock className="text-4xl text-[#4081DE]" />,
      title: "Extended Day Programs",
      description: "Our flexible before and after school care options support working families with enriching activities that extend the learning day."
    },
    {
      icon: <FaApple className="text-4xl text-[#4081DE]" />,
      title: "Clean Healthy Lifestyle",
      description: "We promote healthy eating habits with nutritious meals and snacks, teaching children about food choices that support their growth and development."
    },
    {
      icon: <FaChild className="text-4xl text-[#4081DE]" />,
      title: "Holistic Development",
      description: "We nurture the whole child—intellectual, physical, emotional, and social aspects of development—preparing them for lifelong success."
    }
  ];

  return (
    <div className="relative w-full">
      <Gradient />
      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-8">
        {features.map((feature, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={features.length}
            feature={feature}
          />
        ))}
      </div>
      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, feature }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="w-full shrink-0 rounded-2xl bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {feature.icon}
          <h3 className="text-2xl font-semibold text-[#4081DE]">{feature.title}</h3>
        </div>
        <p className="text-lg text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-transparent to-transparent/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

export default WhyChooseUs;
