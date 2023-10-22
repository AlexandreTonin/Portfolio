"use client"

import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    IconButton
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { AiFillGithub } from 'react-icons/ai'

const Styles = {
    header: "bg-white dark:bg-[#0D1117] h-20 w-screen border-b border-gray-300 dark:border-gray-900 text-black dark:text-white flex items-center px-6 lg:px-24 text-xl justify-between",
    nav: "lg:flex gap-8 hidden items-center bg-white dark:bg-[#0f1117] z-50",
    navItem: "hover:text-sky-400 transition text-md bg-white dark:bg-[#0d1117] z-50",
    hamburguer: "mt-4 w-screen z-50 bg-white dark:bg-[#0f1117] text-lg px-4 border border-gray-100 dark:border-gray-800 rounded",
    menuItem: "hover:text-sky-400 py-2 bg-white dark:bg-[#0f1117] z-50",
    menuDivider: "border-gray-800",
    menuButton: "hover:text-sky-400 transition"
}

const Header = () => {
    return (
        <header className={Styles.header}>
            <h1><a href="#">{"<AlexandreTonin />"}</a></h1>
            <nav className={Styles.nav}>
                <a href="#about" className={Styles.navItem}>Sobre</a>
                <a href="#formations" className={Styles.navItem}>Formações</a>
                <a href="#experience" className={Styles.navItem}>Experiência</a>
                <a href="#projects" className={Styles.navItem}>Projetos</a>
                <a href="#skills" className={Styles.navItem}>Habilidades</a>
                <a href="#contact" className={Styles.navItem}>Contato</a>
            </nav>

            <a href='https://github.com/alexandretonin' target='_blank' className='hidden lg:flex text-black dark:text-white text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><AiFillGithub /></a>

            <div className='lg:hidden z-50'>
                <Menu>
                    <MenuButton
                        className={Styles.menuButton}
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList className={Styles.hamburguer}>
                        <MenuItem className={Styles.menuItem}>
                            <a href="#" className={Styles.navItem}>Sobre</a>
                        </MenuItem>
                        <MenuDivider className={Styles.menuDivider} />
                        <MenuItem className={Styles.menuItem}>
                            <a href="#formations" className={Styles.navItem}>Formações</a>
                        </MenuItem>
                        <MenuDivider className={Styles.menuDivider} />
                        <MenuItem className={Styles.menuItem}>
                            <a href="#experience" className={Styles.navItem}>Experiência</a>
                        </MenuItem>
                        <MenuDivider className={Styles.menuDivider} />
                        <MenuItem className={Styles.menuItem}>
                            <a href="#projects" className={Styles.navItem}>Projetos</a>
                        </MenuItem>
                        <MenuDivider className={Styles.menuDivider} />
                        <MenuItem className={Styles.menuItem}>
                            <a href="#skills" className={Styles.navItem}>Habilidades</a>
                        </MenuItem>
                        <MenuDivider className={Styles.menuDivider} />
                        <MenuItem className={Styles.menuItem}>
                            <a href="#contact" className={Styles.navItem}>Contato</a>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </header>
    )
}

export default Header