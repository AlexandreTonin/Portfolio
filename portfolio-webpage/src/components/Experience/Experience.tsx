"use client"

import React from 'react'
import SectionName from '../SectionName/SectionName'
import Tag from '../Tag/Tag'
import Timeline from '../Timeline/Timeline'
import TimelineTwo from '../TimelineTwo/TimelineTwo'
import { RevealWrapper } from 'next-reveal'

const Styles = {
    sectionContainer: "container mx-auto px-6 bg-white dark:bg-[#0d1117] lg:py-24 py-8 lg:text-black dark:text-white",
}

const Experience = () => {
    return (
        <section className={Styles.sectionContainer} id='experience'>
            <RevealWrapper delay={500} duration={2000} className="load-hidden">
                <SectionName text="/experiência" />
            </RevealWrapper>

            <TimelineTwo title="Experiência profissional" />
        </section>
    )
}

export default Experience