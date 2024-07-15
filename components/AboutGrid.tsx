"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Textarea } from "./MyComponents/PosTextarea";
import { Button } from "./ui/button";
import {
  Code,
  Facebook,
  Instagram,
  Link2,
  Pen,
  Twitter,
  X,
} from "lucide-react";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaMdb,
  FaReact,
  FaVuejs,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAndroidstudio,
  SiNuxtdotjs,
  SiShadcnui,
} from "react-icons/si";
import { CgFigma } from "react-icons/cg";

export default function AboutGrid() {
  const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.to(
      heroInfiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      1.2
    );

    return () => {};
  });

  return (
    <div className="about-grid h-auto lg:h-[70vh] w-full sm:container mb-[200px] mt-[200px]  ">
      <div className="h-auto grid lg:grid-cols-4 md:grid-cols-3 gap-5 justify-center items-center">
        <div className="col-span-4 lg:col-span-3 md:col-span-4">
          <Card
            ref={heroInfiniteRef}
            className="opacity-0 p-5 relative overflow-hidden"
          >
            <div className="absolute -top-2 right-0 rotate-[20deg]">
              <div className="dps bg-yellow-500 border-transparent dark:text-gray-700 overflow-hidden -mr-10 w-[250px]  border-2 borderblack font-normal uppercase lg:relative lg:text-xl lg:leading-10">
                <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
                  <span className="group-hover:paused animate-loopL">
                    About Me - About Me -&nbsp;
                  </span>
                  <span className="group-hover:paused  animate-loopL">
                    About Me - About Me -&nbsp;
                  </span>
                </div>
              </div>
            </div>

            {/* <X className="absolute top-2 right-2 cursor-pointer text-neutral-500" /> */}
            <div className="useritem flex items-center gap-2 rounded-[25px] p-1">
              <div className="avatar rounded-full min-h-12 min-w-12 bg-red-500 flex items-center justify-center font-[700] text-white">
                <Image
                  className="rounded-full h-[50px] w-[50px] object-cover object-top"
                  src="/engraciass.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="grow">
                <p className="font-bold">Jay Mar Phill Engracia</p>
                <p className="text-[12px] text-neutral-500 dark:text-neutral-400">
                  Frontend Developer & UI/UX Designer
                </p>
              </div>
            </div>
            <p className="pl-2 text-neutral-600 dark:text-neutral-300">
            1/2 Passionate about building accessible and inclusive web
              experiences.
            </p>
            <Textarea rows={12} disabled name="abt">
          
              I&apos;m Jay Mar Phill Engracia, a 21-year-old frontend developer
              and UI/UX designer lived in Philippines. I
              recently graduated with a Bachelor of Science in Information
              Technology in 2024. My passion lies in creating visually appealing
              and user-friendly interfaces, and I&apos;ve honed my skills
              through various school projects and commissions. I am proficient
              in a wide range of technologies, including HTML, CSS, JavaScript,
              React, Vue, NextJS, NuxtJS, ShadCN, Bootstrap, MDB, Tailwind, Figma,
              Photoshop, and Adobe Illustrator. While I continually strive to
              improve, I firmly believe that hands-on experience is the best
              way to learn. I am eager to contribute to any company that aligns with
              my expertise, bringing dedication and a fresh perspective to every
              project.
            </Textarea>
            <div className="mt-3 text-end">
              <Link href="/about">
                <Button>Read More</Button>
              </Link>
            </div>
          </Card>
        </div>
        <div className="h-auto col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4">
          <div className="ft pt-2 lg:pt-10">
            <span className="glowing-text text-[20px] text-start sm:text-center font-bold flex items-center">
              <Code className="text-black dark:text-white mr-2" /> Frontend
              Developer Tools
            </span>
            {/* <small className="">DEV TOOLS:</small> */}
            <div className=" gap-2 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-6">
              <FaHtml5 className="h-[50px] w-[50px] text-[#e54d26]" />
              <FaCss3Alt className="h-[50px] w-[50px] text-[#3d8fc6]" />
              <RiTailwindCssFill className="h-[50px] w-[50px] text-[#38bdf8]" />
              <FaReact className="h-[50px] w-[50px] text-[#61dafb]" />
              <FaVuejs className="h-[50px] w-[50px] text-[#3fb27f]"/>
              <RiNextjsFill className="h-[50px] w-[50px]" />
              <SiNuxtdotjs className="h-[50px] w-[50px] text-[#00d57e]"/>
              <FaBootstrap className="h-[50px] w-[50px] text-[#712cf9]" />
              <FaMdb className="h-[50px] w-[50px] text-[#348ad8]" />
              <SiShadcnui className="h-[50px] w-[50px] " />
              <FaGithub className="h-[50px] w-[50px] text-black bg-white rounded-full" />
              <FaGitAlt className="h-[50px] w-[50px] text-[#f34f29]" />
                          </div>
          </div>
          <div className="ft mt-[30px]">
            <span className=" glowing-text text-[20px] text-start sm:text-center font-bold flex items-center">
              <Pen className="text-black dark:text-white mr-2" />
              Designer Tools
            </span>
            {/* <small className="">DESIGN TOOLS:</small> */}
            <div className=" gap-2 grid grid-cols-6 md:grid-cols-4 lg:grid-cols-4  sm:grid-cols-6">
              <SiAdobephotoshop className="h-[50px] w-[50px] text-[#001e36] bg-[#31a8ff] rounded-lg" />
              <CgFigma className="h-[50px] w-[50px] text-[#f24e1e]" />
              <SiAdobeillustrator className="h-[50px] w-[50px] text-[#faa625]" />
            </div>
          </div>
          <div className="ft mt-[30px]">
            <span className="glowing-text text-[20px] text-start sm:text-center font-bold flex items-center  mb-2">
              <Link2 className="text-black dark:text-white mr-2" />
              Social Media
            </span>
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1  sm:grid-cols-1">
              <p className="gap-2 mb-2 flex">
                <Facebook className="text-[#0866ff] " />
                <span>
                  <a href="https://www.facebook.com/jeymphil">
                    facebook.com/jeymphil
                  </a>
                </span>
              </p>
              <p className="gap-2 mb-2 flex">
                <Instagram className="text-[#fb2c79]" />
                <span>
                  <a href="https://www.instagram.com/jeym_phil/">
                    instagram.com/jeym_phil/
                  </a>
                </span>
              </p>
              <p className="gap-2 mb-2 flex">
                <Twitter className="text-black dark:text-white" />
                <span>
                  <a href="https://x.com/Jeym_phil">x.com/Jeym_phil</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
