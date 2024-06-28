'use client';
import { useEffect, useRef } from 'react';
import Image from "next/image";

export default function Profile() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      if (card) {
        const { clientX, clientY } = e;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = -(clientY - centerY) / 40;
        const rotateY = (clientX - centerX) / 40;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container noselect mb-[20px]">
      <div className="canvas">
        <div id='card' ref={cardRef}>
          <Image
            src="/engraciass.png"
            alt="Picture Of Jeymphil"
            fill
            priority 
            sizes="(max-width: 768px) 100vw, 
                   (max-width: 1200px) 50vw, 
                   33vw"
          />
        </div>
      </div>
    </div>
  );
}
