import HeroImage from "../../assets/Hero.jpeg";
import CV from "../../assets/CV.pdf";

import {
  FaGithub,
  FaLinkedinIn,
  FaFilePdf,
  
} from "react-icons/fa";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero dark-tech-background" id="hero">
      {/* LEFT: Introduction */}
      <div className="tech-orb tech-orb-one"></div>
<div className="tech-orb tech-orb-two"></div>
<div className="tech-orb tech-orb-three"></div>

<span className="tech-code" style={{ top: "30%", left: "10%" }}>
  {"<div />"}
</span>

<span className="tech-code" style={{ top: "45%", right: "8%" }}>
  {"{ code }"}
</span>

<span className="tech-particle" style={{ top: "15%", left: "28%" }}></span>
<span className="tech-particle" style={{ top: "55%", right: "20%" }}></span>
<span className="tech-particle" style={{ bottom: "15%", left: "40%" }}></span>
      <div className="hero-content">
        <p className="hero-eyebrow">WELCOME TO MY WORLD</p>

        <h1>
          Hi, I'm <span>Zubair Safi</span>
        </h1>

        <h2>
          Junior Software Engineer
          <br />
          &amp; Full Stack Web Developer
        </h2>

        <p className="hero-description">
          I build modern web applications and explore AI and machine learning
          to solve real-world problems. I'm passionate about creating
          interactive web experiences, clean user interfaces, powerful backend
          systems, and seamless APIs using modern technologies.
        </p>

        {/* ACTION BUTTONS */}
        <div className="hero-buttons">
          <a
            href="https://www.linkedin.com/in/mohammad-zubair-safi-336b842b0"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-primary"
          >
            <FaLinkedinIn aria-hidden="true" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/zubairsafi00"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-secondary"
          >
            <FaGithub aria-hidden="true" />
            <span>GitHub</span>
          </a>

          {/* View CV */}
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-button hero-button-cv"
          >
            <FaFilePdf aria-hidden="true" />
            <span>View CV</span>
          </a>

         
        </div>
      </div>

      {/* RIGHT: Profile Image */}
      <div className="hero-image">
        <img src={HeroImage} alt="Zubair Safi" />
      </div>
    </section>
  );
}