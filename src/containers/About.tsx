'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper
      id="about"
      {...getSectionAnimation}
      className="relative overflow-hidden"
    >
      <h2 className="heading-secondary text-center text-4xl font-bold mb-8 lg:text-left lg:mb-12">
        {title}
      </h2>
      <main className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        {/* Left Content */}
        <div className="space-y-6 lg:w-3/5 text-lg">
          <p>
            Hi, my name is{' '}
            <span className="font-bold text-accent">Umer Warraich</span>, a
            graduate with a Master of Computer Science (MSCS) from{' '}
            <Link
              href="https://www.usc.edu/"
              target="_blank"
              className="text-accent underline decoration-dotted"
            >
              University of Southern California
            </Link>
            .<br />
            I'm a passionate full-stack web developer and freelancer, constantly
            exploring new tech stacks and creating innovative solutions for
            clients.
          </p>
          <p>
            These days, my main focus is on mastering mobile development while
            pursuing opportunities to grow professionally.
          </p>

          {list && (
            <>
              <p className="font-semibold">{list.title}</p>
              <ul className="grid grid-cols-2 gap-4 text-sm">
                {list.items.map((item) => (
                  <ListItem
                    key={getId()}
                    className="before:bg-accent before:w-2 before:h-2"
                  >
                    {item}
                  </ListItem>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Right Content - Author Image */}
        <div className="relative">
          <AuthorImage src={img} alt={author.name} />
          <div className="absolute -z-10 top-8 left-8 w-40 h-40 rounded-full blur-xl hidden lg:block"></div>
          <div className="absolute -z-10 bottom-6 right-6 w-32 h-32   rounded-full blur-lg hidden lg:block"></div>
        </div>
      </main>

      {/* Decorative Background */}
      <div className="absolute -z-10 top-0 left-1/2 w-[300px] h-[300px]  rounded-full blur-3xl opacity-40 transform -translate-x-1/2"></div>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
