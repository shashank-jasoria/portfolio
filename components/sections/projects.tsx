"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/config/data";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { PinContainer } from "@/components/ui/pin-container";
import { useState } from "react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("React & Next");

  // Filter function based on selected tag
  const filteredProjects = projects.filter((project) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "React & Next") {
      return project.tag.includes("React") || project.tag.includes("Next.js");
    }
    if (selectedFilter === "JavaScript") {
      return project.tag.includes("JavaScript");
    }
    if (selectedFilter === "CSS/SCSS") {
      return project.tag.includes("CSS") || project.tag.includes("SCSS");
    }
    return false; // default case
  });

  return (
    <section
      id="projects"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <div className="project-filter-container">
          <GradualSpacing
            className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8 mb:mb-16 "
            text="Projects"
          />
          <div className="project-filter">
            {/* Filter Buttons */}
            <div
              className={`mr-2 relative group px-3 py-2 rounded-md transition-colors duration-200 ${
                selectedFilter === "All"
                  ? "bg-dark text-white dark:text-dark dark:bg-light"
                  : "hover:bg-dark hover:text-white dark:hover:bg-light dark:hover:text-dark"
              }`}
              onClick={() => setSelectedFilter("All")}
            >
              All
            </div>
            <div
              className={`mx-2 relative group px-3 py-2 rounded-md transition-colors duration-200 ${
                selectedFilter === "React & Next"
                  ? "bg-dark text-white  dark:text-dark dark:bg-light"
                  : "hover:bg-dark hover:text-white dark:hover:bg-light dark:hover:text-dark"
              }`}
              onClick={() => setSelectedFilter("React & Next")}
            >
              React & Next
            </div>
            <div
              className={`mx-2 relative group px-3 py-2 rounded-md transition-colors duration-200 ${
                selectedFilter === "JavaScript"
                  ? "bg-dark text-white  dark:text-dark dark:bg-light"
                  : "hover:bg-dark hover:text-white dark:hover:bg-light dark:hover:text-dark"
              }`}
              onClick={() => setSelectedFilter("JavaScript")}
            >
              JavaScript
            </div>
            <div
              className={`ml-2 relative group px-3 py-2 rounded-md transition-colors duration-200 ${
                selectedFilter === "CSS/SCSS"
                  ? "bg-dark text-white  dark:text-dark dark:bg-light"
                  : "hover:bg-dark hover:text-white dark:hover:bg-light dark:hover:text-dark"
              }`}
              onClick={() => setSelectedFilter("CSS/SCSS")}
            >
              CSS/SCSS
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 sm:gap-32 mt-10">
          {filteredProjects.map((item) => (
            <div
              className="flex items-center justify-center sm:w-96 w-[80vw] h-full"
              key={item.id}
            >
              <PinContainer
                title={item.title}
                href={item.link}
                className="text-dark dark:text-light space-y-5"
              >
                <Link href={item.link} target="_blank" className="space-y-5">
                  <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden">
                    <Image
                      src={item.img}
                      alt="cover"
                      className="rounded-md w-full h-auto"
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                  </div>
                  <div className="name-tag">
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {item.title}
                    </h1>
                    <div className="project-tag bg-dark text-white  dark:text-dark dark:bg-light">
                      {item.tag}
                    </div>
                  </div>

                  <p className="lg:text-lg text-sm line-clamp-3">{item.des}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt="icon5"
                            className="p-2"
                            width={100}
                            height={100}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </Link>
              </PinContainer>
            </div>
          ))}
        </div>
      </MainLayout>
    </section>
  );
};

export default Projects;
