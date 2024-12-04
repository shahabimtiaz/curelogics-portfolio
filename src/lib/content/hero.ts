import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Umer Khalid.',
  tagline: 'I build scalable web solutions and engaging interfaces.',
  description:
    "I'm a skilled Full-Stack web developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js) and experienced in modern frameworks like Next.js and Nest.js. With expertise in TypeScript, TailwindCSS, and Prisma, I create performant and visually appealing web applications. My passion lies in delivering intuitive user experiences and scalable backend systems.",
  specialText: 'Currently open to freelance and collaborative opportunities',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
