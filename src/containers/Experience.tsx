'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Code, Server, CloudLightning } from 'lucide-react';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';
import { useTheme } from '@/lib/hooks/use-theme';

interface Experience {
  id: number;
  company: string;
  title: string;
  duration: string;
  description: string[];
  skills: string[];
  icon: React.ElementType;
}

const ExperienceTimeline: React.FC = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);
  const { isDarkMode } = useTheme();
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'Tech Innovations Labs',
      title: 'Lead Full Stack Developer',
      duration: 'Jan 2022 - Present',
      description: [
        'Architected scalable microservices using Next.js and TypeScript',
        'Implemented advanced state management with React Context and Redux',
        'Developed high-performance GraphQL APIs with Apollo Server',
        'Led cross-functional teams in agile development environments',
      ],
      skills: [
        'Next.js',
        'React',
        'TypeScript',
        'GraphQL',
        'Docker',
        'Kubernetes',
      ],
      icon: CloudLightning,
    },
    {
      id: 2,
      company: 'Digital Solutions Enterprise',
      title: 'Senior Frontend Engineer',
      duration: 'Jun 2020 - Dec 2021',
      description: [
        'Transformed UI/UX designs into responsive, interactive web applications',
        'Optimized frontend performance using advanced React optimization techniques',
        'Implemented comprehensive testing strategies with Jest and React Testing Library',
        'Mentored junior developers in modern web development practices',
      ],
      skills: ['React', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Cypress'],
      icon: Code,
    },
    {
      id: 3,
      company: 'StartUp Accelerator',
      title: 'Backend Development Specialist',
      duration: 'Jan 2019 - May 2020',
      description: [
        'Developed robust backend infrastructure using Node.js and Express',
        'Designed and implemented efficient MongoDB database schemas',
        'Created scalable microservices architecture',
        'Integrated third-party APIs and implemented authentication mechanisms',
      ],
      skills: ['Node.js', 'Express', 'MongoDB', 'REST API', 'Socket.IO'],
      icon: Server,
    },
  ];

  return (
    <Wrapper id="experience" {...getSectionAnimation}>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 "
        >
          Professional Journey
        </motion.h1>

        {/* Responsive vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 hidden sm:block"></div>

        <div className="relative max-w-4xl mx-auto space-y-8 sm:space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col sm:flex-row items-center w-full sm:even:flex-row-reverse"
            >
              {/* Timeline Dot - Only on larger screens */}
              <div
                className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 
                w-6 h-6 rounded-full bg-gray-300 items-center justify-center"
              >
                <div className="w-3 h-3 bg-bg rounded-full"></div>
              </div>

              {/* Experience Card - Responsive width and positioning */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedExperience(exp)}
                className={`w-full sm:w-[calc(50%-60px)] p-4 sm:p-6 rounded-lg shadow-md cursor-pointer 
                  border border-gray-200 transition-all duration-300 
                  sm:${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="flex items-center mb-4">
                  <exp.icon className="w-6 sm:w-8 h-6 sm:h-8 mr-3 sm:mr-4 text-text" />
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold">
                      {exp.title}
                    </h2>
                    <p
                      className={`text-xs sm:text-sm ${
                        isDarkMode ? 'text-gray-100' : 'text-gray-500'
                      }`}
                    >
                      {exp.company}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-xs sm:text-sm ${
                    isDarkMode ? 'text-gray-300 ' : 'text-gray-600 '
                  }mb-2`}
                >
                  {exp.duration}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                  {exp.skills.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className={`px-1 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      } border border-gray-300`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-4 sm:p-8 relative shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
                  {selectedExperience.title}
                </h2>
                <h3 className="text-lg sm:text-xl text-gray-600 mb-4">
                  {selectedExperience.company}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mb-6">
                  {selectedExperience.duration}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-6 text-gray-700 text-sm sm:text-base">
                  {selectedExperience.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 sm:mr-3 text-gray-500">▸</span>
                      {desc}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedExperience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 text-gray-800 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
};

export default ExperienceTimeline;
