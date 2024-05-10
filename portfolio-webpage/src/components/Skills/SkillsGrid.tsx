import React from 'react'
import Skill from '../Skill/Skill'
import Tag from '../Tag/Tag'

const SkillsGrid = (props: any) => {
    return (
        <div className="py-4">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <div className="mt-6">
                <div className="flex gap-4 flex-wrap">

                    {props.frontend ?
                            <>
                                <Skill tooltipLabel="HTML5" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                                <Skill tooltipLabel="CSS3" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                                <Skill tooltipLabel="Sass" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" />
                                <Skill tooltipLabel="Bootstrap" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" />
                                <Skill tooltipLabel="TailwindCSS" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" />
                                <Skill tooltipLabel="JavaScript" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                                <Skill tooltipLabel="TypeScript" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
                                <Skill tooltipLabel="React.Js / React Native" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
                                <Skill tooltipLabel="Next.Js" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" />
                            </>

                        : null
                    }


                    {props.backend ?
                        <>
                            <Skill tooltipLabel="Node.Js" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-plain.svg" />
                            <Skill tooltipLabel="Python" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" />
                            <Skill tooltipLabel="Php" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" />
                            <Skill tooltipLabel="Java" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" />
                        </> : null
                    }

                    {props.tools ?
                        <>
                            <Skill tooltipLabel="Git" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-plain.svg" />
                            <Skill tooltipLabel="PostgreSQL" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg" />
                            <Skill tooltipLabel="MySql" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" />
                            <Skill tooltipLabel="Figma" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" />
                            <Skill tooltipLabel="Linux" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" />
                            <Skill tooltipLabel="Jira" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg" />
                            <Skill tooltipLabel="Unity" imgUrl="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original.svg" />
                        </>
                        : null
                    }

                    {props.softeng ?
                        <>
                            <Tag text="Engenharia de requisitos" borderColor=" dark:border-gray-700 border-gray-300 " bgColor=" dark:bg-gray-700 bg-gray-200 " />
                            <Tag text="Modelagem de projetos de software" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                            <Tag text="Metodologias ágeis (SCRUM, XP, ASD)" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                            <Tag text="Desenvolvimento ágil" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                            <Tag text="Modelos de processos de software" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                            <Tag text="Arquitetura de Software" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                            <Tag text="Padrões de projeto" borderColor="dark:border-gray-700" bgColor="dark:bg-gray-700 bg-gray-200" />
                        </>
                        : null
                    }
                </div>
            </div >
        </div >
    )
}

export default SkillsGrid
