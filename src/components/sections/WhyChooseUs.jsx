import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaGlobeAmericas, FaLanguage, FaUsers, FaClock, FaApple, FaChild } from 'react-icons/fa';
import { IoPeople } from 'react-icons/io5';

const WhyChooseUs = () => {
  return (
    <>
      <div className="relative h-fit bg-gray-50">
        <Features />
      </div>
      <div className="h-[50vh] bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:px-6 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  return (
    <div className="flex h-fit w-full flex-col justify-center py-16 md:py-24 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-[#3967a9] px-4 py-2 text-sm uppercase text-white font-semibold">
        Excellence in Early Education
      </span>
      <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold text-[#303444]">
        Why Choose Stellaris
      </h2>
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
      icon: <FaGlobeAmericas className="text-4xl text-[#3967a9]" />,
      title: "IB & Global Perspectives",
      description: "Our IB curriculum develops international-mindedness and cultural awareness through inquiry-based learning and a global approach to education."
    },
    {
      icon: <FaLanguage className="text-4xl text-[#3967a9]" />,
      title: "Language Immersion",
      description: "Our Spanish immersion program helps children develop bilingual fluency naturally while building cognitive advantages that last a lifetime."
    },
    {
      icon: <FaUsers className="text-4xl text-[#3967a9]" />,
      title: "Small Class Sizes",
      description: "Our low student-to-teacher ratio ensures personalized attention and support for each child's unique learning journey."
    },
    {
      icon: <FaClock className="text-4xl text-[#3967a9]" />,
      title: "Extended Day Programs",
      description: "Our flexible before and after school care options support working families with enriching activities that extend the learning day."
    },
    {
      icon: <FaApple className="text-4xl text-[#3967a9]" />,
      title: "Clean Healthy Eating",
      description: "We promote healthy eating habits with nutritious meals and snacks, teaching children about food choices that support their growth and development."
    },
    {
      icon: <FaChild className="text-4xl text-[#3967a9]" />,
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
          <h3 className="text-2xl font-semibold text-[#303444]">{feature.title}</h3>
        </div>
        <p className="text-lg text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-gray-50 to-gray-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

export default WhyChooseUs;
