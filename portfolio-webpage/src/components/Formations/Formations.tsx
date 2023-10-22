"use client"

import React from 'react'
import SectionName from '../SectionName/SectionName'
import Tag from '../Tag/Tag'
import Timeline from '../Timeline/Timeline'
import { RevealWrapper } from 'next-reveal'

const Styles = {
    sectionContainer: "container mx-auto px-6 bg-white dark:bg-[#0d1117] min-h-screen lg:py-4 text-black dark:text-white",
}

const Formations = () => {
    return (
        <section className={Styles.sectionContainer} id='formations'>
            <RevealWrapper origin='top' delay={250} duration={500}>
                <SectionName text="/formações" />
            </RevealWrapper>

            <Timeline />
        </section>
    )
}

export default Formations