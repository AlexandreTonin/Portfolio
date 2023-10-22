"use client"

import SectionName from "../SectionName/SectionName"
import { AiFillGithub } from "react-icons/ai"
import { FaLinkedin } from "react-icons/fa"
import contact from "@/assets/lottie/contact.json"
import Lottie from "lottie-react"
import { RevealList, RevealWrapper } from "next-reveal"

const Styles = {
    sectionContainer: "container mx-auto px-6 bg-white dark:bg-[#0d1117] lg:py-24 py-12 text-black dark:text-white flex justify-between",
}

const Contact = () => {

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Brasil",
            title: "Localização"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "(55) 99187-4280",
            title: "Telefone"
        },
        {
            icon:
                <a href='mailto:xandetonin@gmail.com'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </a>
            ,
            contact: "xandetonin@gmail.com",
            title: "Email"
        },
    ]

    return (
        <section className={Styles.sectionContainer} id='contact'>

            <div>
                <RevealWrapper delay={500} duration={2000} className="load-hidden">
                    <SectionName text="/contato" />
                </RevealWrapper>
                <div className="py-14">
                    <div className="max-w-screen-xl text-gray-300">
                        <div className="max-w-xl space-y-3">
                            <RevealWrapper delay={1500} duration={2000} className="load-hidden">
                                <p className="text-gray-900 dark:text-white text-3xl sm:text-4xl">
                                    Vamos nos conectar
                                </p>
                            </RevealWrapper>
                            <RevealWrapper delay={2500} duration={2000} className="load-hidden">
                                <p>
                                    Acesse minhas redes sociais ou mande uma mensagem em algum dos canais abaixo
                                </p>
                            </RevealWrapper>
                        </div>
                        <div>
                            <ul className="mt-12 flex flex-wrap gap-x-12 gap-y-6 items-center lg:gap-x-24">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx}>
                                            <h4 className="text-sky-600 dark:text-sky-400 text-lg font-medium">{item.title}</h4>
                                            <div className="mt-3 flex items-center gap-x-3">
                                                <div className="flex-none text-gray-400">
                                                    {item.icon}
                                                </div>
                                                <p>{item.contact}</p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <a href='https://github.com/alexandretonin' target='_blank' className='lg:flex text-black dark:text-white text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><AiFillGithub /></a>
                    <a href='https://www.linkedin.com/in/alexandre-tonin-4b8b2b234/' target='_blank' className='lg:flex text-sky-600 text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><FaLinkedin /></a>
                </div>
            </div>
            <Lottie animationData={contact} className="w-[500px] mt-10 hidden lg:block" />
        </section>
    )
}

export default Contact