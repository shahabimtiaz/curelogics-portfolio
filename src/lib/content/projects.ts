  import { ProjectsSectionType } from '@/lib/types/sections';
  import { getId } from '@/lib/utils/helper';

  export const projectsSection: ProjectsSectionType = {
    title: 'my projects',
    projects: [
      {
        id: getId(),
        name: 'skymallify',
        url: '#',
        repo: '',  // Add the GitHub repo link here if available
        img: '/portfolio/skymallify.png',  // Replace with Skymallify's image link
        year: 2024,
        tags: ['Next.js', 'TypeScript', 'Shadcn', 'Recharts', 'React Simple Maps'],
      },
      {
        id: getId(),
        name: 'OxygenBI',
        url: 'https://oxygenbi.com/',
        repo: '',  // Add the GitHub repo link here if available
        img: '/portfolio/oxygenbi.jpg',  // Replace with OxygenBI's image link
        year: 2024,
        tags: ['React', 'Node.js', 'Business Intelligence', 'Performance Insights'],
      },
     
    ],
  };
