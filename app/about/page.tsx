// pages/about.tsx
import React from "react";
import AboutGrid from "@/components/AboutGrid";
import Postcard from "@/components/MyComponents/Postcard";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Facebook,
  Instagram,
  Link2,
  Pen,
  Pin,
  Twitter,
} from "lucide-react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaMdb,
  FaPenSquare,
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
import { TbFileTypeXml } from "react-icons/tb";
import { PiFigmaLogoBold } from "react-icons/pi";
import { CgFigma } from "react-icons/cg";

export default function AboutPage() {
  return (
    <div className="about-grid grow w-full sm:container mt-[100px]   ">
      <div className="h-auto grid md:grid-cols-4 gap-5 justify-center items-center">
        <div className="col-span-4 lg:col-span-3 md:col-span-4">
          <Postcard
            pin={<Pin color="#d41616" />}
            heading="1/2 Passionate about building accessible and inclusive web
              experiences."
            
            content={
              <>
                <p>
                  I&apos;m Jay Mar Phill Engracia, a 21-year-old frontend
                  developer and UI/UX designer based in Misamis Occidental,
                  Philippines. I recently graduated with a Bachelor of Science
                  in Information Technology in 2024. My passion lies in creating
                  visually appealing and user-friendly interfaces, and I&apos;ve
                  honed my skills through various school projects and
                  commissions. I am proficient in a wide range of technologies,
                  including HTML, CSS, JavaScript, React, Next.js, ShadCN,
                  Bootstrap, MDB, Tailwind, Figma, Photoshop, and Adobe
                  Illustrator. While I continually strive to improve, I firmly
                  believe that hands-on experience is the best way to learn. I am
                  eager to contribute to any company that aligns with my
                  expertise, bringing dedication and a fresh perspective to
                  every project.
                </p>
              </>
            }
            date="June 27, 2024"
          />
          <Postcard
            pin={<Pin color="#d41616" />}
            heading="2/2 Passionate about building accessible and inclusive web experiences."
            content={
              <>
                <p>
                I am an agile team player, adept at adapting to various project requirements and timelines. I&apos;ve been working with a dedicated group named logiclynxz, a small team formed with my colleagues. We specialize in accepting commissions for school projects, business needs, and more. As the frontend developer of our team, I ensure we deliver high-quality work that meets our clients&apos; expectations, all while maintaining affordable pricing. Our collaborative efforts have consistently resulted in satisfied clients, showcasing our commitment to excellence and teamwork.
                </p>
              </>
            }
            date="June 27, 2024"
          />
        </div>
        <div className="relative h-auto col-span-4 lg:col-span-1 md:col-span-4 sm:col-span-4">
          <div className="abts fixed top-[11%] w-[300px]">
            <div className="ft ">
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
    </div>
  );
}
