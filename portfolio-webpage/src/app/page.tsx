import Contact from "@/components/Contact/Contact"
import Experience from "@/components/Experience/Experience"
import Footer from "@/components/Footer/Footer"
import Formations from "@/components/Formations/Formations"
import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const Styles = {
  mainContainer: "w-screen overflow-hidden bg-white dark:bg-[#0d1117]",
}

// dark: #0D1117
// light: 
export default function Home() {
  return (
    <main className={`${poppins.className} ${Styles.mainContainer}`}>
      <Header />
      <Hero />
      <Formations />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
