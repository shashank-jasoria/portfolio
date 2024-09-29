"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import LiIcon from "@/components/li-icon";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";

interface DetailsProps {
  position: string;
  company: string;
  time: string;
  address: string;
  work?: string;
}

const Details = ({ position, company, time, address, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp; <p className="capitalize inline-block">@{company}</p>
        </h3>
        <span className="capitalize font-medium text-sm md:text-base">
          {time} | {address}
        </span>
        <p className="font-medium text-sm md:text-base max-w-[1000px]">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      id="experience"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-16"
          text="Experience"
        />

        <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            ref={ref}
            className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-dark dark:bg-light origin-top"
          />

          <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
            <Details
              position="Intern Frontend Developer"
              company="MediaMonks"
              time="Jun/2019 - Sept/2019"
              address="Remote"
              work="In my role as a front-end developer i developed responsive and cross-browser compatible front-end code for high-traffic websites proactively researched 3rd party libraries to avoid technical debt and refactored code to adhere to best practices, engaged in code reviews and provided constructive feedback to enhance team productivity"
            />

            <Details
              position="UI Developer"
              company="TOK"
              time="Jan/2022 - Sep/2021"
              address="Jaipur"
              work="As a UI Developer at TOK, I was responsible for designing and implementing user-friendly, responsive interfaces for web applications. I collaborated with cross-functional teams to translate design concepts into high-quality code, ensuring seamless functionality and aesthetics. By focusing on performance optimization and troubleshooting, I enhanced the user experience across multiple devices and platforms, improving both usability and visual appeal."
            />

            <Details
              position="Frontend Developer"
              company="Build with Innovation"
              time="Dec/2021 - Dec/2022"
              address="Delhi, India"
              work="In my recent at role at office Box, I specialized in crafting dynamic web applications using cutting-edge technologies like React, Redux, and Firebase, delivered high-quality, SEO-optimized front-end code for web applications, meeting client specifications and 
            exceeding expectations, designed sleek and functional websites that ensured optimal user experience and client satisfaction."
            />

            <Details
              position="Frontend Developer"
              company="Farida Gupta"
              time="Jan/2023 - Jul/2024"
              address="Delhi, India"
              work="At Farida Gupta, a product-based company, I contributed to developing and maintaining the front-end of a large-scale e-commerce platform. I focused on creating responsive, user-centric web pages, optimizing performance, and ensuring seamless integration with back-end systems. By working closely with the product and design teams, I enhanced the overall user experience, streamlining navigation and improving website functionality for an efficient shopping journeyss."
            />
          </ul>
        </div>
      </MainLayout>
    </section>
  );
};

export default Experience;
