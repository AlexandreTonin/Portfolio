import React from 'react'
import TimelineItem from './TimelineItem'
import { RevealList, RevealWrapper } from 'next-reveal'

const Timeline = () => {
    return (
        <section>
            <div className="dark:text-white text-gray-900">
                <div className="flex flex-col items-start md:flex-row lg:py-0 py-8">
                    <div className="flex flex-col w-full sticky top-0 md:top-36 lg:w-1/3 mt-2 md:mt-12">
                        <RevealWrapper delay={1500} origin="none" duration={2000}>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 sticky top-0 z-50">Visualize minhas formações</p>
                        </RevealWrapper>
                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="w-full h-full">
                            <div className="relative wrap overflow-hidden lg:p-10 h-full">
                                <div className="dark:border-sky-400 border-sky-600 absolute h-full border-2 right-1/2 rounded-full lg:block hidden">
                                </div>
                                <RevealWrapper delay={2500} duration={2000} className="load-hidden">
                                    <TimelineItem className=" flex-row-reverse text-right" title="Unijuí" date="(2022 - 2026)" course="Bacharelado em Engenharia de Software" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" andamento />
                                    <TimelineItem className="" title="Escola Ténica 25 de Julho" date="(2019 - 2021)" course="Curso Técnico em Informática" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" />
                                    <TimelineItem className=" flex-row-reverse text-right" title="Hora de Codar" date="(2023)" course="JavaScript" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" andamento />
                                    <TimelineItem className="" title="Hora de Codar" date="(2023)" course="ReactJs" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" andamento />
                                    <TimelineItem className=" flex-row-reverse text-right" title="Hora de Codar" date="(2023)" course="NodeJs" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" andamento />
                                    <TimelineItem className="" title="Cod3r" date="(2022)" course="React Native" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" andamento />
                                    <TimelineItem className=" flex-row-reverse text-right" title="FreeCodeCamp" date="(2022)" course="Responsive web design" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" />
                                    <TimelineItem className="" title="FreeCodeCamp" date="(2022)" course="Front end development" description="Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy" />
                                </RevealWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Timeline