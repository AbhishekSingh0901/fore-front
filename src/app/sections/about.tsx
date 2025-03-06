"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { motion } from "framer-motion";
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
    <div>
      <h2 className="text-5xl mt-16 lg:text-8xl font-polySans px-4">
        Crafting solutions that{" "}
        <span className=" text-burntumber">redefine</span> possibilities.
      </h2>
      <div className=" min-h-screen mt-10 px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center flex-col-reverse mb-12 lg:flex-row gap-5">
          <p className="text-muted-foreground text-justify lg:text-lg">
            At Forefront Industrial Solutions LLP, we deliver inventive and
            contemporary solutions that ensure safe, efficient, and expertly
            executed Engineering, Procurement, and Construction (EPC) projects.
            During the pre-construction stage, we believe in meticulous planning
            and startergizing; always striving to strike a balance between
            innovation and practicality. With constant advancement in
            technology, we as an organisation make an effort to instill
            creativity in our construction solutions. Furthermore, our approach
            is always supported with extensive cost-analysis, risk management,
            and mitigation to ensure our solutions are not only efficient but
            also reliable in the long run. Execution is key to the success of
            any project, and we at Forefront are proud of say that execution is
            our strong suit. Our expertise stems from a deep understanding of
            each project, it’s unique requirements, limitations, budgets local
            and global restraints. With each project, we encourage our team to
            channel their creativity and provide timely, cost-effective, and
            world-class services.
            {/*By prioritising safety, quality, and
            reliability, Forefront defines success as synonymous with valued and
            satisfied clients. We ensure that our employees as well as our
            supply chain partners have the right skills, certifications, and
            training to provide the highest quality and best outcomes in every
            project. Our biggest selling point is our investment in our
            employees and workers, we believe that a continuously evolving team
            is better equipped to face challenges, manage crisis’, and bring
            fresh and unique perspectives to each project. */}
          </p>
          <Image
            src="/assets/contruction_about.svg"
            alt="construction"
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="">
          <HoverEffect items={projects} />
        </div>
      </div>
      {/* work */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-4 mt-20 max-w-8xl mx-auto">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:py-20 px-6 md:px-10 py-10 md:py-10 lg:w-1/2"
        >
          <span className="font-bold  bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text uppercase tracking-[3px]">
            Industrial Work?
          </span>
          <h4 className="font-medium text-4xl lg:text-6xl mb-8">
            We ensure excellence in industrial construction
          </h4>
          <div className=" flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                1
              </div>
              <p className="text-sm text-muted-foreground">
                Comprehensive Solutions: Expertise in installation,
                modernization, shutdowns, and modifications across key
                industries.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                2
              </div>
              <p className="text-sm text-muted-foreground">
                Precision & Quality: Ensuring projects meet the highest
                standards of safety, reliability, and quality control
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                3
              </div>
              <p className="text-sm text-muted-foreground">
                Integrated Expertise: Combining core engineering with
                specialized solutions to tackle complex challenges.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14 font-bold rounded-full flex justify-center items-center">
                4
              </div>
              <p className="text-sm text-muted-foreground">
                End-to-End Support: Assisting clients from site assessment to
                commissioning for seamless execution.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-[#f3e9ec] lg:py-20 px-6 md:px-12 py-10 md:py-10 lg:w-1/2"
        >
          <span className="font-bold text-lg bg-gradient-to-r from-indigo-700 via-pink-700 to-orange-700 text-transparent bg-clip-text uppercase tracking-[3px]">
            Commercial work?
          </span>
          <h4 className="font-medium text-4xl lg:text-6xl mb-8">
            We drive impactful commercial projects
          </h4>
          <div className=" flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                1
              </div>
              <p className="text-sm text-muted-foreground">
                Strategic Approach: Combining strategic management, advanced
                technology, and innovation to create value.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                2
              </div>
              <p className="text-sm text-muted-foreground">
                Commitment to Excellence: Ensuring sustainability, safety, and
                reliability across all project phases.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14  font-bold rounded-full flex justify-center items-center">
                3
              </div>
              <p className="text-sm text-muted-foreground">
                Expertise & Execution: Leveraging engineering and project
                management expertise for the best outcomes.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-puce text-burntumber aspect-square h-14 font-bold rounded-full flex justify-center items-center">
                4
              </div>
              <p className="text-sm text-muted-foreground">
                Continuous Growth: As a start-up, constantly evolving by
                learning from experience and innovating.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
