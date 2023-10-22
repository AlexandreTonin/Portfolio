"use client"

import React from 'react'
import TimelineTwoItem from './TImelineTwoItem'
import { RevealList, RevealWrapper } from 'next-reveal'
import { Fade } from 'react-awesome-reveal'

const TimelineTwo = (props: any) => {
    return (
        <section className="dark:text-white text-black">
            <div className="py-12">
                <div className="">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="mb-14">
                            <RevealWrapper delay={500} duration={500} className="load-hidden">
                                <h3 className="text-3xl font-semibold">{props.title}</h3>
                            </RevealWrapper>

                        </div>
                    </div>
                    <div className="relative col-span-12 lg:px-4 lg:space-y-6 sm:col-span-9">
                        <div className="col-span-12 lg:space-y-12 relative lg:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300 before:dark:bg-gray-700">
                            <RevealWrapper delay={750} duration={500} className="load-hidden">
                                <TimelineTwoItem role="Auxiliar de Sistemas" company="Unimed Noroeste RS" time="08/2023 - até o momento" description="Suporte ao cliente interno no sistema de gestão hospitalar Philips Tasy. Desenvolvimento de scripts SQL no Oracle para geração de relatórios e manipulação de dados." />
                                <TimelineTwoItem role="Bolsista de Pesquisa" company="Espaço Mais Inovação (Unijuí)" time="04/2022 - 08/2023" description="Pesquisas e desenvolvimento para Realidade Virtual (VR) e modelagem de ambientes 3D. Tecnologias: Blender, Nvidia Omniverse, C#, Python, Unity" />
                                <TimelineTwoItem role="Desenvolvedor Trainee" company="Mérito Engenharia de Software" time="03/2022 - 04/2022" description="Desenvolvimento de sistemas comerciais com Programação Orientada a Objetos. Tecnologias: Java e PostgreSQL " />
                                <TimelineTwoItem role="Estagiário de TI" company="Apolo Alarmes" time="07/2021 - 12/2021" description="Manutenção preventiva e corretiva de computadores, suporte a 
usuários, formatação de computadores, configuração de servidor e da rede local da empresa." />
                            </RevealWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimelineTwo