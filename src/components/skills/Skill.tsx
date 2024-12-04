'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SoftwareSkillType } from '@/lib/types';
import { getId } from '@/lib/utils/helper';
import { ShowLottie, SkillIcon } from '@/components';

import { Code, Cpu, Layers, Zap, Target, Rocket } from 'lucide-react';
import { useTheme } from '@/lib/hooks/use-theme';

type Props = {
  lottie?: any;
  title: string;
  points: string[];
  skills: SoftwareSkillType[];
  className?: string;
  icon?: React.ElementType;
};

const SkillSection: React.FC<Props> = ({
  lottie,
  title,
  skills,
  points,
  className = '',
  icon: Icon = Zap,
}) => {
  const { isDarkMode } = useTheme();
  const [activeSkill, setActiveSkill] = useState<SoftwareSkillType | null>(
    null
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Dynamic theming classes

  const cardClass = isDarkMode
    ? 'bg-gray-800 hover:bg-gray-700 border-gray-700'
    : 'bg-gray-50 hover:bg-gray-100 border-gray-200';
  const activeCardClass = isDarkMode
    ? 'bg-blue-900 border-blue-700'
    : 'bg-blue-100 border-blue-200';
  const textClass = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const modalBgClass = isDarkMode
    ? 'bg-gray-800 text-gray-100'
    : 'bg-white text-gray-900';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`container mx-auto px-4 py-16  ${className}`}
    >
      <motion.div
        className="grid md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
      >
        {/* Left Section */}
        <motion.div className="space-y-8" variants={containerVariants}>
          {/* Title */}
          <motion.div
            className="flex items-center space-x-4 mb-6"
            variants={itemVariants}
          >
            <Icon
              className={`w-10 h-10 ${
                isDarkMode ? 'text-blue-400' : 'text-blue-600'
              }`}
            />
            <h2
              className={`text-4xl font-bold tracking-tight capitalize ${
                isDarkMode ? 'text-gray-100' : 'text-gray-800'
              }`}
            >
              {title}
            </h2>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-4 gap-4"
            variants={containerVariants}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-xl cursor-pointer 
                  transition-all duration-300 border
                  ${
                    activeSkill?.name === skill.name
                      ? activeCardClass
                      : cardClass
                  }
                `}
                onClick={() => setActiveSkill(skill)}
              >
                <SkillIcon
                  src={skill.icon}
                  name={skill.name}
                  // @ts-ignore
                  className="w-12 h-12 mb-2 filter brightness-90 hover:brightness-100"
                />
                <span className={`text-xs text-center ${textClass}`}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Description Points */}
          <motion.ul
            className={`space-y-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={containerVariants}
          >
            {points.map((point, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <Zap
                  className={`w-5 h-5 mr-3 mt-1 flex-shrink-0 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-500'
                  }`}
                />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Section - Lottie Animation */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <ShowLottie
            path={lottie}
            className="max-w-full h-auto md:max-h-[500px] filter brightness-90 hover:brightness-100 transition-all"
          />
        </motion.div>
      </motion.div>

      {/* Skill Details Modal */}
      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className={`rounded-2xl max-w-md w-full p-8 relative shadow-2xl 
                ${modalBgClass}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveSkill(null)}
                className={`absolute top-4 right-4 ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-gray-100'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
              >
                ✕
              </button>
              <div className="flex items-center mb-6">
                <SkillIcon
                  src={activeSkill.icon}
                  name={activeSkill.name}
                  // @ts-ignore
                  className="w-16 h-16 mr-4 filter brightness-90"
                />
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}
                >
                  {activeSkill.name}
                </h3>
              </div>
              <p
                className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                Detailed information about {activeSkill.name} would go here. You
                can add more context, skill level, or related technologies.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SkillSection;
