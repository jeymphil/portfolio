"use client";
import Profile from "@/components/Profile";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import MenuButton from "@/components/MyComponents/MenuButton";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogHeader } from "./ui/dialog";
import Image from "next/image";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

export default function Page() {
  const heroInfiniteRef = useRef(null);

  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 1.5,
          ease: "cubic-text",
        },
        delay
      );
    });
    tl.to(
      heroInfiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: "power1.out",
      },
      0.8
    );

    return () => { };
  });

  return (
    <div className="hero-section grid lg:grid-cols-12 sm:grid-cols-12 md:grid-cols-6 gap-2 lg:h-[70vh] sm:h-[100vh] w-full justify-center items-center">
      <div
        ref={heroInfiniteRef}
        className="opacity-0 z-0 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6 w-full sm:mb-[20px]"
      >
        <Profile />
      </div>
      <div className=" relative w-full lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-6 flex items-center justify-center ">
        <div className="h-full w-[360px]">
          <div className="hero-text">
            <h1 className="h_title">
              <span className="overflow-hidden w-full inline-block">
                <span className="translate-y-full inline-block text-7xl  font-bold ">
                  Hi
                  <span className="line absolute top-[68%]  text-[37px] border-black dark:border-white border-b-[13px] w-[355px]"></span>
                </span>
              </span>
            </h1>

            <span className="overflow-hidden w-full inline-block">
              <span className="translate-y- text-[23px] items-center gap-2 flex  ">
                I&apos;m
                <MenuButton>Jay Mar Phill Engracia</MenuButton>
              </span>
            </span>

            <h1 className="h_title ">
              <span className="overflow-hidden  inline-block">
                <span className="translate-y-full  text-[15px] inline-block w-[360px] text-justify">
                  Bachelor of Science in Information Technology (BSIT)
                </span>
              </span>
            </h1>
            <h1 className="h_title">
              <span className="overflow-hidden w-full inline-block">
                <span className="translate-y-full inline-block overflow-hidden text-[21px] text-justify">
                  Frontend Developer & UI/UX Designer
                </span>
              </span>
            </h1>
          </div>

          <div className="h_title">
            <span className="overflow-hidden w-full inline-block">
              <span className="-translate-y-[-101%] inline-block text-lg">
                <Dialog>
                  <DialogTrigger>
                    <div className="flex items-center p-1 px-3 text-sm rounded-md gap-1 mr-2 border border-black text-black bg-white hover:bg-gray-900 hover:text-white dark:border-white  dark:bg-[#121212] dark:text-white dark:hover:bg-gray-200 dark:hover:text-black">
                      <FileText /> Résumé
                    </div>
                  </DialogTrigger>
                  <DialogContent className="">

                    <DialogDescription className="h-[400px] overflow-y-scroll ">
                      <Image
                        className="overflow-x-hidden"
                        src="/resume/jeymphil.png"
                        alt="Picture Of Jeymphil"
                        height={100}
                        width={500}
                        priority
                      />
                    </DialogDescription>

                  </DialogContent>
                </Dialog>

                <Link href="https://github.com/jeymphil" passHref>

                  <Button className="gap-1 mr-2 border border-black text-black bg-white hover:bg-gray-900 hover:text-white dark:border-white  dark:bg-[#121212] dark:text-white dark:hover:bg-gray-200 dark:hover:text-black">
                    <Github /> Github
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/jeymphil/" passHref>
                  <Button className="gap-1 mr-2 border border-black text-black bg-white hover:bg-gray-900 hover:text-white dark:border-white  dark:bg-[#121212] dark:text-white dark:hover:bg-gray-200 dark:hover:text-black">
                    <Linkedin /> LinkedIn
                  </Button>
                </Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
