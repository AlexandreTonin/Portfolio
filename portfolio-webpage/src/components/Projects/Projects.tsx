"use client"

import React from 'react'
import SectionName from '../SectionName/SectionName'
import Tag from '../Tag/Tag'
import Timeline from '../Timeline/Timeline'
import TimelineTwo from '../TimelineTwo/TimelineTwo'
import ProjectsGrid from './ProjectsGrid'
import { RevealWrapper } from 'next-reveal'

const Styles = {
    sectionContainer: "container mx-auto px-6 bg-white dark:bg-[#0d1117] min-h-screen lg:py-4 text-black dark:text-white",
}

const Projects = () => {
    return (
        <section className={Styles.sectionContainer} id='projects'>
            <RevealWrapper delay={500} duration={2000} className="load-hidden">
                <SectionName text="/projetos" />
            </RevealWrapper>

            <ProjectsGrid />
        </section>
    )
}

export default Projects