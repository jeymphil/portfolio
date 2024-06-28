import React, { useEffect, useRef } from 'react';
import ImageCard from './ImageCard'; // Adjust the import path accordingly
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const ProjectGrid = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    refs.current.forEach((ref) => {
      if (ref) {
        gsap.fromTo(
          ref,
          {
            opacity: 0,
            marginBottom: '-50px',
            marginTop: '-50px',
          },
          {
            opacity: 1,
            marginBottom: 0,
            marginTop: 0,
            ease: 'power1.out',
            duration: 0.8,
            scrollTrigger: {
              trigger: ref,
              start: 'top 100%', // Adjust this value to trigger animation earlier or later
              end: 'top 0%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="abt-section h-auto w-full sm:container">
      <h1 className="text-[50px] text-center font-bold">Projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {[
          { src: '/makeupglamourmobile.gif', className: 'mobilev lg:row-span-2 md:row-span-2 md:h-full' },
          { src: '/pinestudio.gif', className: 'lg:col-span-2 md:col-span-1' },
          { src: '/freshbookmobile.gif', className: 'mobilev lg:row-span-2 md:row-span-3' },
          { src: '/mensalon.gif', className: 'lg:row-span-1 md:col-span-1' },
          { src: '/digiarts.gif', className: 'lg:row-span-1 md:row-span-2' },
          { src: '/makeupglamour.gif', className: 'lg:col-span-1 md:col-span-2 h-full cursor-pointer', showPlusIcon: true },
        ].map((item, index) => {
          const content = (
            <div
              key={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={`opacity-0 proj ${item.className} brightness-90 hover:brightness-100 transition duration-700`}
            >
              <ImageCard src={item.src} showPlusIcon={item.showPlusIcon} />
            </div>
          );

          return item.showPlusIcon ? (
            <Link href="/projects" key={index}>
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </div>
    </div>
  );
};

export default ProjectGrid;