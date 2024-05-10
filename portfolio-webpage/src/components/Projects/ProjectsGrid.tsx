"use client"

import React from 'react'
import Project from './Project'
import { RevealWrapper } from 'next-reveal'

const ProjectsGrid = () => {
    return (
        <div className="py-12">
            <section className="lg:text-left">
                <RevealWrapper delay={500} duration={500} className="load-hidden">
                    <h2 className="text-3xl font-bold mb-12">
                        Visualize meus projetos
                    </h2>
                </RevealWrapper>

                <RevealWrapper delay={750} duration={500} className="load-hidden">
                    <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-y-6 gap-y-12">
                        <Project projectLink={"http://systemize-ti.com"} imgUrl={"/systemize.jpg"} altText="lorem" ProjectTitle="Systemize" fullstack description="Este projeto trata-se do desenvolvimento do website da minha empresa de consultoria de TI, utilizando React, Next.Js e Python. Até o momento, eu e meus dois sócios estamos construindo uma dashboard completa do zero, voltada para atender às necessidades exclusivas de nossos clientes." />
                        <Project projectLink={"https://swift-rent.vercel.app"} imgUrl={"/logo-swiftrent.jpg"} completo altText="lorem" ProjectTitle="Swift Rent" frontend description="A SwiftRent trata-se de uma landing page de uma empresa fictícia de aluguel de automóveis, desenvolvida com Html e Tailwind CSS. O projeto foi desenvolvido inteiramente por mim, desde o design da marca até o desenvolvimento da webpage. " />
                        <Project projectLink={"https://spotclone.vercel.app"} imgUrl={"/spotify-logo.png"} altText="lorem" completo ProjectTitle="Spotify UI Clone" frontend description="Projeto de UI Clone do App Spotify, desenvolvido com React e Tailwind CSS. Criado com o objetivo de aprender e demonstrar habilidades de desenvolvimento front-end. " />
                        {/* <Project imgUrl={"/arcStudio.jpg"} altText="lorem" ProjectTitle="ArcXstudio" frontend description="A ArcXStudio é uma startup de desenvolvimento de projetos arquitetônicos totalmente modernos e sofisticados. A startup está sendo planejada pelo estudante de Arquitetura e Urbanismo da UFSM, Luiz Arthur Felipin. Minha participação neste projeto é o desenvolvimento da webpage da startup. " /> */}
                        <Project imgUrl={"/veritas_logo.png"} altText="lorem" ProjectTitle="Veritas Bank" frontend description="O Veritas Bank trata-se de uma landing page de um banco fictício. O projeto foi desenvolvido inteiramente por mim, design da marca até o desenvolvimento da webpage. " />
                        {/* <Project imgUrl={"https://thermosite.com/assets/icons/no-image-available.jpg"} altText="lorem" ProjectTitle="E-Commerce" fullstack description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et deleniti provident, vitae autem alias ullam exercitationem numquam nihil aliquam minus nesciunt sit quasi voluptatum, aut voluptates laudantium maiores? Sequi, quidem." /> */}
                    </div>
                </RevealWrapper>
            </section>
        </div>
    )
}

export default ProjectsGrid
