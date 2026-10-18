import Hero from "../components/home/Hero.jsx"
import Skills from "../components/home/Skills.jsx"
import About from "../components/home/About.jsx"
import Services from "../components/home/Services.jsx"
import Projects from "../components/home/Projects.jsx"
import Certificates from "../components/home/Certificates.jsx"

 export default function Home(){

    return(
    <>
        <Hero/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Certificates/>

        
       
    </>
    )
 }