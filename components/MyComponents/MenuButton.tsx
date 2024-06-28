"use client";
import { useEffect, useState } from 'react';

export default function MenuButton({ children }:any) {
  const [triggerHover, setTriggerHover] = useState(false);

  useEffect(() => {
    setTriggerHover(true);
    const timer = setTimeout(() => {
      setTriggerHover(false);
    }, 1000); // The duration for which the hover effect should last

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={` group relative w-full text-[21px]  uppercase leading-6 text-black dark:text-white ${triggerHover ? 'hover-effect' : ''}`}>
      <span className="font-extrabold  glowing-text inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] text-yellow-500 ">

        {children}
      </span>
      <span className=" absolute font-extrabold left-0 translate-y-[250%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
}