import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'


const Styles = {
    footer: "h-20 flex items-center px-6 lg:px-24 border-t border-gray-300 dark:border-gray-800 justify-between",
}

const Header = () => {
    return (
        <footer className={Styles.footer}>
            <p className='text-gray-600'>© 2023 - Alexandre Tonin </p>
            <div className='flex lg:gap-6 gap-2'>
                <a href='https://github.com/alexandretonin' target='_blank' className='lg:flex text-gray-400 dark:text-gray-600 lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/alexandre-tonin-4b8b2b234/' target='_blank' className='lg:flex text-gray-400 dark:text-gray-600 lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><FaLinkedin /></a>
                <a href='mailto:xandetonin@gmail.com' target='_blank' className='lg:flex text-gray-400 dark:text-gray-600 lg:text-3xl hover:text-gray-100 dark:hover:text-gray-300 transition'><MdEmail /></a>
            </div>
        </footer>
    )
}

export default Header
