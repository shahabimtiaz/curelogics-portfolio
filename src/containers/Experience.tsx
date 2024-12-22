'use client';
import React, { useEffect, useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleExperienceClick = (exp: Experience) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300); // Wait for animation to complete
  };
  const experiences: Experience[] = [
    {
      id: 1,
      company: 'CureLogics',
      title: 'Senior Software Developer',
      duration: 'Jan 2024 - Present',
      description: [
        'Led a team of software developers to design, develop, and maintain high-performance applications.',
        'Architected and implemented scalable backend systems using MERN technologies.',
        'Developed and maintained APIs to support various front-end applications.',
        'Conducted thorough code reviews, ensuring adherence to best practices and coding standards.',
        'Collaborated with cross-functional teams, including product managers and designers, to gather requirements and deliver high-quality software solutions.',
        'Implemented automated testing and continuous integration processes to improve software quality and deployment speed.',
        'Mentored junior developers, providing guidance and support to enhance their technical skills and career growth.',
        'Optimized application performance, resulting in significant improvements in speed and reliability.',
        'Managed project timelines and delivered software solutions on schedule, meeting business objectives and customer needs.',
        'Stayed current with emerging technologies and industry trends to improve development processes and deliver cutting-edge solutions continually.',
      ],
      skills: [
        'Node.js',
        'MongoDB',
        'Express.js',
        'REST API',
        'PostgreSQL',
        'MySQL',
        'AWS S3',
        'GraphQL',
        'AWS EC2',
        'Azure',
        'Docker',
        'React.js',
        'TypeScript',
        'Nest.js',
        'TypeORM',
        'Sequelize',
        'Mongoose',
        'WebSockets',
        'Git',
        'Kubernetes',
        'Ubuntu Linux',
      ],
      icon: CloudLightning,
    },
    {
      id: 2,
      company: 'MercurySols',
      title: 'Senior Software Developer',
      duration: 'Feb 2021 - Dec 2023',
      description: [
        'Led a full website redesign based on customer segmentation and competitive research, resulting in a 200% increase in website leads.',
        'Directed the end-to-end software development life cycle, from conceptualization and functional specification to user experience design, coding, testing, and release, while managing ongoing product maintenance and support.',
        'Presented the app to project teams, top management, and clients.',
        'Designed a prototype to identify key influencers on Twitter using clustering techniques on over 100,000 data points in machine learning.',
        'Executed major system upgrades for existing clients and provided 24x7 consulting support for over 15 clients.',
        'Managed an 8-person team to ensure efficient project execution.',
      ],
      skills: [
        'Node.js',
        'MongoDB',
        'Express.js',
        'REST API',
        'PostgreSQL',
        'MySQL',
        'AWS S3',
        'GraphQL',
        'AWS EC2',
        'Azure',
        'Docker',
        'React.js',
        'Typescript',
        'Nest.js',
        'TypeORM',
        'Sequelize',
        'Mongoose',
        'Kafka',
        'Sockets',
        'Git',
        'Kubernetes',
      ],
      icon: Code,
    },
    {
      id: 3,
      company: 'Kairos Solutions',
      title: 'MERN Stack Developer',
      duration: 'Nov 2016 - Feb 2021',
      description: [
        'Engaged in comprehensive business requirement deliberations, scrutinized client requisites, and proposed adept solutions for intricate development challenges with discernment.',
        'Led the front-end development using React, JavaScript, and TypeScript, implementing modern features.',
        'Collaborated with cross-functional teams to create responsive web applications, addressed bugs with the SQA team, and ensured cross-platform compatibility.',
        'Ensured scalable, performant, and accessible applications, resulting in a 25% improved user experience.',
        'Implemented unit and integration testing, resulting in 100% improved code quality and bug reduction.',
      ],
      skills: [
        'Node.js',
        'MongoDB',
        'Express.js',
        'REST API',
        'PostgreSQL',
        'MySQL',
        'AWS S3',
        'GraphQL',
        'AWS EC2',
        'Azure',
        'Docker',
        'React.js',
        'Typescript',
        'Nest.js',
        'TypeORM',
        'Sequelize',
        'Mongoose',
        'Kafka',
        'Sockets',
        'Git',
        'Kubernetes',
      ],
      icon: Server,
    },
  ];
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <Wrapper
      id="experience"
      {...getSectionAnimation}
      className="overflow-hidden"
    >
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
                onClick={() => handleExperienceClick(exp)}
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
          {isModalOpen && selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm"
              onClick={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>

                <motion.div
                  variants={modalVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform 
                    ${
                      isDarkMode
                        ? 'bg-gray-800 text-white'
                        : 'bg-white text-gray-900'
                    }
                    rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={closeModal}
                    className={`absolute top-4 right-4 p-2 rounded-full 
                      ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
                      transition-colors duration-200`}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <div className="mt-2">
                    <div className="flex items-center mb-6">
                      <selectedExperience.icon className="w-8 h-8 mr-4" />
                      <div>
                        <h2 className="text-2xl font-bold">
                          {selectedExperience.title}
                        </h2>
                        <p
                          className={`text-lg ${
                            isDarkMode ? 'text-gray-300' : 'text-gray-600'
                          }`}
                        >
                          {selectedExperience.company}
                        </p>
                        <p
                          className={`text-sm ${
                            isDarkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                        >
                          {selectedExperience.duration}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {selectedExperience.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <span
                              className={`mr-3 ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-500'
                              }`}
                            >
                              ▸
                            </span>
                            <span className="text-sm sm:text-base">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-6">
                        <h3
                          className={`text-lg font-semibold mb-3 ${
                            isDarkMode ? 'text-gray-200' : 'text-gray-700'
                          }`}
                        >
                          Skills & Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedExperience.skills.map((skill, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-sm
                                ${
                                  isDarkMode
                                    ? 'bg-gray-700 text-gray-200'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Wrapper>
  );
};

export default ExperienceTimeline;
