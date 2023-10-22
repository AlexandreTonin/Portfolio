"use client"

import { RevealWrapper } from "next-reveal"
import SectionName from "../SectionName/SectionName"
import SkillsGrid from "./SkillsGrid"

const Styles = {
  sectionContainer: "container mx-auto px-6 bg-white dark:bg-[#0d1117] lg:py-4 text-gray-900 dark:text-white",
}

const Skills = () => {
  return (
    <section className={Styles.sectionContainer} id='skills'>
      <RevealWrapper delay={500} duration={2000} className="load-hidden">
        <SectionName text="/habilidades" />
      </RevealWrapper>

      <div className="py-6 flex justify-between">
        <div>
          <div className="text-lg">
            <RevealWrapper delay={1500} duration={2000} className="load-hidden">
              <SkillsGrid title="Engenharia de Software" softeng />
            </RevealWrapper>
          </div>
          <RevealWrapper delay={2000} duration={2000} className="load-hidden">

            <SkillsGrid title="Front End" frontend />
          </RevealWrapper>

          <RevealWrapper delay={2500} duration={2000} className="load-hidden">
            <SkillsGrid title="Back End" backend />
          </RevealWrapper>

          <RevealWrapper delay={3000} duration={2000} className="load-hidden">
            <SkillsGrid title="Ferramentas" tools />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Skills