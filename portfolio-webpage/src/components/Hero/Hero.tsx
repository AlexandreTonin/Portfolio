"use client"

import Lottie from 'lottie-react'
import React from 'react'
import hello from '@/assets/lottie/hello.json'
import hello2 from '@/assets/lottie/hello-ios.json'
import helloblack from '@/assets/lottie/hello-dark.json'
import node from '@/assets/lottie/nodejs.json'
import js from '@/assets/lottie/js.json'
import react from '@/assets/lottie/react.json'
import ui from '@/assets/lottie/ui.json'
import developer from '@/assets/lottie/developer.json'
import scroll from '@/assets/lottie/scroll.json'
import scrollblack from '@/assets/lottie/scroll-black.json'
import TypewriterComponent from 'typewriter-effect'
import { Fade, Slide } from 'react-awesome-reveal'
import { RevealWrapper } from 'next-reveal'
import SectionName from '../SectionName/SectionName'

const Styles = {
    hero: "container mx-auto px-6 lg:flex justify-between min-h-screen py-12",
    name: "text-black dark:text-white text-3xl lg:font-black"
}

const Hero = () => {
    return (
        <section className={Styles.hero} id='about'>

            <div className='lg:-mt-0 -mt-12'>
                <Lottie animationData={hello2} loop={false} className='w-60 -ml-12 lg:-mt-12 -mt-24 lg:-mb-0 -mb-8 hidden dark:block'></Lottie>
                <Lottie animationData={helloblack} loop={false} className='w-60 -ml-12 lg:-mt-12 -mt-24 dark:hidden lg:-mb-0 -mb-8'></Lottie>

                <RevealWrapper origin='top' delay={1500} duration={2000}>
                    <SectionName text="/sobre" />
                </RevealWrapper>

                <div className='lg:mt-20 mt-8'>
                    <RevealWrapper origin='top' delay={2000} duration={2000}>
                        <h1 className={Styles.name}>
                            Seja bem vindo ao meu portfólio
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('<br> Me chamo Alexandre Tonin <br> <br class="lg:hidden"> Sou desenvolvedor Front-end e estudante de Engenharia de Software.')
                                        .pauseFor(2000)
                                        .start();
                                }}
                            />
                        </h1>
                    </RevealWrapper>
                </div>

                <RevealWrapper origin='top' delay={8000} duration={2000}>
                    <div className='lg:flex mt-20 hidden gap-8'>
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" />
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" />
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg" />
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
                        <img height={60} width={50} loading="lazy" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" />
                    </div>
                </RevealWrapper>

                <div className='hidden lg:block mt-20'>
                    <RevealWrapper origin='top' delay={13500} duration={2000}>
                        <Lottie animationData={scroll} className='w-10 hidden dark:block'></Lottie>
                        <Lottie animationData={scrollblack} className='w-10 dark:hidden'></Lottie>
                    </RevealWrapper>
                </div>
            </div>

            <div className='flex justify-center'>
                <RevealWrapper origin='top' delay={4000} duration={2000}>
                    <Lottie animationData={developer} className='w-[400px] lg:w-[500px] lg:mt-40 mt-20'></Lottie>
                </RevealWrapper>
            </div>
        </section>
    )
}

export default Hero