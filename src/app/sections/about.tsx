"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import React from "react";

export const projects = [
  {
    title: "Planning & startergizing",
    description: "creativity with practicality through meticulous planning.",
    logo: "/assets/solution.png",
  },
  {
    title: "Team Growth",
    description: "Skilled teams for fresh perspectives and crisis management.",
    logo: "/assets/growth.png",
  },
  {
    title: "Execution",
    description: "Cost-effective, efficient, and reliable project delivery.",
    logo: "/assets/bullseye.png",
  },
];

function About() {
  return (
    <div className=" min-h-screen mt-20 px-8 mx-auto max-w-7xl">
      <h2 className="lg:text-5xl md:text-4xl text-2xl  mb-10 font-polySans">
        Crafting solutions that redefine possibilities.
      </h2>
      <div className="flex items-center flex-col-reverse mb-12 lg:flex-row gap-5">
        <p className="text-neutral-800 text-justify ">
          At Forefront Industrial Solutions LLP, we deliver inventive and
          contemporary solutions that ensure safe, efficient, and expertly
          executed Engineering, Procurement, and Construction (EPC) projects.
          During the pre-construction stage, we believe in meticulous planning
          and startergizing; always striving to strike a balance between
          innovation and practicality. With constant advancement in technology,
          we as an organisation make an effort to instill creativity in our
          construction solutions. Furthermore, our approach is always supported
          with extensive cost-analysis, risk management, and mitigation to
          ensure our solutions are not only efficient but also reliable in the
          long run. Execution is key to the success of any project, and we at
          Forefront are proud of say that execution is our strong suit. Our
          expertise stems from a deep understanding of each project, it’s unique
          requirements, limitations, budgets local and global restraints. With
          each project, we encourage our team to channel their creativity and
          provide timely, cost-effective, and world-class services. By
          prioritising safety, quality, and reliability, Forefront defines
          success as synonymous with valued and satisfied clients. We ensure
          that our employees as well as our supply chain partners have the right
          skills, certifications, and training to provide the highest quality
          and best outcomes in every project. Our biggest selling point is our
          investment in our employees and workers, we believe that a
          continuously evolving team is better equipped to face challenges,
          manage crisis’, and bring fresh and unique perspectives to each
          project.
        </p>
        <Image
          src="/assets/contruction_about.svg"
          alt="construction"
          width={500}
          height={500}
          className=""
        />
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default About;
