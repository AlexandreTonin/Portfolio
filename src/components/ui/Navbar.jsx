export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-4 text-darkGray font-medium">
                <li>
                    <a className="hover:text-white transition hover:underline hover:underline-offset-4" href="#about">Sobre</a>
                </li>
                <li>
                    <a className="hover:text-white transition hover:underline hover:underline-offset-4" href="#services">Serviços</a>
                </li>
                <li>
                    <a className="hover:text-white transition hover:underline hover:underline-offset-4" href="#skills">Habilidades</a>
                </li>
                <li>
                    <a className="hover:text-white transition hover:underline hover:underline-offset-4" href="#projects">Projetos</a>
                </li>
            </ul>
        </nav>
    )
};
