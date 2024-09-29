"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

import LiIcon from "@/components/li-icon";
import MainLayout from "@/components/main-layout";
import GradualSpacing from "@/components/ui/gradual-spacing";

interface DetailsProps {
  type: string;
  place: string;
  info: string;
  percentage: string;
}

const Details = ({ type, place, info, percentage }: DetailsProps) => {
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
          {type}&nbsp;{" "}
        </h3>
        <span className="capitalize font-medium text-sm md:text-base">
          {place}
        </span>
        <p className="font-medium text-sm md:text-base max-w-[1000px]">
          {info}
        </p>
        <span className="capitalize font-medium text-sm md:text-base">
          {percentage}
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      id="education"
      className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12"
    >
      <MainLayout className="pt-16">
        <GradualSpacing
          className="font-display text-center text-4xl font-bold tracking-[-0.1em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-16"
          text="Education"
        />

        <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            ref={ref}
            className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-dark dark:bg-light origin-top"
          />

          <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
            <Details
              type="Commerce(Computer Science)"
              // time="2018-2021"
              place="St Xavier's Sr Sec School, Jaipur"
              info="Learnt relevent knowledge regarding Web Developement & Design & Maintain School Website"
              percentage="86%"
            />

            <Details
              type="Bachelor of Computer Application"
              // time="2023-present"
              place="GGSIPU, Delhi"
              info="Relevant courses include Data Structures and Algorithms, Computer System Engineering, Web Developement."
              percentage="89%"
            />
          </ul>
        </div>
      </MainLayout>
    </section>
  );
};

export default Education;
