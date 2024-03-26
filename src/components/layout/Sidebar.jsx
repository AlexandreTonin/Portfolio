import Typewriter from "typewriter-effect";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

export default function Sidebar() {
  return (
    <aside className="border border-lightGray px-12 py-8 w-3/12 text-white min-h-[calc(100vh-3rem)] flex flex-col rounded-lg">
      <div className="flex flex-col items-center">
        <div className="ring-4 ring-gray-300 ring-opacity-10 w-40 h-40 bg-gray-100 rounded-full bg-cover bg-no-repeat bg-[url('https://media.licdn.com/dms/image/D4D03AQFDlcBv_e3r6g/profile-displayphoto-shrink_800_800/0/1711323936415?e=1717027200&v=beta&t=HiCZmKzRUkskwwYNeGWtGkMGxiE-LAjqYw5kq6D4MqY')]"></div>
        <p className="mt-6 text-lg font-semibold text-white name">
          Alexandre Tonin
        </p>
        <small className="text-darkGray">
          <Typewriter
            options={{
              strings: [
                "Estudante de Engenharia de Software",
                "Desenvolvedor Fullstack",
                "Assistente de Sistemas @ Unimed",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
        </small>
      </div>

      <div className="border-b h-1 w-full border-lightGray my-6"></div>

      <section>
        <p>Resumo</p>
        <small className="text-darkGray mt-2">
          Como estudante de Engenharia de Software e Desenvolvedor, foco
          principalmente em desenvolvimento, arquitetura de software, modelagem
          de projetos, gestão da qualidade de software, metodologias ágeis,
          engenharia de requisitos, clean code e boas práticas de Engenharia de
          Software.
        </small>
      </section>

      <div className="border-b h-1 w-full border-lightGray my-6"></div>

      <section className="flex justify-between text-xl *:flex *:items-center *:justify-center">
        <a
          href="https://www.github.com/alexandretonin"
          target="_blank"
          className="border-2 border-lightGray py-3 px-4 rounded hover:bg-darkGray hover:bg-opacity-10 cursor-pointer transition"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-tonin-4b8b2b234/"
          target="_blank"
          className="border-2 border-lightGray py-3 px-4 rounded hover:bg-darkGray hover:bg-opacity-10 cursor-pointer transition"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:xandetonin@gmail.com"
          className="border-2 border-lightGray py-3 px-4 rounded hover:bg-darkGray hover:bg-opacity-10 cursor-pointer transition"
        >
          <MdMailOutline />
        </a>
        <a
          href="https://api.whatsapp.com/send?1=pt_BR&phone=5555991874280"
          target="_blank"
          className="border-2 border-lightGray py-3 px-4 rounded hover:bg-darkGray hover:bg-opacity-10 cursor-pointer transition"
        >
          <FaWhatsapp />
        </a>
      </section>
    </aside>
  );
}
