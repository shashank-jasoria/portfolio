"use client";
import React from "react";

// import Main from '../layouts/Main';

import Education from "../components/resume/Education";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";

import degrees from "../components/data/degrees";
import work from "../components/data/work";
import { skills, categories } from "../components/data/skills";
import Link from "next/link";
import Cell from "../components/resume/Cell";
import data from "../components/data/projects";

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Resume = () => (
  // <Main
  //   title="Resume"
  //   description="Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  // >
  <article className="post" id="resume">
    <header>
      <div className="title">
        <h2>
          <Link href="/">Resume</Link>
        </h2>
        <div className="link-container">
          <h4>
            <div className="">
              It is a resume view, in which I present my website in a resume
              style to improve the user experience and interface. I think it
              will help you get to know me better.
            </div>
          </h4>
        </div>
      </div>
    </header>
    {Object.entries(sections).map(([name, Section]) => (
      <Section key={name} />
    ))}
    <div id="projects">
      <div className="title">
        <h3 className="ta-center mt-45">Projects</h3>
      </div>
      <p className="ta-center">
        A selection of projects that I&apos;m not too ashamed of
      </p>

      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </div>
  </article>
  //  </Main>
);

export default Resume;
