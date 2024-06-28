"use client";

import "./globals.css";
import AboutGrid from "@/components/AboutGrid";
import ProjectGrid from "@/components/ProjectGrid";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";


export default function page() {
  return (
    <div className="page">
      
      <div className="home w-full h-full md:container mx-auto pt-[100px] sm:pl-[20px] sm:pr-[20px]">
        <HeroSection/>
        <AboutGrid />
        <ProjectGrid />
        <ContactForm />
      </div>
    </div>
  );
}
