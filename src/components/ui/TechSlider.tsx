import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiDocker,
  SiNestjs,
  SiApachekafka, // Add Kafka
  SiNginx,
  SiAmazonec2, // Add NGINX
  // SiAmazonaws, // Add AWS
} from 'react-icons/si';

// Define interface for Technology
interface Technology {
  name: string;
  icon: React.ComponentType<{ size: number; color: string }>;
  color: string;
}

const technologies: Technology[] = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Nest', icon: SiNestjs, color: '#EA285D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kafka', icon: SiApachekafka, color: '#231F20' }, // Kafka
  { name: 'NGINX', icon: SiNginx, color: '#009639' }, // NGINX
  { name: 'AWS', icon: SiAmazonec2, color: '#FF9900' }, // AWS
];

const TechSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [repeatCount, setRepeatCount] = useState<number>(5);

  useEffect(() => {
    const calculateRepeatCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = 160; // Increased width for spacing
        const calculatedRepeatCount =
          Math.ceil(containerWidth / (itemWidth * technologies.length)) + 2;
        setRepeatCount(calculatedRepeatCount);
      }
    };

    calculateRepeatCount();
    window.addEventListener('resize', calculateRepeatCount);
    return () => window.removeEventListener('resize', calculateRepeatCount);
  }, []);

  const repeatedTechnologies = Array(repeatCount).fill(technologies).flat();

  return (
    <div className="w-full overflow-hidden py-12" ref={containerRef}>
      <motion.div
        className="flex gap-12 items-center"
        initial={{ x: 0 }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {repeatedTechnologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex flex-col items-center justify-center 
            min-w-[160px] p-4 rounded-xl transition-all duration-300 
            hover:bg-gray-500/50 hover:shadow-lg group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, rotate: 360 }}
              transition={{
                duration: 0.6,
                type: 'spring',
                stiffness: 300,
              }}
              className="mb-3 p-3 rounded-full bg-gray-50 group-hover:bg-gray-100 transition-all"
            >
              <tech.icon
                size={48}
                color={tech.color}
                className="group-hover:animate-spin"
              />
            </motion.div>
            <p
              className="text-sm font-medium text-gray-400 
            group-hover:text-white transition-colors"
            >
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechSlider;
