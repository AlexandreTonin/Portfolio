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
                                    <TimelineItem className="flex-row-reverse text-right" title="Unijuí" date="(2022 - 2026)" course="Bacharelado em Engenharia de Software" description="Em 2022, iniciei o curso de Engenharia de Software, atualmente estou no 4º semestre. No decorrer do curso, explorei diversos tópicos essenciais de engenharia, engenharia de software, computação e modelagem matemática." andamento url="https://www.unijui.edu.br/estude/graduacao/cursos/engenharia-de-software-bacharelado-289" certifiedUrl="/matricula.pdf" certified />

                                    <TimelineItem className="" title="Escola Ténica 25 de Julho" date="(2019 - 2021)" course="Curso Técnico em Informática" description="Em 2019, iniciei um técnologo em Informática integrado ao ensino médio, onde explorei tópicos como desenvolvimento web, redes de computadores, sistemas operacionais, análise de sistemas, conceitos de hardware e manutenção de computadores" url="https://escola25dejulho.com.br/tecnico.php?id=1" certifiedUrl="/tec.png" certified />

                                    <TimelineItem className=" flex-row-reverse text-right" title="Hora de Codar" date="(2023)" course="JavaScript" description="Curso de JavaScript que aborda os conceitos básicos e avançados de JavaScript, como tipos de dados e operadores lógicos, estruturas de programação, funções, orientação a objetos, programação assíncrona, expressões regulares e JavaScript no navegador" andamento url="https://www.udemy.com/course/javascript-do-basico-ao-avancado-com-node-e-projetos/" />

                                    <TimelineItem className="" title="Hora de Codar" date="(2023)" course="ReactJs" description="Curso da biblioteca React do JavaScript, que aborda os conceitos básicos e avançados de React, como a inicialização de projeto, componentes, gerenciamento de páginas, Hooks, Context API, Firebase, Redux, Express, MongoDB, entre outros. " andamento url="https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos" />

                                    <TimelineItem className=" flex-row-reverse text-right" title="Hora de Codar" date="(2023)" course="NodeJs" description="Curso de NodeJs, que aborda os conceitos básicos e avançados de NodeJs, como fundamentos, Core Modules, NPM, API's, Express, Handlebars, MongoDB, MySql, Arquitetura MVC, entre outros." andamento url="https://www.udemy.com/course/nodejs-do-zero-a-maestria-com-diversos-projetos" />

                                    <TimelineItem className="" title="Cod3r" date="(2022)" course="React Native" description="Curso da biblioteca React Native, que aborda os conceitos básicos e avançados de desenvolvimento mobile Android e iOS com React Native, como fundamentos, JavaScript, rotas, eventos, integraçao com backend em NodeJs, ciclo de vida, layouts, Redux, Firebase" url="https://www.udemy.com/course/curso-react-native/" andamento />

                                    <TimelineItem className=" flex-row-reverse text-right" title="FreeCodeCamp" date="(2022)" course="Responsive web design" description="Curso de Design responsivo para a Web, onde aborda HTML para o conteúdo e CSS para o design." url="https://www.freecodecamp.org/learn/2022/responsive-web-design/" certifiedUrl="https://www.freecodecamp.org/certification/fcccb840615-83f9-4770-ba4a-2dfae5f4c292/responsive-web-design" certified />

                                    <TimelineItem className="" title="FreeCodeCamp" date="(2022)" course="Front end development" andamento description="Curso de desenvolvimento em front-end utilizando Bootstrap, Sass, JQuery, React e Redux." url="https://www.freecodecamp.org/learn/front-end-development-libraries" />
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