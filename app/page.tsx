"use client"
import dynamic from "next/dynamic";
import Resume from "./Resume";
import { useCvView } from "@/components/layoutContext";
import { Suspense } from "react";
import Loader from "@/components/ui/loader";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

const Experience = dynamic(() => import("@/components/sections/experience"));
const Education = dynamic(() => import("@/components/sections/education"));
// const Contact = dynamic(() => import("@/components/sections/contact"));
// Define the PageProps interface

export default function Home() {
  const { isCvView } = useCvView();
  return (
    <>
    {isCvView ? <Resume/>
    :
    <Suspense fallback={<Loader/>}>

      <main className="flex flex-col items-center text-dark w-full min-h-screen dark:text-light lg:pt-28 overflow-hidden">
        <Hero/>
        <About/>
        <Projects/>
        {/* <Approach />
        <Clients /> */}
        <Experience />
        <Education />
        <Contact/>
      </main>
    </Suspense>
    }
    </>
    
  );
}
