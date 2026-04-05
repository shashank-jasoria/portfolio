"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import LiIcon from "@/components/li-icon";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";
import work from "@/components/data/work"; 

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
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

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
            {work.map((job, index) => (
              <Details
                key={index}
                position={job.position}
                company={job.name}
                time={`${formatDate(job.startDate)} - ${
                  job.endDate ? formatDate(job.endDate) : "Present"
                }`}
                address="Delhi, India" // or add this in your data later
                work={job.summary || ""}
              />
            ))}
          </ul>
        </div>
      </MainLayout>
    </section>
  );
};

export default Experience;
