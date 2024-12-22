'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { heroSection } from '@/lib/content/hero';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, Wrapper } from '@/components';

import { motion } from 'framer-motion';
import { Code, Database, Server, Layers, ArrowRight } from 'lucide-react';
import TechSlider from '@/components/ui/TechSlider';

const TypingTitle = ({ title }: { title: string }) => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedTitle.length < title.length) {
          setDisplayedTitle(title.slice(0, displayedTitle.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedTitle.length > 0) {
          setDisplayedTitle(title.slice(0, displayedTitle.length - 1));
        } else {
          setIsDeleting(false);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedTitle, isDeleting, title, typingSpeed]);

  return (
    <div className="relative inline-block">
      <span
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold 
        text-transparent bg-clip-text bg-gradient-to-r 
        from-blue-600 via-purple-600 to-pink-600 
        dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 
        leading-tight capitalize"
      >
        {displayedTitle}
      </span>
      <motion.span
        animate={{
          opacity: [0, 1, 0],
          transition: {
            duration: 0.7,
            repeat: Infinity,
          },
        }}
        className="inline-block ml-1 w-2 h-8 bg-accent"
      />
    </div>
  );
};

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;
  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;

  const TechStack = () => {
    const technologies = [
      { icon: <Code className="w-6 h-6 text-blue-500" />, name: 'React' },
      { icon: <Server className="w-6 h-6 text-green-500" />, name: 'Node.js' },
      {
        icon: <Database className="w-6 h-6 text-purple-500" />,
        name: 'MongoDB',
      },
      { icon: <Layers className="w-6 h-6 text-pink-500" />, name: 'Next.js' },
      { icon: <Code className="w-6 h-6 text-teal-500" />, name: 'TypeScript' },
    ];

    return (
      <div className="flex items-center space-x-4 mt-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            transition={{
              delay: getAnimationDelay(6) + index * 0.2,
              duration: 0.5,
              type: 'spring',
              stiffness: 300,
            }}
            className="tooltip group relative cursor-pointer"
            title={tech.name}
          >
            <div className="relative">
              {tech.icon}
              <span
                className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full 
              animate-ping opacity-75"
              ></span>
            </div>
            <span
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
              bg-gray-800 text-white text-xs px-2 py-1 rounded 
              opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 shadow-lg"
            >
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <Wrapper
      id="hero"
      className="relative flex flex-col justify-center min-h-screen overflow-hidden mt-10"
    >
      <div className="relative z-10 max-w-4xl">
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: getAnimationDelay(0) }}
          className="text-sm md:text-base text-accent font-mono mb-4 flex items-center gap-2"
        >
          <span className="w-6 h-0.5 bg-accent"></span>
          {subtitle}
        </motion.p>

        <motion.h1
          className="relative mb-4"
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: getAnimationDelay(1), duration: 0.7 }}
        >
          <TypingTitle title={title} />
        </motion.h1>

        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: getAnimationDelay(2), duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6 relative"
        >
          {tagline}
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </motion.h2>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: getAnimationDelay(3) }}
          className="max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-accent"
        >
          {description}
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="show"
          transition={{ delay: getAnimationDelay(4) }}
          className="font-mono text-sm text-accent mb-6 flex items-center gap-2"
        >
          <span className="w-6 h-0.5 bg-accent"></span>
          {specialText}
        </motion.p>

        <div className="flex items-center space-x-6">
          {cta && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: getAnimationDelay(5), duration: 0.5 }}
            >
              <Button
                size="lg"
                type="link"
                href={cta?.url ?? '#'}
                className="group flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl relative overflow-hidden"
                sameTab={cta?.sameTab}
              >
                <span className="relative z-10">{cta.title}</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </motion.div>
          )}

          <TechStack />
        </div>
      </div>

      {/* Animated TechSlider */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: getAnimationDelay(6), duration: 1 }}
      >
        <TechSlider />
      </motion.div>
    </Wrapper>
  );
};

export default Hero;
